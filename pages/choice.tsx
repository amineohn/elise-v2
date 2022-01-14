import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Firebase } from "../libs/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  const [dumpster, setDumpster] = useState({ [router.pathname]: true });
  const [selected, setSelected] = useState("");
  const [width, setWidth] = useState(0);
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

  useLayoutEffect(() => {
    const fire = new Firebase();
    fire.collection("test").onSnapshot((snapshot) => {
      // calculate values form firebase and update the state
      const values = snapshot.docs.map((doc) => doc.data().value);
      const total = values.reduce((acc, cur) => acc + cur.value, 0) as any;
      const average = total / values.length;
      const data = snapshot.docs.map((doc) => doc.data());
      setWidth(average * 100);
      console.log(data);
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dumpster = e.target.value;
    setDumpster({ [dumpster]: true });
    setSelected(dumpster);

    router.push(`/choice?dumpster=${dumpster}`);
  };

  return (
    <>
      <div className="flex flex-col py-5 px-1 space-y-2 my-20 scale">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir une benne
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
            <div className="mt-10">
              <div
                className="w-72 max-w-xl h-36 border-2 border-t-transparent border-l-black border-b-black border-r-black dark:border-white flex justify-between rounded"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl">200kg</span>
                    <div
                      style={{ height: 20 + "px" }}
                      className="bg-black dark:bg-white w-[286px] bottom-0 rounded-b"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">Benne 1</span>
              </div>
            </div>
            <div className="mt-10">
              <div
                className="w-72 max-w-xl h-36 border-2 border-t-transparent border-l-black border-b-black border-r-black dark:border-white flex justify-between rounded"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl">100kg</span>
                    <div
                      style={{ height: "5px" }}
                      className="bg-black dark:bg-white w-[286px] bottom-0 rounded-b"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">Benne 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
