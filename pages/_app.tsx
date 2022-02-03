import "../styles/globals.css";
import React, { useEffect } from "react";
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

const statusBar = Capacitor.isPluginAvailable("StatusBar");
const splashScreen = Capacitor.isPluginAvailable("SplashScreen");

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
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
      case "/add/dumpster":
        return router.push("/user/select");
      case "/user/select":
        return router.push("/");
      case "/add/one/content":
        return router.push("/add/dumpster");
      case "/add/two/content":
        return router.push("/add/dumpster");
      case "/add/three/content":
        return router.push("/add/dumpster");
      case "/add/fourth/content":
        return router.push("/add/dumpster");
      case "/security/code":
        return router.push("/admin");
    }
  };

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
            <div className="flex justify-between py-3 px-3">
              {router.pathname !== "/" && (
                <div className="flex justify-center">
                  <div className="border border-slate-900 dark:border-white w-10 h-10 rounded-full px-2.5 py-2">
                    <svg
                      className="fill-current text-slate-900 dark:text-white w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      onClick={() => routes()}
                    >
                      <path
                        fill="currentColor"
                        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                      />
                    </svg>
                  </div>
                </div>
              )}

              <div className="flex justify-center items-center space-x-2">
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
