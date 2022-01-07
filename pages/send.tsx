import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const [value, setValue] = React.useState("");
  const text = "Papier > Benne > 200kg";

  return (
    <>
      <div className="h-screen my-48">
        <div className="flex flex-col py-5 px-1 space-y-2">
          <div>
            <h1 className="text-center font-bold text-2xl">Saisir un poids</h1>
          </div>
          <div className="flex justify-center items-center">
            <form>
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
                      <button type="button">
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
