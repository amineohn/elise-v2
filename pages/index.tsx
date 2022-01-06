import type { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";
import FadeIn from "react-fade-in";
import { Example } from "../libs/types";

const Home: NextPage = () => {
  const [user, setUser] = useState<Example>();
  const [error, setError] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser(e.target.value as any);

    fetch(`http://localhost:3000/api/cache`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data: Example) => {
        console.log(data);
        setError(data.success ? "yes boii" : data.error);
        setUser(e.target.value as any);
      });
  };
  return (
    <>
      <FadeIn>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="rounded-lg px-8 pt-6 pb-8 mb-4 space-y-2">
            <div>
              {error && (
                <div className="text-red-500 text-sm font-bold">{error}</div>
              )}
              {user && (
                <div className="text-green-500 text-sm font-bold">{user}</div>
              )}
            </div>
            <form onSubmit={handleChange as any} method="POST">
              <div className="items-center justify-center space-x-2">
                <input
                  type="text"
                  className="bg-lime-100 px-5 py-5 rounded-lg text-black placeholder:text-black shadow shadow-lime-300 focus:outline-none focus:shadow-lime-500"
                  placeholder="Enter your name"
                  onChange={(e) => setUser(e.target.value as any)}
                />
                <button
                  type="submit"
                  className="bg-lime-400 hover:bg-lime-500 transition-colors py-5 px-5 rounded-lg shadow-lg shadow-lime-300"
                >
                  <span className="text-white">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
export default Home;
