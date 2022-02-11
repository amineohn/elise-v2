import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
import { User } from "../../libs/types";

const Home: NextPage = () => {
  const router = useRouter();
  const [total, setTotal] = useState([{}] as any);
  const [total2, setTotal2] = useState([{}] as any);
  const [total3, setTotal3] = useState([{}] as any);
  const [total4, setTotal4] = useState([{}] as any);
  const [total5, setTotal5] = useState([{}] as any);
  const [total6, setTotal6] = useState([{}] as any);
  const [total7, setTotal7] = useState([{}] as any);
  const [total8, setTotal8] = useState([{}] as any);
  const [total9, setTotal9] = useState([{}] as any);
  const [total10, setTotal10] = useState([{}] as any);
  const [total11, setTotal11] = useState([{}] as any);
  const [maxWeight, setMaxWeight] = useState([{}] as any);
  const [data, setData] = useState([{}] as any);
  useEffect(() => {
    const fire = new Firebase();
    fire
      .collection("matters")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const matters = data.map((matter: any) => matter.name);
        setData(matters);
      });
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
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test5").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total5 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal5(total5);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test6").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total6 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal6(total6);
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
      const total7 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal7(total7);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test8").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total8 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal8(total8);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test9").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total9 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal9(total9);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test10").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total10 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal10(total10);
    });
  }, []);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test11").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total11 = mapped.reduce((acc, cur) => acc + cur, 0);
      setTotal11(total11);
    });
  }, []);

  const dumpster = (
    item: any,
    type: any,
    dumpsters: any,
    directory: any,
    percent: any,
    colors: any,
    totalValue: any
  ) => {
    if (item !== type) {
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
    }
  };
  let totalPercent: any = (total / maxWeight) * 140;
  let totalPercent2: any = (total2 / maxWeight) * 140;
  let totalPercent3: any = (total3 / maxWeight) * 140;
  let totalPercent4: any = (total4 / maxWeight) * 140;
  let totalPercent5: any = (total5 / maxWeight) * 140;
  let totalPercent6: any = (total6 / maxWeight) * 140;
  let totalPercent7: any = (total7 / maxWeight) * 140;
  let totalPercent8: any = (total8 / maxWeight) * 140;
  let totalPercent9: any = (total9 / maxWeight) * 140;
  let totalPercent10: any = (total10 / maxWeight) * 140;
  let totalPercent11: any = (total11 / maxWeight) * 140;

  let color: string = "bg-green-500";
  let color2: string = "bg-green-500";
  let color3: string = "bg-green-500";
  let color4: string = "bg-green-500";
  let color5: string = "bg-green-500";
  let color6: string = "bg-green-500";
  let color7: string = "bg-green-500";
  let color8: string = "bg-green-500";
  let color9: string = "bg-green-500";
  let color10: string = "bg-green-500";
  let color11: string = "bg-green-500";

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
  if (totalPercent5 > 140) {
    color5 = "bg-red-900";
  } else if (totalPercent5 > 130) {
    color5 = "bg-red-800";
  } else if (totalPercent5 > 120) {
    color5 = "bg-red-700";
  } else if (totalPercent5 > 110) {
    color5 = "bg-red-600";
  } else if (totalPercent5 > 100) {
    color5 = "bg-red-700";
  } else if (totalPercent5 > 90) {
    color5 = "bg-orange-600";
  } else if (totalPercent5 > 80) {
    color5 = "bg-orange-500";
  } else if (totalPercent5 > 70) {
    color5 = "bg-yellow-500";
  } else if (totalPercent5 > 60) {
    color5 = "bg-green-500";
  } else if (totalPercent5 > 50) {
    color5 = "bg-green-500";
  } else if (totalPercent5 > 40) {
    color5 = "bg-green-500";
  } else if (totalPercent5 > 30) {
    color5 = "bg-green-500";
  } else if (totalPercent5 > 20) {
    color5 = "bg-green-500";
  } else if (totalPercent5 > 10) {
    color5 = "bg-green-500";
  }
  if (totalPercent6 > 140) {
    color6 = "bg-red-900";
  } else if (totalPercent6 > 130) {
    color6 = "bg-red-800";
  } else if (totalPercent6 > 120) {
    color6 = "bg-red-700";
  } else if (totalPercent6 > 110) {
    color6 = "bg-red-600";
  } else if (totalPercent6 > 100) {
    color6 = "bg-red-700";
  } else if (totalPercent6 > 90) {
    color6 = "bg-orange-600";
  } else if (totalPercent6 > 80) {
    color6 = "bg-orange-500";
  } else if (totalPercent6 > 70) {
    color6 = "bg-yellow-500";
  } else if (totalPercent6 > 60) {
    color6 = "bg-green-500";
  } else if (totalPercent5 > 50) {
    color6 = "bg-green-500";
  } else if (totalPercent6 > 40) {
    color6 = "bg-green-500";
  } else if (totalPercent6 > 30) {
    color6 = "bg-green-500";
  } else if (totalPercent6 > 20) {
    color6 = "bg-green-500";
  } else if (totalPercent6 > 10) {
    color6 = "bg-green-500";
  }
  if (totalPercent7 > 140) {
    color7 = "bg-red-900";
  } else if (totalPercent7 > 130) {
    color7 = "bg-red-800";
  } else if (totalPercent7 > 120) {
    color7 = "bg-red-700";
  } else if (totalPercent7 > 110) {
    color7 = "bg-red-600";
  } else if (totalPercent7 > 100) {
    color7 = "bg-red-700";
  } else if (totalPercent7 > 90) {
    color7 = "bg-orange-600";
  } else if (totalPercent7 > 80) {
    color7 = "bg-orange-500";
  } else if (totalPercent7 > 70) {
    color7 = "bg-yellow-500";
  } else if (totalPercent7 > 60) {
    color7 = "bg-green-500";
  } else if (totalPercent7 > 50) {
    color7 = "bg-green-500";
  } else if (totalPercent7 > 40) {
    color7 = "bg-green-500";
  } else if (totalPercent7 > 30) {
    color7 = "bg-green-500";
  } else if (totalPercent7 > 20) {
    color7 = "bg-green-500";
  } else if (totalPercent7 > 10) {
    color7 = "bg-green-500";
  }
  if (totalPercent8 > 140) {
    color8 = "bg-red-900";
  } else if (totalPercent8 > 130) {
    color8 = "bg-red-800";
  } else if (totalPercent8 > 120) {
    color8 = "bg-red-700";
  } else if (totalPercent8 > 110) {
    color8 = "bg-red-600";
  } else if (totalPercent8 > 100) {
    color8 = "bg-red-700";
  } else if (totalPercent8 > 90) {
    color8 = "bg-orange-600";
  } else if (totalPercent8 > 80) {
    color8 = "bg-orange-500";
  } else if (totalPercent8 > 70) {
    color8 = "bg-yellow-500";
  } else if (totalPercent8 > 60) {
    color8 = "bg-green-500";
  } else if (totalPercent8 > 50) {
    color8 = "bg-green-500";
  } else if (totalPercent8 > 40) {
    color8 = "bg-green-500";
  } else if (totalPercent8 > 30) {
    color8 = "bg-green-500";
  } else if (totalPercent8 > 20) {
    color8 = "bg-green-500";
  } else if (totalPercent8 > 10) {
    color8 = "bg-green-500";
  }

  if (totalPercent9 > 140) {
    color9 = "bg-red-900";
  } else if (totalPercent9 > 130) {
    color9 = "bg-red-800";
  } else if (totalPercent9 > 120) {
    color9 = "bg-red-700";
  } else if (totalPercent9 > 110) {
    color9 = "bg-red-600";
  } else if (totalPercent9 > 100) {
    color9 = "bg-red-700";
  } else if (totalPercent9 > 90) {
    color9 = "bg-orange-600";
  } else if (totalPercent9 > 80) {
    color9 = "bg-orange-500";
  } else if (totalPercent9 > 70) {
    color9 = "bg-yellow-500";
  } else if (totalPercent9 > 60) {
    color9 = "bg-green-500";
  } else if (totalPercent9 > 50) {
    color9 = "bg-green-500";
  } else if (totalPercent9 > 40) {
    color9 = "bg-green-500";
  } else if (totalPercent9 > 30) {
    color9 = "bg-green-500";
  } else if (totalPercent9 > 20) {
    color9 = "bg-green-500";
  } else if (totalPercent9 > 10) {
    color9 = "bg-green-500";
  }

  if (totalPercent10 > 140) {
    color10 = "bg-red-900";
  } else if (totalPercent10 > 130) {
    color10 = "bg-red-800";
  } else if (totalPercent10 > 120) {
    color10 = "bg-red-700";
  } else if (totalPercent10 > 110) {
    color10 = "bg-red-600";
  } else if (totalPercent10 > 100) {
    color10 = "bg-red-700";
  } else if (totalPercent10 > 90) {
    color10 = "bg-orange-600";
  } else if (totalPercent10 > 80) {
    color10 = "bg-orange-500";
  } else if (totalPercent10 > 70) {
    color10 = "bg-yellow-500";
  } else if (totalPercent10 > 60) {
    color10 = "bg-green-500";
  } else if (totalPercent10 > 50) {
    color10 = "bg-green-500";
  } else if (totalPercent10 > 40) {
    color10 = "bg-green-500";
  } else if (totalPercent10 > 30) {
    color10 = "bg-green-500";
  } else if (totalPercent10 > 20) {
    color10 = "bg-green-500";
  } else if (totalPercent10 > 10) {
    color10 = "bg-green-500";
  }
  if (totalPercent11 > 140) {
    color11 = "bg-red-900";
  } else if (totalPercent11 > 130) {
    color11 = "bg-red-800";
  } else if (totalPercent11 > 120) {
    color11 = "bg-red-700";
  } else if (totalPercent11 > 110) {
    color11 = "bg-red-600";
  } else if (totalPercent11 > 100) {
    color11 = "bg-red-700";
  } else if (totalPercent11 > 90) {
    color10 = "bg-orange-600";
  } else if (totalPercent11 > 80) {
    color10 = "bg-orange-500";
  } else if (totalPercent11 > 70) {
    color11 = "bg-yellow-500";
  } else if (totalPercent11 > 60) {
    color11 = "bg-green-500";
  } else if (totalPercent11 > 50) {
    color11 = "bg-green-500";
  } else if (totalPercent11 > 40) {
    color11 = "bg-green-500";
  } else if (totalPercent11 > 30) {
    color11 = "bg-green-500";
  } else if (totalPercent11 > 20) {
    color11 = "bg-green-500";
  } else if (totalPercent11 > 10) {
    color11 = "bg-green-500";
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
    {
      id: "5",
      name: "Blanc 4",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "6",
      name: "Blanc 5",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "7",
      name: "Blanc 6",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "8",
      name: "Blanc 7",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "9",
      name: "Blanc 8",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "10",
      name: "Blanc 9",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "11",
      name: "Blanc 10",
      weight: "0",
      color: "bg-blue-500",
    },
    {
      id: "12",
      name: "Blanc 11",
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
      {
        id: "5",
        name: "Blanc 4",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "6",
        name: "Blanc 5",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "7",
        name: "Blanc 6",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "8",
        name: "Blanc 7",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "9",
        name: "Blanc 8",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "10",
        name: "Blanc 9",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "11",
        name: "Blanc 10",
        weight: "0",
        color: "bg-blue-500",
      },
      {
        id: "12",
        name: "Blanc 11",
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
        <div className="h-[400px] overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mt-10 gap-4">
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[1].name,
              "/add/one/content",
              totalPercent,
              color,
              total
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Cartons"
                  : null) || "[]"
              ),
              dumpsters[2].name,
              "/add/two/content",
              totalPercent2,
              color2,
              total2
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "DEE"
                  : null) || "[]"
              ),
              dumpsters[3].name,
              "/add/three/content",
              totalPercent3,
              color3,
              total3
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[4].name,
              "/add/fourth/content",
              totalPercent4,
              color4,
              total4
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[5].name,
              "/add/five/content",
              totalPercent5,
              color5,
              total5
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[6].name,
              "/add/six/content",
              totalPercent6,
              color6,
              total6
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[7].name,
              "/add/seven/content",
              totalPercent7,
              color7,
              total7
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[8].name,
              "/add/eight/content",
              totalPercent8,
              color8,
              total8
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[9].name,
              "/add/nine/content",
              totalPercent9,
              color9,
              total9
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[10].name,
              "/add/teen/content",
              totalPercent10,
              color10,
              total10
            )}
            {dumpster(
              data,
              JSON.parse(
                (typeof window !== "undefined"
                  ? localStorage.getItem("users") || "Papier"
                  : null) || "[]"
              ),
              dumpsters[11].name,
              "/add/eleven/content",
              totalPercent11,
              color11,
              total11
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
