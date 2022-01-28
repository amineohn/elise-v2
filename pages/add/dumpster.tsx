import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Firebase } from "../../libs/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  const [total, setTotal] = useState([{}] as any);
  const [total2, setTotal2] = useState([{}] as any);
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
      setTotal(total);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test2").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id ? doc.id : "no one exist? :/",
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total2 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal2(total2);
    });
  }, []);
  let totalPercent: any = (total / 2000) * 100;
  let totalPercent2: any = (total2 / 2000) * 100;
  let color: string = "bg-green-500";
  let color2: string = "bg-green-500";
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
  if (totalPercent2 > 140) {
    color2 = "bg-red-900";
  } else if (totalPercent2 > 130) {
    color2 = "bg-red-800";
  } else if (totalPercent2 > 120) {
    color2 = "bg-red-700";
  } else if (totalPercent2 > 110) {
    color2 = "bg-red-600";
  } else if (totalPercent2 > 100) {
    color2 = "bg-red-700";
  } else if (totalPercent2 > 90) {
    color2 = "bg-orange-600";
  } else if (totalPercent2 > 80) {
    color2 = "bg-orange-500";
  } else if (totalPercent2 > 70) {
    color2 = "bg-yellow-500";
  } else if (totalPercent2 > 60) {
    color2 = "bg-green-500";
  } else if (totalPercent2 > 50) {
    color2 = "bg-green-500";
  } else if (totalPercent2 > 40) {
    color2 = "bg-green-500";
  } else if (totalPercent2 > 30) {
    color2 = "bg-green-500";
  } else if (totalPercent2 > 20) {
    color2 = "bg-green-500";
  } else if (totalPercent2 > 10) {
    color2 = "bg-green-500";
  }

  const [dumpsters, setDumpsters] = useState([
    {
      id: "1",
      name: "Écrit couleur",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "2",
      name: "Blanc",
      weight: "0",
      color: "bg-blue-500",
    },
  ]);

  useEffect(() => {
    setDumpsters([
      {
        id: "1",
        name: "Écrit couleur",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "2",
        name: "Blanc",
        weight: "0",
        color: "bg-blue-500",
      },
    ]);
  }, []);
  return (
    <>
      <Toaster />
      <div className="flex flex-col py-5 px-1 space-y-2 h-screen scale items-center justify-center">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir une benne
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
            <div className="mt-10">
              <div
                className="hover:scale-105 hover:transform transition w-72 max-w-xl h-36 border-2 border-t-red-600 border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
                onClick={() => router.push("/add/one/content")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl z-50">
                      {total + " kg"}
                    </span>

                    <div
                      style={{ height: totalPercent + "px" }} // temporary thing.
                      className={`${color} w-[284px] bottom-0 rounded-b-sm !max-h-[140px]`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">
                  {dumpsters[1].name}
                </span>
              </div>
            </div>
            <div className="mt-10">
              <div
                className="hover:scale-105 hover:transform transition w-72 max-w-xl h-36 border-2 border-t-red-600 border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
                onClick={() => router.push("/add/two/content")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl z-50">
                      {total2 + " kg"}
                    </span>

                    <div
                      style={{ height: totalPercent2 + "px" }} // temporary thing.
                      className={`${color2} w-[284px] bottom-0 rounded-b-sm !max-h-[140px]`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">
                  {dumpsters[0].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
