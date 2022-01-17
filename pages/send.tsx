import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { Data } from "../libs/types";
import Loading from "../components/loading";
const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [downloaded, setDownload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}] as any);
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
    const mapped = data.map((item) => item.value * 1);
    const total = mapped.reduce((acc, cur) => acc + cur, 0);
    setData(total);
  }, []);
  // check if firebase is connected
  useEffect(() => {
    setLoading(true);
    if (fire.isConnected()) {
      setLoading(false);
    }
    // check form is valid and set loading to submit
  }, [fire.isConnected()]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (data >= 2000) {
      toast.error("Tu as dépasser la limite");
      return;
    }
    // check to the database if the value is already in the database
    if (value === "") {
      setError("Veuillez entrer une valeur");
      toast.error("Veuillez entrer une valeur");
      setLoading(false);
      return;
    } else {
      toast.success("Valeur ajoutée");
      setValue("");
      fire
        .collection("test")
        .where("value", "==", data)
        .get()
        .then((snapshot) => {
          setLoading(false);
          if (snapshot.empty) {
            // if the value is not in the database, then add it
            fire
              .collection("test")
              .add({
                value: value,
              })
              .then(() => {
                setSuccess("Votre valeur a été ajoutée");
              })
              .catch((error) => {
                setError(error.message);
              });
          } else {
            // if the value is in the database, then show an error
            setError("Votre valeur existe déjà");
            toast.error("Votre valeur existe déjà");
          }
        });
    }
    setLoading(false);
  };
  const text = `Papier > Benne 1 > 300kg`;

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
      toast.success("Fichier téléchargé");
    } catch (error) {
      setDownload(false);
      toast.error("Erreur lors du téléchargement");
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
      {downloaded && <Toaster />}

      <div className="h-screen my-10 scale">
        <div className="flex flex-col py-5 px-1 space-y-3">
          <div className="flex justify-center">
            {loading && <Loading />}
            <h1 className="text-center font-bold text-3xl uppercase">
              Saisir un poids
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center items-center">
                  <span className="text-xl font-bold">{text}</span>
                </div>
                <br />
                <div className="space-y-4">
                  {value ? (
                    <input
                      type="text"
                      className="text-center text-2xl py-3 px-4 rounded-lg border border-black dark:border-white dark:bg-black font-bold"
                      value={value + " kg"}
                    />
                  ) : (
                    <input
                      type="text"
                      className="text-center text-2xl py-3 px-4 rounded-lg border border-black dark:border-white dark:bg-black font-bold"
                      value={0 + " kg"}
                    />
                  )}
                </div>
                <br />
                <div>
                  <div className="flex justify-center items-center">
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
                        {value.length > 0 ? (
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
                        ) : (
                          <button className="mr-0.5" type="button" disabled>
                            <div
                              className="rounded-full w-20 h-20 bg-neutral-300"
                              onClick={() => setValue("")}
                            >
                              <div className="p-5">
                                <span className="text-3xl font-bold text-white">
                                  A
                                </span>
                              </div>
                            </div>
                          </button>
                        )}
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
                        {value.length > 0 ? (
                          <button type="submit">
                            <div className="rounded-full w-20 h-20 bg-green-500">
                              <div className="p-5">
                                <span className=" text-3xl font-bold text-white">
                                  V
                                </span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button type="submit" disabled>
                            <div className="rounded-full w-20 h-20 bg-neutral-300">
                              <div className="p-5">
                                <span className=" text-3xl font-bold text-white">
                                  V
                                </span>
                              </div>
                            </div>
                          </button>
                        )}
                      </div>
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
