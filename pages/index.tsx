import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
import { User } from "../libs/types";

const Home: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState([{}] as any);
  useEffect(() => {
    const fire = new Firebase();
    fire
      .collection("user")
      .orderBy("firstname")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          firstname: doc.data().firstname,
          lastname: doc.data().lastname,
          ...doc.data(),
        }));
        setData(data);
        const users = data.map((user) => user.firstname + " " + user.lastname);
        localStorage.setItem("users", JSON.stringify(users));
      });
  }, []);

  return (
    <>
      <div className="flex flex-col py-5 px-1 h-screen justify-center items-center scale">
        <div>
          <h1 className="text-center font-bold text-3xl uppercase">
            Choisir un utilisateur
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1">
            <div className="space-y-1">
              {data.map((item: User) => (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <button
                      onClick={() => router.push("/user/select")}
                      className="hover:scale-105 hover:transform transition"
                    >
                      <div className="flex justify-center items-center my-5 rounded-full w-20 h-20 border border-slate-900 dark:border-white bg-white dark:bg-slate-900">
                        <svg
                          className="text-slate-900 dark:text-white w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    <span className="text-xl font-bold text-start">
                      {item.firstname} {item.lastname}
                    </span>
                  </div>
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
