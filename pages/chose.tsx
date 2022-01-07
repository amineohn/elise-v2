import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col py-5 px-1 space-y-2 my-48">
        <div>
          <h1 className="text-center font-bold text-2xl">Choisir une benne</h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 space-y-1">
            <div>
              <div
                className="w-72 max-w-xl h-56 border border-black"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end">
                  <div className="bg-black w-[286px] h-5 bottom-0" />
                </div>
              </div>
              <span className="text-center">Benne 1</span>
            </div>
            <div>
              <div
                className="w-72 max-w-xl h-56 border border-black"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end">
                  <div className="bg-black w-[286px] h-5 bottom-0" />
                </div>
              </div>
              <span className="text-center">Benne 1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
