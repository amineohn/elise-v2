import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  const [dumpster, setDumpster] = useState({ [router.pathname]: true });
  const [selected, setSelected] = useState("");
  const [width, setWidth] = useState("");
  useEffect(() => {
    if (router.query.dumpster) {
      setDumpster(router.query.dumpster as any);
    }
  }, [router.query.dumpster]);

  useEffect(() => {
    if (router.query.selected) {
      setSelected(router.query.selected as any);
    }
  }, [router.query.selected]);

  // check current values from the database and update the state with firebase
  useEffect(() => {
    const fire = new Firebase();
    const db = fire.getFireStore();
    db.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setWidth(data as any);
    });
    if (width >= "1500") {
      console.log("tu ne dois pas dépasser 1500"); // test
    } else {
      console.log("tu dois dépasser 1500"); // test
    }
  }, []);

  return (
    <>
      <div className="border border-black dark:border-white w-10 h-10 ml-6 mt-5 rounded-full px-2.5 py-2">
        <svg
          className="fill-current text-black dark:text-white w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => router.push("/")}
        >
          <path
            fill="currentColor"
            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
          />
        </svg>
      </div>
      <div className="flex flex-col py-5 px-1 space-y-2 my-20 scale">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-2xl">Choisir une benne</h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 space-y-1">
            {selected === "1" ? (
              <div className="bg-green-500 rounded-lg p-2">
                <div className="flex justify-center">
                  <svg
                    className="fill-current text-white w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path fill="currentColor" d="" />
                  </svg>
                </div>
              </div>
            ) : (
              <div
                className="bg-white rounded-lg p-2"
                onClick={() => {
                  setSelected("1");
                  router.push({
                    pathname: "/chose",
                    query: {
                      selected: "1",
                      dumpster: true,
                    },
                  });
                }}
              >
                <div className="flex justify-center">
                  <svg
                    className="fill-current text-green-500 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path fill="currentColor" d="" />
                  </svg>
                </div>
              </div>
            )}

            {dumpster[router.pathname] && (
              <>
                <div>
                  <div
                    className="w-72 max-w-xl h-36 border border-black dark:border-white flex justify-between rounded"
                    onClick={() => router.push("/send")}
                  >
                    <div className="flex justify-end items-end top-0">
                      <div className="flex flex-col">
                        <span className="text-center font-bold text-xl">
                          200kg
                        </span>
                        <div
                          style={{ height: width + "px" }}
                          className="bg-black dark:bg-white w-[286px] bottom-0 rounded-b"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-center font-bold text-xl">
                      Benne 1
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className="w-72 max-w-xl h-36 border border-black dark:border-white flex justify-between rounded"
                    onClick={() => router.push("/send")}
                  >
                    <div className="flex justify-end items-end top-0">
                      <div className="flex flex-col">
                        <span className="text-center font-bold text-xl">
                          100kg
                        </span>
                        <div
                          style={{ height: "5px" }}
                          className="bg-black dark:bg-white w-[286px] bottom-0 rounded-b"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <span className="text-center font-bold text-xl">
                      Benne 2
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
