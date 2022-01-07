import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Firebase } from "../libs/firebase";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const text = "Papier > Benne > 200kg";
  const fire = new Firebase();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") {
      setError("Veuillez entrer une valeur");
    } else {
      setSuccess("Félicitation, vous avez bien été enregistré");
      fire.collection("test").add({
        value: value,
      });
    }
  };
  const router = useRouter();
  return (
    <>
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
