import { CapacitorConfig } from "@capacitor/cli";
import { configuration } from "./utils/configuration";

const config: CapacitorConfig = {
  appId: configuration.app.seo.appId,
  appName: configuration.app.seo.name,
  webDir: "out",
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    Keyboard: {
      resize: "body",
      style: "dark",
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
    },
  },
};

export default config;
