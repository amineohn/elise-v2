import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../../../libs/firebase";

const Home: NextPage = () => {
  const [total, setTotal] = useState([{}] as any);
  const [maxWeight, setMaxWeight] = useState([{}] as any);
  const [dumpsters, setDumpsters] = useState([
    {
      id: "1",
      name: "Écrit couleur",
      weight: "0",
      color: "bg-blue-500",
    },
  ]);

  useEffect(() => {
    setDumpsters([
      {
        id: "1",
        name: "Benne 7",
        weight: "0",
        color: "bg-blue-500",
      },
    ]);
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("settings").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        weight: doc.data().weight,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.weight);
      setMaxWeight(mapped);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test7").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal(total);
    });
  }, []);

  let totalPercent: any = (total / maxWeight) * 140;

  let color: string = "bg-green-500";

  if (totalPercent > 140) {
    color = "bg-red-900";
  } else if (totalPercent > 130) {
    color = "bg-red-800";
  } else if (totalPercent > 120) {
    color = "bg-red-700";
  } else if (totalPercent > 110) {
    color = "bg-red-600";
  } else if (totalPercent > 100) {
    color = "bg-red-700";
  } else if (totalPercent > 90) {
    color = "bg-orange-600";
  } else if (totalPercent > 80) {
    color = "bg-orange-500";
  } else if (totalPercent > 70) {
    color = "bg-yellow-500";
  } else if (totalPercent > 60) {
    color = "bg-green-500";
  } else if (totalPercent > 50) {
    color = "bg-green-500";
  } else if (totalPercent > 40) {
    color = "bg-green-500";
  } else if (totalPercent > 30) {
    color = "bg-green-500";
  } else if (totalPercent > 20) {
    color = "bg-green-500";
  } else if (totalPercent > 10) {
    color = "bg-green-500";
  }
  const router = useRouter();

  const dumpster = (
    dumpsters: any,
    directory: any,
    percent: any,
    colors: any,
    totalValue: any
  ) => {
    return (
      <div>
        <div
          className="hover:scale-105 hover:transform transition w-72 ml-0 lg:ml-4 max-w-xl h-36 border-2 border-transparent rounded-tl-none rounded-tr-none border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
          onClick={() => {
            router.push(directory);
            if (typeof window !== "undefined") {
              localStorage.setItem("dumpsters", JSON.stringify(dumpsters));
            }
          }}
        >
          <div className="flex justify-end items-end top-0">
            <div className="flex flex-col">
              <span className="text-center font-bold text-xl z-50">
                {totalValue + " kg"}
              </span>

              <div
                style={{ height: percent + "px" }}
                className={`${colors} w-[284px] bottom-0 rounded-b-sm !max-h-[140px]`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-center font-bold text-xl">{dumpsters}</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col py-5 px-1 space-y-2 h-screen scale items-center justify-center !overflow-auto">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir une benne
          </h1>
        </div>
        <div className="h-[400px] overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
            <>
              {dumpster(
                dumpsters[0].name,
                "/add/seven/content",
                totalPercent,
                color,
                total
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
