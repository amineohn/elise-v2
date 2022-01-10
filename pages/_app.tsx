import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { SplashScreen } from "@capacitor/splash-screen";
import { NextSeo } from "next-seo";
import { configuration } from "../utils/configuration";
import { Switch } from "../components/switch";
const isAvailable = Capacitor.isPluginAvailable("StatusBar");
const isAvailable2 = Capacitor.isPluginAvailable("SplashScreen");

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
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
        <div className="ml-6 mt-3">
          <Switch />
        </div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
