import type { NextPage } from "next";
import React, { FormEvent, useEffect, useState } from "react";
import { Firebase } from "../../../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { configuration } from "../../../utils/configuration";
import { Transition } from "@headlessui/react";
const Send: NextPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [prevent, setPrevent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([{}] as any);
  const fire = new Firebase();
  const router = useRouter();
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test4").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        date: doc.data().date,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total = mapped.reduce((acc, cur) => acc + cur, 0);
      setData(total);
      if (value === "") {
      } else {
        setData(value);
      }
      if (total > 2500) {
        toast.error(
          "Attention, vous êtes à plus de 2500kg, Un mail sera directement envoyé au gérant de l'exploitation"
        );
        // send mail to admin
        fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "amineprojet7@gmail.com",
            subject: "Alerte ELISE Production",
            text: `Alerte: la benne est actuellement à 2500kg. Le poids actuel est de ${total}kg.`,
          }),
        });
      }
      setPrevent(true);
    });
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check to the database if the value is already in the database
    if (value === "") {
      return;
    } else {
      toast.success("Valeur ajoutée");
      setValue("");
      fire
        .collection("test4")
        .where("value", "==", data)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            // if the value is not in the database, then add it
            fire
              .collection("test4")
              .add({
                value: value,
                date: new Date().toLocaleString(),
                dumpster: "Benne 4",
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
  const handleDelete = () => {
    // delete all data in collection
    fire
      .collection("test4")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };
  const text = `Papier > Benne 4 > ${data} kg`;
  // download button to download the data
  return (
    <>
      <Transition
        show={showModal}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="justify-center items-center flex z-50 h-screen">
          <div className="flex flex-col p-8 bg-rose-500 border-b-4 border-rose-600 shadow-md hover:shodow-lg rounded-2xl items-center justify-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 rounded-2xl p-3 border border-rose-700 text-rose-500 bg-rose-700"
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
                  <div className="font-medium leading-none text-neutral-50">
                    Etes-vous sûr de vouloir supprimée les données ?
                  </div>
                  <p className="text-sm text-rose-200 leading-none mt-1">
                    Attention, cette action est irréversible.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  className="flex-no-shrink bg-rose-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-rose-800 text-white rounded-xl"
                  onClick={() => {
                    handleDelete();
                    setShowModal(false);
                  }}
                >
                  Oui
                </button>
                <button
                  className="flex-no-shrink bg-green-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-green-800 text-white rounded-xl"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Non
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Toaster />
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
                    <div className="grid grid-cols-1 space-y-2">
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
                      {value === configuration.code.access && (
                        <div className="flex justify-center items-center !mt-3 scale">
                          <a
                            className="px-5 py-3 rounded-lg border-b-2 hover:scale-105 bg-rose-500 text-rose-50 border-rose-600 transition cursor-pointer"
                            onClick={() => {
                              router.push("/admin");
                            }}
                          >
                            Administration
                          </a>
                        </div>
                      )}
                      {value === "000000" && (
                        <div className="flex justify-center items-center !mt-3 scale">
                          <a
                            className="px-5 py-3 rounded-lg border-b-2 hover:scale-105 bg-rose-500 text-rose-50 border-rose-600 transition cursor-pointer"
                            onClick={() => {
                              setShowModal(true);
                            }}
                          >
                            Supprimer benne 4
                          </a>
                        </div>
                      )}
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