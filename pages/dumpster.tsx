import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Firebase } from "../libs/firebase";

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

  let color: string = "bg-blue-500";
  let val: any = "2";
  let color2: string = "bg-blue-500";
  let val2: any = "2";
  if (total > 1900) {
    color = "bg-red-600";
    toast.error("Vous avez dépassé la limite de la benne.");
    val = "1859";
  } else if (total > 1500) {
    color = "bg-orange-600";
    toast.error(
      "Attention, vous êtes bientôt à la limite maximal de la benne !"
    );
    val = "1690";
  } else if (total > 1400) {
    color = "bg-orange-500";
    val = "1399";
  } else if (total > 1000) {
    color = "bg-yellow-500";
    val = "1300";
  } else if (total > 800) {
    color = "bg-green-500";
    toast.success("Vous pouvez ajouter du poids dans la benne.");
    val = "1000";
  } else if (total > 0) {
    color = "bg-green-500";
    val = "740";
  }

  if (total2 > 1900) {
    color2 = "bg-red-600";
    val2 = "1859";
  } else if (total2 > 1500) {
    color2 = "bg-orange-600";
    val2 = "1690";
  } else if (total2 > 1400) {
    color2 = "bg-orange-500";
    val2 = "1399";
  } else if (total2 > 1000) {
    color2 = "bg-yellow-500";
    val2 = "1300";
  } else if (total2 > 800) {
    color2 = "bg-green-500";
    val2 = "1000";
  } else if (total2 > 0) {
    color2 = "bg-green-500";
    val2 = "740";
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
  const foreal = total - 10 / 10 - val; // testing?
  const foreal2 = total2 - 10 / 10 - val2; // testing?
  return (
    <>
      {total && <Toaster />}
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
                className="hover:scale-105 hover:transform transition w-72 max-w-xl h-36 border-2 border-t-red-600 border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-white flex justify-between rounded"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl">
                      {total + " kg"}
                    </span>

                    <div
                      style={{
                        height: foreal + "px",
                      }} // temporary thing.
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
                className="hover:scale-105 hover:transform transition w-72 max-w-xl h-36 border-2 border-t-red-600 border-l-slate-900 border-b-slate-900 border-r-slate-900 dark:border-white flex justify-between rounded"
                onClick={() => router.push("/send2")}
              >
                <div className="flex justify-end items-end top-0">
                  <div className="flex flex-col">
                    <span className="text-center font-bold text-xl">
                      {total2 + " kg"}
                    </span>

                    <div
                      style={{
                        height: foreal2 + "px",
                      }} // temporary thing.
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
