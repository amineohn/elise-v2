import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Firebase } from "../libs/firebase";
import { Data } from "../libs/types";
import { configuration } from "../utils/configuration";

const Code = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
  }, []);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === "") {
      setError("Veuillez entrer un code valide.");
      toast.error("Veuillez entrer un code valide.");
    }
    if (code === configuration.code.pass) {
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
    }
  };

  return (
    <>
      {success && <Toaster />}
      {error && <Toaster />}

      <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <form method="POST" onSubmit={handleSubmit} className="scale">
            <div className="mb-4">
              <label className="block mb-1" htmlFor="code">
                Code
              </label>
              <input
                id="code"
                type="text"
                name="code"
                onChange={(e) => setCode(e.target.value)}
                className="py-2 px-3 border border-gray-300 focus:border-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full bg-white text-black placeholder:to-black transition"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-slate-700 active:bg-slate-700 focus:outline-none focus:border-slate-700 focus:ring focus:ring-slate-200 disabled:opacity-25 transition"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Code;
