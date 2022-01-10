import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col py-5 px-1 my-48 scale">
        <div>
          <h1 className="text-center font-bold text-2xl">
            Choisir une matière
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 space-y-5">
            <div className="space-x-4 space-y-5">
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-5 px-5 border border-black bg-white">
                  <svg
                    className="text-black w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-5 px-5 border border-black bg-white">
                  <svg
                    className="text-black w-10 h-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">Cartons</span>
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
            <div className="space-x-4 ">
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-5 px-5 border border-black bg-white">
                  <svg
                    className="text-black w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">Papier</span>
              </button>
              <button onClick={() => router.push("/chose")}>
                <div className="rounded-full py-5 px-5 border border-black bg-white">
                  <svg
                    className="text-black w-10 h-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">Cartons</span>
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
