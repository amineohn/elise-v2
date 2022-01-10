import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
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
      .collection("tests")
      .orderBy("date", "desc")
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
    } else {
      setSuccess("Félicitation, vous avez bien été enregistré");
      fire.collection("test").add({
        value: value + "kg",
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
      <button
        className="fixed bottom-0 right-0 m-4 p-2 bg-pink-100 text-pink-400 hover:bg-pink-50 transition hover:text-pink-500 rounded-2xl shadow-lg cursor-pointer"
        onClick={download}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"
          ></path>
        </svg>
      </button>
      <div className="h-screen my-48 scale">
        {success && (
          <div className="flex justify-center">
            <div className="text-center text-green-500">{success}</div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <div className="text-center text-red-500">{error}</div>
          </div>
        )}

        <div className="flex flex-col py-5 px-1 space-y-2">
          {downloaded && (
            <div className="fixed left-0 bottom-0 m-4 p-8 bg-pink-800 shadow-md hover:shodow-lg rounded-2xl max-w-xl animate-heartbeat">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 rounded-2xl p-3 border border-pink-800 text-pink-400 bg-pink-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none text-neutral-100">
                      nice gg
                    </div>
                    <p className="text-sm text-pink-200 leading-none mt-1">
                      woohooo you did it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <svg
              className="fill-current text-black w-5 h-5 mt-2 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              onClick={() => router.push("/chose")}
            >
              <path
                fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              />
            </svg>
            <h1 className="text-center font-bold text-2xl">Saisir un poids</h1>
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-bold">{text}</span>
                <input
                  type="text"
                  className="py-3 px-4 rounded-lg border border-black font-bold"
                  value={value + " kg"}
                />
                <div>
                  <div className="grid grid-cols-1 space-y-1">
                    <div className="space-x-1">
                      <button type="button">
                        <div
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
                          className="rounded-full w-20 h-20 border border-black bg-white"
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
