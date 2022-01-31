import { Transition } from "@headlessui/react";
import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Firebase } from "../libs/firebase";
import { Data } from "../libs/types";
import { configuration } from "../utils/configuration";

const Code = ({ exit }) => {
  const [code, setCode] = useState("");
  const [data, setData] = useState([{}] as any);
  const [data2, setData2] = useState([{}] as any);
  const [modal, setModal] = useState(false);
  const [download, setDownload] = useState(false);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test2").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      setData2(data);
    });
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      setData(data);
    });

    // check if code is correct to local storage
    if (code === configuration.code.pass) {
      localStorage.setItem("code", code);
    }
  }, []);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (code) {
      case configuration.code.pass:
        try {
          const csvData = data.map((item: Data) => {
            return `${item.value}`;
          });
          const csvData2 = data2.map((item: Data) => {
            return `${item.value}`;
          });
          const csv = new Blob([csvData + csvData2], {
            type: "text/csv",
          });
          const url = URL.createObjectURL(csv);
          const a = document.createElement("a");
          a.href = url;
          a.download = "data.csv";
          a.click();
          URL.revokeObjectURL(url);
          toast.success("Fichier téléchargé");
        } catch (error) {
          toast.error("Erreur lors du téléchargement");
        }

        break;
    }
  };

  return (
    <>
      <Toaster />
      <div
        aria-hidden="true"
        className={`absolute flex h-screen z-50 overflow-y-auto overflow-x-hidden right-0 left-0 top-4 justify-center items-center h-modal md:h-full md:inset-0 mt-5`}
      >
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-neutral-900 rounded-lg">
            <div className="flex justify-end p-4"></div>
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={handleSubmit}
              method="POST"
            >
              <h3 className="text-xl font-medium text-white">
                Code d'accès Téléchargement
              </h3>
              <div>
                <label
                  htmlFor="Code"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Code
                </label>
                <input
                  id="code"
                  type="number"
                  name="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="••••••••"
                  className="bg-neutral-800 text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  autoComplete="off"
                />
              </div>

              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 space-y-2">
                  <div className="space-x-1">
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "1")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            1
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "2")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            2
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "3")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            3
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="space-x-1">
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "4")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            4
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "5")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            5
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "6")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            6
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="space-x-1">
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "7")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            7
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "8")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            8
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "9")}
                      >
                        <div className="my-5">
                          <span className="text-center text-3xl font-bold">
                            9
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="space-x-1">
                    {code.length > 0 ? (
                      <button className="mr-0.5" type="button">
                        <div
                          className="rounded-full w-20 h-20 bg-rose-500 transition-colors"
                          onClick={() => {
                            setModal(true);
                          }}
                        >
                          <div className="px-4 py-6">
                            <span className=" text-3xl font-bold text-white">
                              <div className="flex justify-center items-center">
                                <svg
                                  className="w-7 h-7 text-white"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 256 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                                  ></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <button className="mr-0.5" type="button" disabled>
                        <div
                          className="rounded-full w-20 h-20 bg-gray-100 dark:bg-gray-800 transition-colors"
                          onClick={() => setCode("")}
                        >
                          <div className="px-4 py-6">
                            <span className=" text-3xl font-bold text-black">
                              <div className="flex justify-center items-center">
                                <svg
                                  className="w-7 h-7 text-black"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 256 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                                  ></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    )}
                    <button type="button">
                      <div
                        className="rounded-full w-20 h-20 border border-transparent text-neutral-50 bg-neutral-800 hover:bg-neutral-800/50 transition ease-in-out duration-300"
                        onClick={() => setCode(code + "0")}
                      >
                        <div className="p-5">
                          <span className="text-center text-3xl font-bold">
                            0
                          </span>
                        </div>
                      </div>
                    </button>
                    {code.length > 0 ? (
                      <button type="submit">
                        <div className="rounded-full w-20 h-20 bg-green-500 transition-colors">
                          <div className="px-4 py-7">
                            <span className=" text-3xl font-bold text-white">
                              <div className="flex justify-center items-center">
                                <svg
                                  className="w-6 h-6 text-white"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <button type="submit" disabled>
                        <div className="rounded-full w-20 h-20 bg-gray-100 dark:bg-gray-800 transition-colors">
                          <div className="px-4 py-7">
                            <span className=" text-3xl font-bold text-black dark:text-white">
                              <div className="flex justify-center items-center">
                                <svg
                                  className="w-6 h-6 text-black"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                  ></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Transition
        show={modal}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="justify-center items-center flex z-50 mt-2">
          <div className="flex z-50 flex-col p-8 bg-rose-500 border-b-4 border-rose-600 shadow-md hover:shodow-lg rounded-2xl items-center justify-center">
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
                    Vous êtes sur le point de télécharger un fichier
                  </div>
                  <p className="text-sm text-rose-200 leading-none mt-1">
                    Attention, cette action est irréversible. Souhaitez-vous
                    sois Annulez ou Continuer ?
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  className="flex-no-shrink bg-rose-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-rose-800 text-white rounded-xl"
                  onClick={() => {
                    setDownload(true);
                    setModal(false);
                    setCode("");
                  }}
                >
                  Oui
                </button>
                <button
                  className="flex-no-shrink bg-green-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-b-2 border-green-800 text-white rounded-xl"
                  onClick={() => {
                    setModal(false);
                    setDownload(false);
                  }}
                >
                  Non
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
export default Code;
