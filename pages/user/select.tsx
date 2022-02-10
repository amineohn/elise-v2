import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
import { Matter } from "../../libs/types";

const Home: NextPage = () => {
  const router = useRouter();

  const [data, setData] = useState([{}] as any);
  const [user, setUser] = useState("");
  useEffect(() => {
    const fire = new Firebase();
    fire
      .collection("matters")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          firstname: doc.data().firstname,
          lastname: doc.data().lastname,
          ...doc.data(),
        }));
        setData(data);
      });
    setUser(
      JSON.parse(
        (typeof window !== "undefined"
          ? localStorage.getItem("users")
          : null) || "[]"
      )
    );
  }, []);

  return (
    <>
      <div className="flex flex-col py-5 px-1 h-screen items-center justify-center scale">
        <h1 className="text-center font-bold text-3xl uppercase pb-2">
          Bonjour {user}
        </h1>
        <div>
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir une matière
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 space-y-5">
            <div className="space-x-4 space-y-5">
              {data.map((item: Matter) => (
                <>
                  <button
                    onClick={() => {
                      router.push("/add/dumpster");
                      localStorage.setItem(
                        "matters",
                        JSON.stringify(item.name)
                      );
                    }}
                    className="hover:scale-105 hover:transform transition"
                  >
                    <div className="rounded-full py-5 px-5 border border-slate-900 dark:border-white bg-white dark:bg-slate-900">
                      <svg
                        className="text-slate-900 dark:text-white w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">{item.name}</span>
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
