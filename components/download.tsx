import React, { useEffect, useState } from "react";
import { Firebase } from "../libs/firebase";
import toast, { Toaster } from "react-hot-toast";
import { Data } from "../libs/types";
const Down = () => {
  const [downloaded, setDownload] = useState(false);
  const [data, setData] = useState([{}] as any);
  useEffect(() => {
    const fire = new Firebase();
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      setData(data);
    });
  }, []);
  const download = async () => {
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
      setDownload(true);
      toast.success("Fichier téléchargé");
    } catch (error) {
      setDownload(false);
      toast.error("Erreur lors du téléchargement");
      console.log(error);
    }
    setInterval(() => {
      setDownload(false);
    }, 5000);
  };

  return (
    <>
      {downloaded && <Toaster />}
      <div className="border border-black dark:border-white w-10 h-10 ml-6 mt-3 rounded-full px-2.5 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5 mr-1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={download}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </div>
    </>
  );
};
export default Down;
