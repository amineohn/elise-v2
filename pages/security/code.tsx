import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Firebase } from "../../libs/firebase";
import { Data } from "../../libs/types";
import { configuration } from "../../utils/configuration";

const Code = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success] = useState("");
  const [data, setData] = useState([{}] as any);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id ? doc.id : "no one exist? :/",
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
      case "":
        setError("Veuillez entrer un code valide.");
        toast.error("Veuillez entrer un code valide.");
        break;
      case configuration.code.pass:
        try {
          const csvData = await data.map((item: Data) => {
            return `${item.value}`;
          });
          const csv = new Blob([csvData], {
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
      {success && <Toaster />}
      {error && <Toaster />}

      <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <form method="POST" onSubmit={handleSubmit} className="scale">
            <div className="flex justify-center items-center">
              <div className="flex flex-col space-y-2">
                <div>
                  <label className="block mb-1" htmlFor="code">
                    Code
                  </label>
                  <input
                    id="code"
                    type="text"
                    name="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="py-2 px-3 border border-gray-300 focus:border-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-black placeholder:to-black transition bg-white"
                  />
                </div>
                <br />
                <div>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 space-y-2">
                      <div className="space-x-1">
                        <button type="button">
                          <div
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 hover:bg-slate-70 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                              onClick={() => setCode("")}
                            >
                              <div className="p-5">
                                <span className="text-3xl font-bold text-white">
                                  A
                                </span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button className="mr-0.5" type="button" disabled>
                            <div
                              className="rounded-full w-20 h-20 bg-gray-800 transition-colors"
                              onClick={() => setCode("")}
                            >
                              <div className="p-5">
                                <span className="text-3xl font-bold text-white">
                                  A
                                </span>
                              </div>
                            </div>
                          </button>
                        )}
                        <button type="button">
                          <div
                            className="rounded-full w-20 h-20 border dark:text-white dark:bg-slate-800 bg-slate-100 hover:bg-slate-700 border-transparent dark:border-transparent"
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
                            <div className="rounded-full w-20 h-20 bg-lime-500 transition-colors">
                              <div className="p-5">
                                <span className=" text-3xl font-bold text-white">
                                  V
                                </span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button type="submit" disabled>
                            <div className="rounded-full w-20 h-20 bg-gray-800 transition-colors">
                              <div className="p-5">
                                <span className=" text-3xl font-bold text-white">
                                  V
                                </span>
                              </div>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Code;
