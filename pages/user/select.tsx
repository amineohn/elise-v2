import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
import { Matter } from "../../libs/types";

const Home: NextPage = () => {
  const router = useRouter();

  const [data, setData] = useState([{}] as any);
  const [user, setUser] = useState("");
  const [mat, setMat] = useState("");
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

  const items = (item) => {
    if (item.name === "PET") {
      return (
        <>
          <svg
            className="text-slate-900 dark:text-white w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M32 192h112C152.8 192 160 199.2 160 208C160 216.8 152.8 224 144 224H32v64h112C152.8 288 160 295.2 160 304C160 312.8 152.8 320 144 320H32v64h112C152.8 384 160 391.2 160 400C160 408.8 152.8 416 144 416H32v32c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V128H32V192zM360 0H24C10.75 0 0 10.75 0 24v48C0 85.25 10.75 96 24 96h336C373.3 96 384 85.25 384 72v-48C384 10.75 373.3 0 360 0z" />
          </svg>
        </>
      );
    }
    if (item.name === "Papier") {
      return (
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
      );
    }
    if (item.name === "Cartons") {
      return (
        <svg
          className="text-slate-900 dark:text-white w-10 h-10"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 440 440"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M439.9,111.711c-0.374-2.142-1.786-3.958-3.77-4.85L274.576,34.147c-2.352-1.06-5.109-0.642-7.04,1.07L220,77.293
              l-47.536-42.076c-1.93-1.711-4.688-2.13-7.039-1.07L3.869,106.861c-1.982,0.892-3.395,2.708-3.77,4.85
              c-0.375,2.14,0.334,4.328,1.894,5.842l51.033,49.502l-28.774,50.806c-1.781,3.146-0.683,7.14,2.457,8.931l27.964,15.96v65.271
              c0,2.342,1.248,4.507,3.274,5.678l158.768,91.85c1.017,0.587,2.15,0.882,3.286,0.882c1.083,0,2.165-0.275,3.146-0.812
              c-0.002,0.004-0.008,0.01-0.009,0.014l158.915-91.933c2.026-1.171,3.274-3.336,3.274-5.678v-65.271l27.966-15.96
              c3.14-1.791,4.237-5.785,2.455-8.931l-28.772-50.806l51.031-49.502C439.567,116.039,440.277,113.851,439.9,111.711z
              M278.612,213.567l-52.052-30.151V96.697l138.129,69.444L278.612,213.567z M75.311,166.142l138.131-69.445v86.719l-52.054,30.151
              L75.311,166.142z M18.063,114.861l148.879-67.008l41.454,36.691L62.453,157.918L18.063,114.861z M38.892,218.639l24.854-43.887
              l146.41,80.665l-32.483,42.427L38.892,218.639z M213.44,388.497L67.793,304.239v-53.998l108.353,61.839
              c1.021,0.583,2.139,0.863,3.248,0.863c1.983,0,3.932-0.9,5.214-2.573l28.833-37.659L213.44,388.497L213.44,388.497z M220,245.861
              l-45.196-24.901L220,194.78l45.196,26.18L220,245.861z M372.206,304.239l-145.646,84.258V272.71l28.833,37.659
              c1.28,1.673,3.229,2.573,5.214,2.573c1.106,0,2.227-0.28,3.248-0.863l108.351-61.839V304.239z M401.109,218.639l-138.781,79.204
              l-32.484-42.427l146.411-80.665L401.109,218.639z M377.548,157.918L231.604,84.544l41.452-36.691l148.881,67.008L377.548,157.918z"
          />
        </svg>
      );
    }
  };

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
                      {items(item)}
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
