import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { SplashScreen } from "@capacitor/splash-screen";
import { NextSeo } from "next-seo";
import { configuration } from "../utils/configuration";
import { Switch } from "../components/switch";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Transition } from "@headlessui/react";

const statusBar = Capacitor.isPluginAvailable("StatusBar");
const splashScreen = Capacitor.isPluginAvailable("SplashScreen");

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  const [show, setShow] = useState(true);
  /* const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  if (minute > 20 && hours === 15 && seconds === 0) {
    console.log("coucou");
  }*/

  useEffect(() => {
    if (Capacitor.isPluginAvailable("StatusBar")) {
      if (!statusBar) {
        StatusBar.setOverlaysWebView({ overlay: true });
        StatusBar.setStyle({ style: Style.Dark });
        StatusBar.setBackgroundColor({ color: "#ffffff" });
      }
    }
    if (Capacitor.isPluginAvailable("SplashScreen")) {
      if (!splashScreen) {
        SplashScreen.hide();
      }
    }
  }, []);

  /*useEffect(() => {
    // get code from local storage
    const code = localStorage.getItem("code") as any;
    // if code is not null
    if (code) {
      // if code is not equal to the code in the configuration file
      if (code !== configuration.code) {
        // redirect to the home page
        router.push("/");
      }
    }
  }, []);*/
  const router = useRouter();
  const routes = () => {
    switch (router.pathname) {
      case "/add/one/dumpster":
        return router.push("/user/select");
      case "/add/two/dumpster":
        return router.push("/user/select");
      case "/add/three/dumpster":
        return router.push("/user/select");
      case "/add/fourth/dumpster":
        return router.push("/user/select");
      case "/add/five/dumpster":
        return router.push("/user/select");
      case "/add/six/dumpster":
        return router.push("/user/select");
      case "/add/seven/dumpster":
        return router.push("/user/select");
      case "/add/eight/dumpster":
        return router.push("/user/select");
      case "/add/nine/dumpster":
        return router.push("/user/select");
      case "/add/teen/dumpster":
        return router.push("/user/select");
      case "/add/eleven/dumpster":
        return router.push("/user/select");
      case "/add/twelve/dumpster":
        return router.push("/user/select");
      case "/add/thirteen/dumpster":
        return router.push("/user/select");
      case "/user/select":
        return router.push("/");
      case "/add/one/content":
        return router.push("/add/one/dumpster");
      case "/add/two/content":
        return router.push("/add/two/dumpster");
      case "/add/three/content":
        return router.push("/add/three/dumpster");
      case "/add/fourth/content":
        return router.push("/add/fourth/dumpster");
      case "/add/five/content":
        return router.push("/add/five/dumpster");
      case "/add/six/content":
        return router.push("/add/six/dumpster");
      case "/add/seven/content":
        return router.push("/add/seven/dumpster");
      case "/add/eight/content":
        return router.push("/add/eight/dumpster");
      case "/add/nine/content":
        return router.push("/add/nine/dumpster");
      case "/add/teen/content":
        return router.push("/add/teen/dumpster");
      case "/add/eleven/content":
        return router.push("/add/eleven/dumpster");
      case "/add/twelve/content":
        return router.push("/add/twelve/dumpster");
      case "/add/thirteen/content":
        return router.push("/add/thirteen/dumpster");

      case "/security/code":
        return router.push("/admin");
    }
  };
  const [advice, setAdvice] = useState(true);
  return (
    <>
      {router.pathname === "/admin" && (
        <>
          <title>{configuration.app.seo.title}</title>
          <NextNProgress
            color="#000"
            startPosition={0.3}
            stopDelayMs={200}
            height={2.5}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </>
      )}
      {router.pathname !== "/admin" && (
        <>
          <title>{configuration.app.seo.admin.title}</title>

          <NextNProgress
            color="#000"
            startPosition={0.3}
            stopDelayMs={200}
            height={2.5}
            showOnShallow={true}
          />
          <NextSeo
            title={configuration.app.seo.title}
            description={configuration.app.seo.description}
            openGraph={{
              url: configuration.app.seo.graph.url,
              title: configuration.app.seo.graph.title,
              description: configuration.app.seo.graph.description,
              images: [
                {
                  url: configuration.app.seo.graph.image,
                  width: configuration.app.seo.graph.width,
                  height: configuration.app.seo.graph.height,
                  alt: configuration.app.seo.graph.alt,
                },
              ],
            }}
          />
          <ThemeProvider defaultTheme="light" attribute="class">
            <Transition
              show={show}
              enter="transition ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-500 slide-out-top"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 duration-500 slide-out-top"
              className="z-50 absolute w-full"
            >
              <div className="bg-rose-600">
                <div className="max-w-7xl mx-auto py-5 px-3 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="flex p-2 rounded-lg bg-rose-800">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          />
                        </svg>
                      </span>
                      <p className="ml-3 font-medium text-white truncate">
                        <span className="md:hidden">
                          Cette application est en test. Merci de prévenir Amine
                          en cas de bug.
                        </span>
                        <span className="hidden md:inline">
                          Cette application est en cours de test. Si vous
                          rencontrez un problème, n'hésitez pas à contacter
                          Amine.
                        </span>
                      </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto hidden">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-rose-600 transition bg-white hover:bg-indigo-50"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                      <button
                        type="button"
                        onClick={() => setShow(false)}
                        className="-mr-1 flex p-2 rounded-md hover:bg-rose-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                      >
                        <span className="sr-only">Dismiss</span>

                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <div className="flex justify-between py-5 px-5">
              {router.pathname !== "/" && (
                <div className="flex justify-center items-center">
                  <div
                    className="border border-black dark:border-white w-14 h-14 rounded-full px-2.5 py-2 cursor-pointer"
                    onClick={() => routes()}
                  >
                    <div className="flex justify-center items-center my-1">
                      <svg
                        className="fill-current text-black dark:text-white w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center items-center space-x-2">
                <Transition
                  show={advice}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="hidden"
                >
                  <div className="w-96 px-6 py-6 hidden lg:flex animate-pulse z-50 rounded-lg bg-rose-500">
                    <span className="text-white font-normal">
                      Attention, l'application est en cours de développement,
                      merci de reporter tout problème à Jerôme.
                    </span>
                    <button
                      onClick={() => setAdvice(false)}
                      className="text-white bg-green-700 border-b-4 border-green-800 px-2 rounded-lg"
                    >
                      Fermer
                    </button>
                  </div>
                </Transition>
                <Switch />
              </div>
            </div>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  );
}
