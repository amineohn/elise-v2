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
const isAvailable = Capacitor.isPluginAvailable("StatusBar");
const isAvailable2 = Capacitor.isPluginAvailable("SplashScreen");

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  if (minute > 30 && hours === 15 && seconds === 0) {
    const mail = "mailto:?subject=Bonjour%20%C3%A0%20tous%20!";
    window.location.href = mail;
  }

  useEffect(() => {
    if (Capacitor.isPluginAvailable("StatusBar")) {
      if (!isAvailable) {
        StatusBar.setOverlaysWebView({ overlay: true });
        StatusBar.setStyle({ style: Style.Dark });
        StatusBar.setBackgroundColor({ color: "#ffffff" });
      }
    }
    if (Capacitor.isPluginAvailable("SplashScreen")) {
      if (!isAvailable2) {
        SplashScreen.hide();
      }
    }
  }, []);

  const router = useRouter();
  const routes = () => {
    switch (router.pathname) {
      case "/dumpster":
        return router.push("/user/select");
      case "/user/select":
        return router.push("/");
      case "/add/one/content":
        return router.push("/dumpster");
      case "/add/two/content":
        return router.push("/dumpster");
      case "/security/code":
        return router.push("/");
    }
  };

  return (
    <>
      <NextSeo
        title={configuration.title}
        description={configuration.description}
        openGraph={{
          url: configuration.openGraph.url,
          title: configuration.openGraph.title,
          description: configuration.openGraph.description,
          images: [
            {
              url: configuration.openGraph.image,
              width: configuration.openGraph.width,
              height: configuration.openGraph.height,
              alt: configuration.openGraph.alt,
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
  );
}
