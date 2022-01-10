import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { Data } from "../libs/types";
const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [downloaded, setDownload] = useState(false);
  const [data, setData] = useState([{}] as any);
  const text = "Papier > Benne > 200kg";
  const fire = new Firebase();
  useEffect(() => {
    fire
      .collection("test")
      .orderBy("value", "desc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
      });
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") {
      setError("Veuillez entrer une valeur");
      toast.error("Veuillez entrer une valeur");
    } else {
      setSuccess("Félicitation, vous avez bien été enregistré");
      toast.success("Félicitation, vous avez bien été enregistré");
      fire.collection("test").add({
        value: value + " kg",
      });
    }
  };
  const router = useRouter();
  const download = async () => {
    try {
      const csvData = await data.map((item: Data) => {
        return `${item.value}`;
      });
      const csv = new Blob([csvData], {
        type: "text/csv",
      });
      const url = URL.createObjectURL(csv);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      a.click();
      URL.revokeObjectURL(url);
      setDownload(true);
    } catch (error) {
      setDownload(false);
      console.log(error);
    }
    setInterval(() => {
      setDownload(false);
    }, 5000);
  };
  return (
    <>
      {success && <Toaster />}
      {error && <Toaster />}

      <div className="flex flex-col">
        <div className="border border-black dark:border-white w-10 h-10 ml-6 mt-5 rounded-full px-2.5 py-2">
          <svg
            className="fill-current text-black dark:text-white w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => router.push("/chose")}
          >
            <path
              fill="currentColor"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            />
          </svg>
        </div>
        <div className="border border-black dark:border-white w-10 h-10 ml-6 mt-3 rounded-full px-2.5 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 mr-1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={download}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </div>
      </div>
      <div className="h-screen my-10 scale">
        <div className="flex flex-col py-5 px-1 space-y-2">
          <div className="flex justify-center">
            <h1 className="text-center font-bold text-2xl">Saisir un poids</h1>
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-bold">{text}</span>
                <input
                  type="text"
                  className="py-3 px-4 rounded-lg border border-black dark:border-white dark:bg-black font-bold"
                  value={value + " kg"}
                />
                <div>
                  <div className="grid grid-cols-1 space-y-1">
                    <div className="space-x-1">
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "1")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              1
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "2")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              2
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "3")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              3
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="space-x-1">
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "4")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              4
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "5")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              5
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "6")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              6
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="space-x-1">
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "7")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              7
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "8")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              8
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "9")}
                        >
                          <div className="my-5">
                            <span className="text-center text-3xl font-bold">
                              9
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="space-x-1">
                      <button className="mr-0.5" type="button">
                        <div
                          className="rounded-full w-20 h-20 bg-red-500"
                          onClick={() => setValue("")}
                        >
                          <div className="p-5">
                            <span className="text-3xl font-bold text-white">
                              A
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border dark:text-white dark:bg-black border-black dark:border-white bg-white"
                          onClick={() => setValue(value + "0")}
                        >
                          <div className="p-5">
                            <span className="text-center text-3xl font-bold">
                              0
                            </span>
                          </div>
                        </div>
                      </button>
                      <button type="submit">
                        <div className="rounded-full w-20 h-20 bg-green-500">
                          <div className="p-5">
                            <span className=" text-3xl font-bold text-white">
                              V
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
