import type { NextPage } from "next";
import React, { FormEvent, useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
const Send: NextPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState([{}] as any);
  const fire = new Firebase();
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id ? doc.id : "no one exist? :/",
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total = mapped.reduce((acc, cur) => acc + cur, 0);
      setData(total);
      if (total > 1900) {
        setError("Vous avez dépassé la limite de la benne.");
      } else if (total > 1500) {
        setError(
          "Attention, vous êtes bientôt à la limite maximal de la benne !"
        );
      }
      if (value === "") {
      } else {
        setData(value);
      }
    });
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data >= 2000) {
      toast.error("Tu as dépasser la limite");
      return;
    }
    // check to the database if the value is already in the database
    if (value === "") {
      setError("Veuillez entrer une valeur");
      toast.error("Veuillez entrer une valeur");
      return;
    } else {
      toast.success("Valeur ajoutée");
      setValue("");
      fire
        .collection("test")
        .where("value", "==", data)
        .get()
        .then((snapshot) => {
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
          }
        });
    }
  };
  const text = `Papier > Benne 1 > ${data} kg`;
  // download button to download the data
  return (
    <>
      {success && <Toaster />}
      {error && <Toaster />}

      <div className="h-screen my-10 scale">
        <div className="flex flex-col py-5 px-1 space-y-3">
          <div className="flex justify-center">
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
                      className="text-center text-2xl py-3 px-4 rounded-lg border border-slate-900 dark:border-white dark:bg-slate-900 font-bold"
                      value={value + " kg"}
                    />
                  ) : (
                    <input
                      type="text"
                      className="text-center text-2xl py-3 px-4 rounded-lg border border-slate-900 dark:border-white dark:bg-slate-900 font-bold"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                              className="rounded-full w-20 h-20 bg-red-500 transition-colors"
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
                              className="rounded-full w-20 h-20 bg-neutral-300 transition-colors"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-900 border-slate-900 dark:border-white bg-white"
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
                            <div className="rounded-full w-20 h-20 bg-green-500 transition-colors">
                              <div className="p-5">
                                <span className=" text-3xl font-bold text-white">
                                  V
                                </span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button type="submit" disabled>
                            <div className="rounded-full w-20 h-20 bg-neutral-300 transition-colors">
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
export default Send;
