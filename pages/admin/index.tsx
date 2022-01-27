import { useEffect, useState } from "react";
import { Firebase } from "../../libs/firebase";
const Index = () => {
  const fire = new Firebase();
  const [data, setData] = useState([{}] as any);
  const [data2, setData2] = useState([{}] as any);
  useEffect(() => {
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id ? doc.id : "no one exist? :/",
        value: doc.data().value,
        ...doc.data(),
      }));
      setData(data);
    });
    fire.collection("test2").onSnapshot((snapshot) => {
      const data2 = snapshot.docs.map((doc) => ({
        id: doc.id ? doc.id : "no one exist? :/",
        value: doc.data().value,
        ...doc.data(),
      }));
      setData2(data2);
    });
  }, []);
  return (
    <>
      <div className="absolute bg-slate-100 w-full h-full">
        <div className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-slate-900">
          <div className="flex flex-col px-8 py-8">
            <div className="flex justify-center items-center">
              <h1 className="text-white text-xl font-bold text-center uppercase">
                Administration
              </h1>
            </div>
            <div className="flex justify-center items-center p-10">
              <div className="grid grid-cols-1">
                <div className="space-y-1">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <button className="hover:scale-105 hover:transform transition bg-slate-800 rounded-xl w-52 py-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:ml-64">
          <div className="relative md:pt-32 pb-5 pt-5">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div className="flex flex-wrap space-x-0 space-y-2 md:space-y-0 sm:space-y-0 lg:space-y-0 lg:space-x-2">
                <div className="bg-slate-600 w-80 px-5 py-5 rounded-xl">
                  <p className="text-white font-bold">Gestion</p>
                  <table className="font-light text-white">
                    <tbody>
                      <tr>
                        <td>oui</td>
                        <td>Supprimer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-600 w-80 px-5 py-5 rounded-xl">
                  <p className="text-white font-bold">Gestion</p>
                  <table className="font-light text-white">
                    <tbody>
                      <tr>
                        <td>oui</td>
                        <td>Supprimer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-600 w-80 px-5 py-5 rounded-xl">
                  <p className="text-white font-bold">Gestion</p>
                  <table className="font-light text-white">
                    <tbody>
                      <tr>
                        <td>oui</td>
                        <td>Supprimer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-600 w-80 px-5 py-5 rounded-xl">
                  <p className="text-white font-bold">Gestion</p>
                  <table className="font-light text-white">
                    <tbody>
                      <tr>
                        <td>oui</td>
                        <td>Supprimer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex justify-center items-center">
            <div className="bg-slate-600 rounded-xl px-4 py-4">
              <p className="text-white">
                {data.map((item) => (
                  <div>
                    <div className="inline-flex space-x-2">
                      <p>
                        Poids: {item.value}
                        <span className="text-xs font-bold">kg</span>
                      </p>
                      <p>Date: {item.date}</p>
                    </div>
                  </div>
                ))}
                {data2.map((item) => (
                  <div>
                    <div className="inline-flex space-x-2">
                      <p>
                        Poids: {item.value}
                        <span className="text-xs font-bold">kg</span>
                      </p>
                      <p>Date: {item.date}</p>
                    </div>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
