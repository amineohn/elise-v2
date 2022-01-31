import { FormEvent, useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { configuration } from "../../utils/configuration";
import { useRouter } from "next/router";
import { Data } from "../../libs/types";
const Index = () => {
  const fire = new Firebase();
  const [data, setData] = useState([{}] as any);
  const [data2, setData2] = useState([{}] as any);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  useEffect(() => {
    fire
      .collection("test")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          value: doc.data().value,
          ...doc.data(),
        }));
        setData(data);
      });
    fire
      .collection("test2")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        const data2 = snapshot.docs.map((doc) => ({
          id: doc.id,
          value: doc.data().value,
          ...doc.data(),
        }));
        setData2(data2);
      });
    setShow(true);
  }, []);
  const handleDelete = () => {
    // delete all data in collection
    fire
      .collection("test")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
    fire
      .collection("test2")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (code) {
      case "":
        setError("Veuillez entrer le mot de passe.");
        toast.error("Veuillez entrer le mot de passe.");
        setShow(true);
        break;
      case configuration.code.admin:
        setShow(false);
        localStorage.setItem("code", code);
        toast.success("Mot de passe correct.");
        break;
    }
  };
  return (
    <>
      <title>Administration</title>
      {error && <Toaster />}
      {showModal && (
        <div className="justify-center items-center flex z-50 h-screen bg-neutral-900/50">
          <div className="flex flex-col p-8 bg-rose-500 shadow-md hover:shodow-lg rounded-2xl slide-in-top items-center justify-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 rounded-2xl p-3 border border-rose-700 text-rose-500 bg-rose-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="flex flex-col ml-3">
                  <div className="font-medium leading-none text-neutral-50">
                    Etes-vous sûr de vouloir supprimée les données ?
                  </div>
                  <p className="text-sm text-rose-200 leading-none mt-1">
                    Attention, cette action est irréversible.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  className="flex-no-shrink bg-rose-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-rose-800 text-white rounded-xl"
                  onClick={() => {
                    handleDelete();
                    setShowModal(false);
                  }}
                >
                  Oui
                </button>
                <button
                  className="flex-no-shrink bg-green-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-green-800 text-white rounded-xl"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Non
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div
          aria-hidden="true"
          className={`${
            show
              ? "absolute justify-center items-center flex h-screen"
              : "hidden"
          } overflow-y-auto overflow-x-hidden right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0`}
        >
          <div className="relative px-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-neutral-900 rounded-lg slide-in-top">
              <div className="flex justify-end p-4"></div>
              <form
                className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                onSubmit={handleSubmit}
                method="POST"
              >
                <h3 className="text-xl font-medium text-white">
                  Securité Administrateur
                </h3>
                <div>
                  <label
                    htmlFor="Code"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="••••••••"
                    className="bg-neutral-800 text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white border-b-4 border-neutral-800 bg-neutral-700 hover:bg-neutral-800 transition hover:border-b-4 hover:border-neutral-900/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Connexion
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="absolute w-full h-full">
        <div className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap items-center justify-center relative md:w-64 z-10 py-4 px-6 bg-neutral-900 slide-in-left">
          <div className="flex flex-col px-8 py-8">
            <div className="flex justify-center items-center ">
              <div className="">
                <h1 className="text-white text-xl font-bold text-center uppercase Madurai">
                  Administration
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center p-10">
              <div className="grid grid-cols-1 space-y-1">
                <div className="space-y-2">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <button
                      className="transition bg-neutral-800 hover:bg-neutral-800/60 hover:ring-2 hover:ring-black/10 rounded-xl w-52 py-2"
                      onClick={() => {
                        router.push("/admin");
                        setShowModal(false);
                      }}
                    >
                      <div className="inline-flex justify-center items-center space-x-2">
                        <svg
                          className="text-white w-5 h-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"
                          ></path>
                        </svg>
                        <span className="text-md font-normal text-start text-white">
                          Gestion des données
                        </span>
                      </div>
                    </button>
                    <button
                      className="transition bg-rose-900 hover:bg-rose-900/90 hover:ring-2 hover:ring-rose-900/20 rounded-xl w-52 py-2"
                      onClick={() => setShowModal(true)}
                    >
                      <div className="inline-flex justify-center items-center space-x-2">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="trash-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="text-white w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                          ></path>
                        </svg>
                        <span className="text-md font-normal text-start text-white">
                          Supprimer les données
                        </span>
                      </div>
                    </button>
                    <button
                      className="transition bg-rose-500 hover:bg-rose-500/90 hover:ring-2 hover:ring-rose-500/20 rounded-xl w-52 py-2"
                      onClick={() => router.push("/security/code")}
                    >
                      <div className="inline-flex justify-center items-center space-x-1">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="download"
                          className="text-white w-5 h-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                          ></path>
                        </svg>

                        <span className="text-md font-normal text-start text-white">
                          Télécharger les données
                        </span>
                      </div>
                    </button>
                    <button
                      className="transition bg-rose-800 hover:bg-rose-800/90 hover:ring-2 hover:ring-rose-900/40  rounded-xl w-52 py-2"
                      onClick={() => router.push("/")}
                    >
                      <div className="inline-flex justify-center items-center space-x-2">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="portal-exit"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="text-white w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M460,216H445.46875l-9.03125-27.125c-8.125-24.3125-24.1875-44-44.5-58.03125C411,117.90625,424,96.73438,424,72a72,72,0,0,0-144,0,71.00848,71.00848,0,0,0,4.1875,23.71875A112.98758,112.98758,0,0,0,199.4375,108.5L153.25,132.5625a51.63613,51.63613,0,0,0-15.418,14.24414C129.09766,71.17773,109.79688,0,72,0,15.15625,0,0,160.92188,0,256S15.15625,512,72,512c22.94727,0,38.99023-26.44922,50.082-64h56.82422A83.90044,83.90044,0,0,0,256.125,397.07812l19.3125-39.73437,43.6875,19.625L299.5,445.70312A52.05212,52.05212,0,0,0,335.1875,510,52.892,52.892,0,0,0,349.5,512a52.24717,52.24717,0,0,0,50-37.6875l24.375-85.40625a84.15978,84.15978,0,0,0-12-71.10937A85.07673,85.07673,0,0,0,431.09375,320H460a52,52,0,0,0,0-104ZM352,32a40,40,0,1,1-40,40A39.997,39.997,0,0,1,352,32ZM72.65625,480.09375C58.46875,474.60938,32,392.79688,32,256,32,121.32812,57.65625,39.95312,72,32.21875,86.34375,39.95312,112,121.32812,112,256c0,16.86133-.418,32.84961-1.14648,48h31.9082C143.582,287.01562,144,270.67969,144,256c0-13.10352-.32422-27.51758-.96875-42.5293a51.69161,51.69161,0,0,0,62.65625,8.91992l18.9375-9.84374L165.75,344H116a51.81787,51.81787,0,0,0-24.86914,97.377C84.47656,464.63086,77.57812,477.99805,72.65625,480.09375ZM226.6875,384.48438C219.25,401.875,197.875,416,178.9375,416H116a20,20,0,0,1,0-40h62.90625a11.9977,11.9977,0,0,0,11.03125-7.28125l26.71875-56.875A83.10126,83.10126,0,0,0,246.625,343.26562ZM460,288H431.03125c-20.6875,0-42.78125-15.92188-49.3125-35.54688L368.125,211.65625a43.28905,43.28905,0,0,0-15-20.67187l-41.46875,103.6875,52.78125,23.71874A52.3082,52.3082,0,0,1,393.125,380.125L368.71875,465.5A19.97861,19.97861,0,0,1,349.5,480a20.38928,20.38928,0,0,1-5.5-.76562A20.014,20.014,0,0,1,330.25,454.5l24.40625-85.375a12.07948,12.07948,0,0,0-6.625-14.25s-85.8125-39.04688-88.71875-41.17188a52.12113,52.12113,0,0,1-18.5-57.875l37.75-87.5625s-16.90625-3.78124-20.5-3.78124a43.34675,43.34675,0,0,0-22.5,6.3125l-45.25,23.51562a23.5854,23.5854,0,0,1-10.28125,2.84375,19.9989,19.9989,0,0,1-10.3125-37.14063l45.25-23.53124A83.78091,83.78091,0,0,1,258.09375,124.5a85.03559,85.03559,0,0,1,20.5,2.53125l68.1875,17.04687A83.59571,83.59571,0,0,1,406.09375,199l13.59375,40.79688A11.979,11.979,0,0,0,431.0625,248H460a20,20,0,0,1,0,40Z"
                          ></path>
                        </svg>
                        <span className="text-md font-normal text-start text-white">
                          Retour
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:ml-64 pt-20 items-center justify-center">
          <div className="px-10 overflow-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 h-[800px] lg:h-[600px]">
            {data.map((item: Data, index: any) => (
              <div
                key={index}
                className="bg-neutral-600 border-b-4 border-neutral-700 rounded-xl px-4 py-4 slide-in-elliptic-top-fwd h-[80px] md:h-[100px] lg:h-[60px]"
              >
                <p className="text-white">
                  <div className="space-x-1">
                    <div className="inline-flex space-x-2">
                      <p>
                        Poids: {item.value}
                        <span className="text-xs font-bold">kg</span>
                      </p>
                      <p> {item.dumpster}</p>
                      <p> Date: {item.date}</p>
                    </div>
                  </div>
                </p>
              </div>
            ))}
            {data2.map((item: Data, index: any) => (
              <div
                key={index}
                className="bg-neutral-600 border-b-4 border-neutral-700 rounded-xl px-4 py-4 slide-in-elliptic-top-fwd h-[80px] md:h-[100px] lg:h-[60px]"
              >
                <p className="text-white">
                  <div className="space-x-1">
                    <div className="inline-flex space-x-2">
                      <p>
                        Poids: {item.value}
                        <span className="text-xs font-bold">kg</span>
                      </p>
                      <p> {item.dumpster}</p>
                      <p> Date: {item.date}</p>
                    </div>
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
