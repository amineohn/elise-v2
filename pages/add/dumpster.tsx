import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  const [total, setTotal] = useState([{}] as any);
  const [total2, setTotal2] = useState([{}] as any);
  const [total3, setTotal3] = useState([{}] as any);
  const [total4, setTotal4] = useState([{}] as any);
  const [maxWeight, setMaxWeight] = useState([{}] as any);
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
    fire.collection("test").onSnapshot((snapshot) => {
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
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test2").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total2 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal2(total2);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test3").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total3 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal3(total3);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test4").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total4 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal4(total4);
    });
  }, []);
  let totalPercent: any = (total / maxWeight) * 140;
  let totalPercent2: any = (total2 / maxWeight) * 140;
  let totalPercent3: any = (total3 / maxWeight) * 140;
  let totalPercent4: any = (total4 / maxWeight) * 140;

  let color: string = "bg-green-500";
  let color2: string = "bg-green-500";
  let color3: string = "bg-green-500";
  let color4: string = "bg-green-500";

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
  if (totalPercent3 > 140) {
    color3 = "bg-red-900";
  } else if (totalPercent3 > 130) {
    color3 = "bg-red-800";
  } else if (totalPercent3 > 120) {
    color3 = "bg-red-700";
  } else if (totalPercent3 > 110) {
    color3 = "bg-red-600";
  } else if (totalPercent3 > 100) {
    color3 = "bg-red-700";
  } else if (totalPercent3 > 90) {
    color3 = "bg-orange-600";
  } else if (totalPercent3 > 80) {
    color3 = "bg-orange-500";
  } else if (totalPercent3 > 70) {
    color3 = "bg-yellow-500";
  } else if (totalPercent3 > 60) {
    color3 = "bg-green-500";
  } else if (totalPercent3 > 50) {
    color3 = "bg-green-500";
  } else if (totalPercent3 > 40) {
    color3 = "bg-green-500";
  } else if (totalPercent3 > 30) {
    color3 = "bg-green-500";
  } else if (totalPercent3 > 20) {
    color3 = "bg-green-5003";
  } else if (totalPercent3 > 10) {
    color3 = "bg-green-500";
  }
  if (totalPercent4 > 140) {
    color4 = "bg-red-900";
  } else if (totalPercent4 > 130) {
    color4 = "bg-red-800";
  } else if (totalPercent4 > 120) {
    color4 = "bg-red-700";
  } else if (totalPercent4 > 110) {
    color4 = "bg-red-600";
  } else if (totalPercent4 > 100) {
    color4 = "bg-red-700";
  } else if (totalPercent4 > 90) {
    color4 = "bg-orange-600";
  } else if (totalPercent4 > 80) {
    color4 = "bg-orange-500";
  } else if (totalPercent4 > 70) {
    color4 = "bg-yellow-500";
  } else if (totalPercent4 > 60) {
    color4 = "bg-green-500";
  } else if (totalPercent4 > 50) {
    color4 = "bg-green-500";
  } else if (totalPercent4 > 40) {
    color4 = "bg-green-500";
  } else if (totalPercent4 > 30) {
    color4 = "bg-green-500";
  } else if (totalPercent4 > 20) {
    color4 = "bg-green-500";
  } else if (totalPercent4 > 10) {
    color4 = "bg-green-500";
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
    {
      id: "3",
      name: "Blanc 2",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "4",
      name: "Blanc 3",
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
      {
        id: "3",
        name: "Blanc 2",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "4",
        name: "Blanc 3",
        weight: "0",
        color: "bg-blue-500",
      },
    ]);
  }, []);
  return (
    <>
      <div className="flex flex-col py-5 px-1 space-y-2 h-screen scale items-center justify-center !overflow-auto">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir une benne
          </h1>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mt-10 gap-4">
            <div>
              <div
                className="hover:scale-105 hover:transform transition w-72 ml-0 lg:ml-4 max-w-xl h-36 border-2 border-transparent rounded-tl-none rounded-tr-none border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
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
            <div>
              <div
                className="hover:scale-105 hover:transform transition max-w-xl h-36 border-2 border-transparent rounded-tl-none rounded-tr-none border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
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
            <div>
              <div
                className="hover:scale-105 hover:transform transition max-w-xl h-36 border-2 border-transparent rounded-tl-none rounded-tr-none border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
                onClick={() => router.push("/add/three/content")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl z-50">
                      {total3 + " kg"}
                    </span>

                    <div
                      style={{ height: totalPercent3 + "px" }} // temporary thing.
                      className={`${color3} w-[284px] bottom-0 rounded-b-sm !max-h-[140px]`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">
                  {dumpsters[2].name}
                </span>
              </div>
            </div>
            <div>
              <div
                className="hover:scale-105 hover:transform transition  max-w-xl h-36 border-2 border-transparent rounded-tl-none rounded-tr-none border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-l-white dark:border-b-white dark:border-r-white flex justify-between rounded"
                onClick={() => router.push("/add/fourth/content")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl z-50">
                      {total4 + " kg"}
                    </span>

                    <div
                      style={{ height: totalPercent4 + "px" }} // temporary thing.
                      className={`${color4} w-[284px] bottom-0 rounded-b-sm !max-h-[140px]`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold text-xl">
                  {dumpsters[3].name}
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
