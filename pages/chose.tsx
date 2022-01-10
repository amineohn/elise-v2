import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="border border-black w-10 h-10 ml-6 mt-5 rounded-full px-2.5 py-2">
        <svg
          className="fill-current text-black w-5 h-5"
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
            <div>
              <div
                className="w-72 max-w-xl h-56 border border-black"
                onClick={() => router.push("/send")}
              >
                <div className="flex justify-end items-end">
                  <div className="bg-black w-[286px] h-5 bottom-0" />
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-center font-bold">Benne 1</span>
              </div>
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
              <div className="flex justify-center">
                <span className="text-center font-bold">Benne 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
