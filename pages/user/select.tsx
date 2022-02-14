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
          link: doc.data().link,
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
            className="text-black dark:text-white w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M32 192h112C152.8 192 160 199.2 160 208C160 216.8 152.8 224 144 224H32v64h112C152.8 288 160 295.2 160 304C160 312.8 152.8 320 144 320H32v64h112C152.8 384 160 391.2 160 400C160 408.8 152.8 416 144 416H32v32c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V128H32V192zM360 0H24C10.75 0 0 10.75 0 24v48C0 85.25 10.75 96 24 96h336C373.3 96 384 85.25 384 72v-48C384 10.75 373.3 0 360 0z"
            />
          </svg>
        </>
      );
    }
    if (item.name === "Papier") {
      return (
        <svg
          className="text-black dark:text-white w-10 h-10"
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
          className="text-black dark:text-white w-10 h-10"
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
    if (item.name === "Bois") {
      return (
        <svg
          className="text-black dark:text-white w-10 h-10"
          viewBox="0 0 64 64"
        >
          <path
            fill="currentColor"
            d="M59.2,30.9h-1.1c1-1.6,1.6-3.9,1.6-6.6c0-5-2.1-8.8-4.8-8.8H10.7c-2.8,0-4.8,3.8-4.8,8.8c0,2.7,0.6,5,1.6,6.6H4.8    c-2.8,0-4.8,3.8-4.8,8.8s2.1,8.8,4.8,8.8H16h43.1c2.8,0,4.8-3.8,4.8-8.8S61.9,30.9,59.2,30.9z M54.8,17.7c1.1,0,2.6,2.6,2.6,6.6    c0,4-1.5,6.6-2.6,6.6H16h-2.1c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.4    c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.4    c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0.1-0.2,0.1-0.4c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0-0.2,0-0.4c0-0.2,0-0.4,0.1-0.6c0-0.1,0-0.2,0-0.3    c0-0.3,0-0.6,0-1c0-0.3,0-0.6,0-1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.1,0-0.2,0-0.4c0-0.2,0-0.3-0.1-0.5    c0-0.1,0-0.2-0.1-0.4c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.4    c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.4c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3    c0-0.1-0.1-0.1-0.1-0.2H54.8z M18.6,39.7c0,4-1.6,6.6-2.6,6.6s-2.6-2.6-2.6-6.6c0-4,1.5-6.6,2.6-6.6h0    C17.1,33.1,18.6,35.7,18.6,39.7z M8,24.3c0-4,1.6-6.6,2.6-6.6s2.6,2.6,2.6,6.6c0,4-1.5,6.6-2.6,6.6h0C9.6,30.9,8,28.3,8,24.3z     M2.2,39.7c0-4,1.6-6.6,2.6-6.6s2.6,2.6,2.6,6.6s-1.6,6.6-2.6,6.6S2.2,43.8,2.2,39.7z M8.2,46.2c0.1-0.1,0.1-0.2,0.2-0.3    c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.4c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.4    c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.4c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0.1-0.2,0.1-0.4c0-0.2,0.1-0.3,0.1-0.5    c0-0.1,0-0.2,0-0.4c0-0.2,0-0.4,0.1-0.6c0-0.1,0-0.2,0-0.3c0-0.3,0-0.6,0-1s0-0.6,0-1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6    c0-0.1,0-0.2,0-0.4c0-0.2,0-0.3-0.1-0.5c0-0.1,0-0.2-0.1-0.4c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4    C9,35.2,9,35.1,8.9,35c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.4c0-0.1-0.1-0.2-0.2-0.3    c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.2h2.6c0,0,0,0,0,0h2.1c-1,1.6-1.6,3.9-1.6,6.6c0,2.7,0.6,5,1.6,6.6H8.1    C8.1,46.3,8.2,46.2,8.2,46.2z M59.2,46.3H19.3c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.3    c0.1-0.1,0.1-0.2,0.2-0.4c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.5    c0-0.1,0.1-0.2,0.1-0.3c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0-0.2,0.1-0.4c0-0.2,0.1-0.4,0.1-0.5c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0.1-0.6    c0-0.1,0-0.2,0-0.3c0-0.3,0-0.6,0-1s0-0.6,0-1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5    c0-0.1,0-0.2-0.1-0.4c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.3c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.3    c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.3-0.2-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.3    c0,0-0.1-0.1-0.1-0.1h35.5c0,0,0,0,0,0h4.3c1.1,0,2.6,2.6,2.6,6.6S60.2,46.3,59.2,46.3z"
          />
          <path
            fill="currentColor"
            d="M18.3,21.7h6.3l3.6,1.2c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.3,0,0.5-0.1l2.4-1.1H37c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1    h-5.8c-0.2,0-0.3,0-0.5,0.1l-2.2,1.1l-3.3-1.1c-0.1,0-0.2-0.1-0.3-0.1h-6.5c-0.6,0-1.1,0.5-1.1,1.1S17.7,21.7,18.3,21.7z"
          />
          <path
            fill="currentColor"
            d="M43,21.7h8.7c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H43c-0.6,0-1.1,0.5-1.1,1.1S42.4,21.7,43,21.7z"
          />
          <path
            fill="currentColor"
            d="M18.3,28.6H32c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H18.3c-0.6,0-1.1,0.5-1.1,1.1S17.7,28.6,18.3,28.6z"
          />
          <path
            fill="currentColor"
            d="M35.9,27.4c0,0.6,0.5,1.1,1.1,1.1h3.6c0.1,0,0.2,0,0.3,0l4.7-1.4l2.1,1.3c0.2,0.1,0.4,0.2,0.6,0.2h4.8    c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-4.5l-2.3-1.4c-0.3-0.2-0.6-0.2-0.9-0.1l-5,1.5H37C36.4,26.3,35.9,26.8,35.9,27.4z"
          />
          <path
            fill="currentColor"
            d="M23.8,37.4h6.3l3.6,1.2c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.3,0,0.5-0.1l2.4-1.1h5.5c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1    h-5.8c-0.2,0-0.3,0-0.5,0.1l-2.2,1.1l-3.3-1.1c-0.1,0-0.2-0.1-0.3-0.1h-6.5c-0.6,0-1.1,0.5-1.1,1.1S23.2,37.4,23.8,37.4z"
          />
          <path
            fill="currentColor"
            d="M48.5,37.4h8.7c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-8.7c-0.6,0-1.1,0.5-1.1,1.1S47.9,37.4,48.5,37.4z"
          />
          <path
            fill="currentColor"
            d="M37.4,42.1H23.8c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h13.7c0.6,0,1.1-0.5,1.1-1.1S38,42.1,37.4,42.1z"
          />
          <path
            fill="currentColor"
            d="M58.5,42.1H54l-2.3-1.4c-0.3-0.2-0.6-0.2-0.9-0.1l-5,1.5h-3.4c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1H46    c0.1,0,0.2,0,0.3,0l4.7-1.4l2.1,1.3c0.2,0.1,0.4,0.2,0.6,0.2h4.8c0.6,0,1.1-0.5,1.1-1.1S59.2,42.1,58.5,42.1z"
          />
        </svg>
      );
    }
    if (item.name === "Capsules") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="text-black dark:text-white w-10 h-10"
        >
          <path
            fill="currentColor"
            d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"
          />
        </svg>
      );
    }
    if (item.name === "DIB") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="text-black dark:text-white w-10 h-10"
        >
          <path
            fill="currentColor"
            d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
          />
        </svg>
      );
    }
    if (item.name === "DEE") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="text-black dark:text-white w-10 h-10"
        >
          <path
            fill="currentColor"
            d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z"
          />
        </svg>
      );
    }
    if (item.name === "Lampes") {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
          className="text-black dark:text-white w-10 h-10"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              fill="currentColor"
              d="M5910 12704 c-19 -2 -84 -9 -145 -15 -470 -46 -936 -180 -1370 -394
-1047 -518 -1768 -1450 -1945 -2512 -69 -416 -51 -889 51 -1298 79 -320 181
-558 427 -993 524 -928 867 -1663 1104 -2362 164 -484 248 -875 268 -1245 9
-175 45 -506 61 -570 35 -135 148 -294 248 -348 106 -58 61 -57 1591 -57 1508
0 1480 -1 1581 50 106 54 183 148 238 290 26 67 35 114 55 297 13 120 27 277
30 348 31 634 313 1511 820 2550 176 361 390 760 568 1059 87 147 160 285 218
416 329 740 377 1566 133 2315 -290 893 -961 1640 -1867 2076 -409 197 -822
316 -1291 375 -122 15 -684 28 -775 18z"
            />
            <path
              fill="currentColor"
              d="M4732 2715 c-98 -27 -171 -81 -219 -162 -35 -60 -42 -159 -18 -234
31 -93 143 -185 250 -205 l38 -7 -56 -17 c-157 -49 -247 -158 -247 -300 0 -80
25 -138 83 -199 44 -45 145 -101 185 -101 12 0 22 -4 22 -10 0 -5 -10 -10 -22
-10 -13 0 -50 -13 -83 -29 -165 -79 -230 -248 -155 -399 36 -71 82 -115 160
-151 l55 -26 1480 0 1480 0 47 22 c64 30 134 97 166 158 35 68 37 168 4 240
-41 89 -171 185 -252 185 -11 0 -20 5 -20 10 0 6 9 10 20 10 81 0 211 96 252
185 33 72 31 172 -4 240 -46 88 -128 151 -236 180 -26 7 -37 14 -25 14 49 2
135 44 187 92 72 66 99 124 100 214 1 123 -65 218 -192 278 l-67 32 -1440 2
c-1221 2 -1448 0 -1493 -12z"
            />
            <path
              fill="currentColor"
              d="M5110 734 c0 -16 79 -101 148 -160 185 -158 400 -263 642 -316 148
-32 390 -36 548 -9 295 50 544 175 753 378 54 53 99 100 99 105 0 4 -493 8
-1095 8 -602 0 -1095 -3 -1095 -6z"
            />
          </g>
        </svg>
      );
    }

    if (item.name === "Glacines") {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
          className="text-black dark:text-white w-10 h-10"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              fill="currentColor"
              d="M6495 12789 c-698 -5 -1353 -12 -1455 -15 l-185 -6 83 -28 c554 -188
1020 -620 1429 -1325 139 -240 1175 -2154 1169 -2163 -2 -4 -183 -123 -400
-263 l-396 -254 288 -6 c158 -4 739 -9 1292 -13 553 -3 1079 -9 1170 -12 l165
-6 665 1098 c366 604 716 1181 778 1283 61 101 111 185 110 186 -2 2 -208
-104 -458 -235 -250 -131 -456 -238 -456 -237 -4 5 -576 1058 -640 1179 -89
168 -143 244 -253 360 -204 215 -466 366 -771 444 -85 22 -450 24 -2135 13z"
            />
            <path
              fill="currentColor"
              d="M4285 12663 c-205 -26 -428 -132 -592 -280 -51 -46 -1509 -2291
-1496 -2303 4 -5 624 -373 1377 -820 802 -474 1373 -807 1378 -802 5 5 337
544 739 1198 l729 1188 -75 143 c-544 1039 -1302 1693 -1947 1682 -46 -1 -96
-4 -113 -6z"
            />
            <path
              fill="currentColor"
              d="M10163 7806 c-1009 -615 -1362 -835 -1359 -847 2 -9 223 -423 491
-920 269 -497 566 -1048 661 -1224 l173 -320 248 -3 c1037 -12 1911 314 2251
838 121 188 182 421 169 650 -13 216 26 128 -647 1453 -337 664 -616 1207
-619 1206 -3 -1 -619 -375 -1368 -833z"
            />
            <path
              fill="currentColor"
              d="M1740 8598 c-575 -4 -1183 -11 -1353 -16 l-307 -7 420 -328 c231
-181 420 -333 420 -338 0 -6 -191 -376 -425 -823 -233 -447 -435 -846 -449
-887 -77 -231 -53 -479 69 -724 77 -153 170 -279 310 -421 353 -357 697 -501
1345 -564 137 -13 584 -27 725 -22 l100 4 564 923 563 923 77 -41 c42 -23 231
-125 421 -228 190 -103 346 -186 348 -184 2 2 -246 466 -552 1032 -305 565
-637 1181 -738 1368 l-184 340 -154 1 c-85 0 -625 -3 -1200 -8z"
            />
            <path
              fill="currentColor"
              d="M7447 3933 l-718 -1295 238 -436 c132 -241 455 -832 718 -1314 l480
-877 6 72 c4 39 12 250 18 467 6 217 14 420 17 450 l5 55 767 0 c697 0 775 2
855 18 197 40 405 127 582 244 134 89 320 276 391 393 29 47 424 783 879 1635
455 853 837 1566 848 1585 19 32 16 31 -39 -20 -338 -310 -723 -496 -1214
-585 -330 -60 -279 -59 -1726 -62 l-1330 -4 -23 438 c-13 241 -26 459 -30 485
l-6 47 -718 -1296z"
            />
            <path
              fill="currentColor"
              d="M210 4987 c0 -3 101 -192 224 -419 123 -227 504 -930 846 -1563 342
-632 654 -1208 693 -1280 60 -109 85 -144 156 -216 207 -207 498 -342 891
-414 257 -46 292 -48 1548 -52 l1192 -4 0 1609 0 1609 -622 7 c-343 3 -1071 9
-1618 12 -1938 11 -1846 10 -1970 28 -507 75 -931 278 -1254 602 -47 48 -86
84 -86 81z"
            />
          </g>
        </svg>
      );
    }

    if (item.name === "Métaux") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="text-black dark:text-white w-10 h-10"
        >
          <path
            fill="currentColor"
            d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77l-73.76 122.1c42 6.5 79.88 25.62 109.5 53.38l111.3-158.9C516.5 14.58 508.9 0 495.1 0z"
          />
        </svg>
      );
    }
    if (item.name === "Canettes") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="text-black dark:text-white w-10 h-10"
        >
          <path
            fill="currentColor"
            d="M507.3 72.57l-67.88-67.88c-6.252-6.25-16.38-6.25-22.63 0l-22.63 22.62c-6.25 6.254-6.251 16.38-.0006 22.63l-76.63 76.63c-46.63-19.75-102.4-10.75-140.4 27.25l-158.4 158.4c-25 25-25 65.51 0 90.51l90.51 90.52c25 25 65.51 25 90.51 0l158.4-158.4c38-38 47-93.76 27.25-140.4l76.63-76.63c6.25 6.25 16.5 6.25 22.75 0l22.63-22.63C513.5 88.95 513.5 78.82 507.3 72.57zM179.3 423.2l-90.51-90.51l122-122l90.51 90.52L179.3 423.2z"
          />
        </svg>
      );
    }
    if (item.name === "PEHD") {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black dark:text-white w-10 h-10"
          viewBox="0 0 1039.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              fill="currentColor"
              d="M4850 12784 c-153 -17 -250 -46 -406 -122 -314 -156 -474 -312 -756
-742 -315 -479 -1113 -1872 -1407 -2456 -86 -172 -101 -208 -101 -249 0 -63
33 -120 102 -172 82 -64 293 -189 372 -222 150 -62 280 -62 351 1 55 48 263
386 748 1218 466 801 692 1176 818 1361 78 114 173 191 334 272 243 122 413
123 650 5 175 -87 264 -172 387 -370 179 -288 594 -1013 719 -1258 60 -117 61
-120 45 -145 -20 -30 -113 -100 -292 -217 -190 -126 -237 -186 -215 -281 12
-48 34 -73 79 -88 75 -25 940 4 1239 41 89 11 119 22 141 49 141 178 534 796
633 995 34 70 40 90 40 149 1 82 -15 112 -70 127 -82 22 -189 -17 -406 -145
-168 -99 -225 -123 -259 -107 -24 11 -91 121 -296 487 -329 588 -481 842 -623
1043 -168 237 -340 417 -518 545 -109 78 -351 205 -459 240 -160 54 -556 73
-850 41z"
            />
            <path
              fill="currentColor"
              d="M8104 9102 c-28 -10 -110 -50 -183 -90 -319 -176 -410 -260 -411
-383 0 -60 9 -85 94 -264 84 -175 186 -361 411 -750 913 -1578 1051 -1860
1032 -2104 -15 -189 -100 -368 -233 -491 -100 -94 -237 -169 -353 -196 -133
-31 -438 -44 -1161 -51 -597 -5 -707 -4 -716 8 -8 9 -14 101 -17 269 -5 259
-14 327 -50 397 -25 48 -63 73 -111 73 -76 0 -130 -53 -236 -231 -67 -112
-510 -993 -510 -1013 0 -9 77 -164 171 -344 386 -737 442 -825 536 -851 74
-21 150 -4 172 38 19 35 30 204 31 446 0 166 3 234 12 243 9 9 182 12 717 12
1060 0 1338 19 1621 111 101 33 282 113 365 162 335 197 643 576 739 910 54
189 70 322 70 577 0 202 -3 249 -21 332 -48 220 -186 484 -961 1833 -586 1021
-682 1179 -787 1293 -76 83 -124 97 -221 64z"
            />
            <path
              fill="currentColor"
              d="M4900 8603 c-174 -18 -501 -90 -595 -132 l-45 -20 0 -275 0 -276 24
0 c13 0 59 21 101 47 96 57 227 115 343 150 76 23 106 26 232 27 117 1 156 -3
200 -18 169 -57 252 -173 252 -349 -1 -97 -16 -157 -62 -252 -56 -115 -124
-200 -294 -370 -193 -193 -438 -399 -749 -630 l-107 -79 0 -208 0 -208 995 0
995 0 0 235 0 235 -557 0 c-332 0 -564 4 -573 10 -18 11 -23 6 110 105 283
211 539 450 672 625 85 113 173 280 204 390 15 52 19 99 19 240 0 166 -2 179
-28 255 -47 134 -118 234 -221 312 -127 96 -305 160 -509 182 -89 10 -326 13
-407 4z"
            />
            <path
              fill="currentColor"
              d="M947 8566 c-74 -28 -117 -86 -117 -158 0 -38 5 -47 58 -98 32 -31
112 -88 182 -130 158 -93 259 -161 288 -193 l23 -25 -49 -93 c-27 -52 -126
-224 -219 -384 -93 -159 -224 -382 -290 -495 -326 -558 -437 -811 -498 -1136
-151 -802 200 -1493 952 -1877 165 -84 265 -116 402 -127 267 -22 1534 -33
2371 -21 448 6 871 16 939 21 208 16 204 8 209 419 4 347 1 372 -59 425 -96
87 -244 101 -1214 116 -379 5 -881 15 -1115 20 -979 24 -1133 60 -1321 303
-127 164 -172 292 -173 487 -1 195 36 313 174 565 245 445 732 1269 761 1288
10 6 76 -23 224 -102 308 -162 381 -185 453 -141 97 60 74 179 -89 452 -56 94
-468 716 -540 815 -13 19 -33 24 -160 37 -210 23 -450 35 -824 41 -274 5 -336
3 -368 -9z"
            />
            <path
              fill="currentColor"
              d="M0 1280 l0 -1280 325 0 325 0 0 414 c0 319 3 416 13 424 7 6 136 12
332 15 305 4 325 6 419 31 119 31 203 69 311 141 193 129 304 289 362 523 27
106 24 344 -5 445 -38 134 -84 212 -181 308 -74 73 -103 94 -192 138 -118 59
-245 94 -397 110 -63 7 -334 11 -707 11 l-605 0 0 -1280z m1159 797 c125 -37
202 -94 253 -189 20 -38 23 -57 23 -168 0 -109 -3 -131 -23 -174 -51 -111
-127 -173 -257 -206 -102 -27 -464 -41 -490 -20 -13 11 -15 62 -15 384 0 284
3 375 13 385 18 19 421 9 496 -12z"
            />
            <path
              fill="currentColor"
              d="M2600 1280 l0 -1280 920 0 920 0 -2 243 -3 242 -595 5 -595 5 0 320
0 320 553 3 552 2 0 240 0 240 -552 2 -553 3 0 225 0 225 595 5 595 5 0 235 0
235 -917 3 -918 2 0 -1280z"
            />
            <path
              fill="currentColor"
              d="M5010 1280 l0 -1280 325 0 325 0 2 568 3 567 490 0 490 0 3 -567 2
-568 325 0 325 0 -2 1277 -3 1278 -322 3 -323 2 -2 -467 -3 -468 -490 0 -490
0 -5 465 -5 465 -322 3 -323 2 0 -1280z"
            />
            <path
              fill="currentColor"
              d="M7970 1280 l0 -1281 543 4 c529 4 636 9 827 42 284 48 506 161 687
348 281 291 405 694 340 1105 -34 216 -86 353 -193 514 -185 279 -453 445
-824 512 -163 29 -319 36 -847 36 l-533 0 0 -1280z m1170 795 c276 -61 469
-244 542 -513 32 -117 37 -374 10 -502 -25 -121 -52 -192 -103 -271 -98 -151
-262 -258 -455 -295 -48 -9 -155 -15 -292 -16 l-217 -3 -3 800 c-1 440 0 806
3 814 8 20 410 9 515 -14z"
            />
          </g>
        </svg>
      );
    }
    if (item.name === "Cartouches") {
      return (
        <img
          src="/static/images/cartouches.svg"
          className="w-14 h-10"
          alt="cartouches"
        />
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
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-4">
            {data.map((item: Matter) => (
              <>
                <div>
                  <button
                    onClick={() => {
                      router.push(`/add/${item.link}/dumpster`);
                      localStorage.setItem(
                        `matters`,
                        JSON.stringify(item.name)
                      );
                    }}
                    className=""
                  >
                    <div className="rounded-full w-20 h-20 border border-black dark:border-white bg-white dark:bg-black">
                      <div className="flex justify-center items-center my-5">
                        {items(item)}
                      </div>
                    </div>
                    <div className="flex justify-center items-center p-0.5">
                      <span className="text-xl font-bold text-center">
                        {item.name}
                      </span>
                    </div>
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
