import { FormEvent, useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { configuration } from "../../utils/configuration";
import { useRouter } from "next/router";
const Index = () => {
  const fire = new Firebase();
  const [data, setData] = useState([{}] as any);
  const [data2, setData2] = useState([{}] as any);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    fire
      .collection("test")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id ? doc.id : "no one exist? :/",
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
          id: doc.id ? doc.id : "no one exist? :/",
          value: doc.data().value,
          ...doc.data(),
        }));
        setData2(data2);
      });
    setShow(true);
  }, []);
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
      {error && <Toaster />}
      <div
        aria-hidden="true"
        className={`${
          show ? "absolute justify-center items-center flex h-screen" : "hidden"
        } overflow-y-auto overflow-x-hidden right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0`}
      >
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-slate-900 rounded-lg slide-in-top">
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
                  className="bg-gray-800 text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bg-slate-100 w-full h-full">
        <div className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-slate-900 slide-in-left">
          <div className="flex flex-col px-8 py-8">
            <div className="flex justify-center items-center ">
              <div className="">
                <h1 className="text-white text-xl font-bold text-center uppercase">
                  Administration
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center p-10">
              <div className="grid grid-cols-1">
                <div className="space-y-1">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <button className="hover:scale-105 hover:transform transition bg-slate-800 hover:ring-2 hover:ring-black/10 rounded-xl w-52 py-2">
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
                      className="hover:scale-105 hover:transform transition bg-rose-800 hover:ring-2 hover:ring-white/10 rounded-xl w-52 py-2"
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
          <div className="px-10 space-x-2 space-y-2 overflow-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 h-[450px]">
            {data.map((item) => (
              <div className="bg-slate-600 rounded-xl px-4 py-4 slide-in-elliptic-top-fwd">
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
            {data2.map((item) => (
              <div className="bg-slate-600 rounded-xl px-4 py-4 slide-in-elliptic-top-fwd">
                <p className="text-white">
                  <div className="space-x-1">
                    <div className="inline-flex">
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
