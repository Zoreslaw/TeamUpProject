export default {
  expo: {
    name: "TeamUpProject",
    slug: "teamup-project",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "teamupproject",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: "com.umaps.teamup",
      // googleServicesFile: "./configs/google-services.json",
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
        ExpoLocalization_supportsRTL: true,
      },
    },
    android: {
      softwareKeyboardLayoutMode: "resize",
      adaptiveIcon: {
        // foregroundImage: "./assets/images/book_icon.png",
        backgroundColor: "#232323",
      },
      googleServicesFile: "./configs/google-services.json",
      package: "com.umaps.teamup",
      package_name: "com.umaps.teamup",
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-apple-authentication",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-google-signin/google-signin",
    ],
    extra: {
      eas: {
        projectId: "296827dd-411a-43bf-96f7-1558ed010464"
      }
    }
  }
}; 