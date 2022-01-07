import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col py-5 px-1 my-48">
        <div>
          <h1 className="text-center font-bold text-2xl">
            Choisir une matière
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 space-y-1">
            <div className="space-x-1">
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
            </div>
            <div className="space-x-1">
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
            </div>
            <div className="space-x-1">
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-10 px-10 border border-black bg-white" />
                <span className="text-xl font-bold">Papier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
