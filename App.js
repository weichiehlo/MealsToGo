import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navitation } from "./src/infrastructure/navigation/index";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbdMDytnDinoLA3dvQeL-MD4EniZaYgg8",
  authDomain: "mealstogo-d1a74.firebaseapp.com",
  projectId: "mealstogo-d1a74",
  storageBucket: "mealstogo-d1a74.appspot.com",
  messagingSenderId: "104781256476",
  appId: "1:104781256476:web:2d26744d7d7a1611ea0cd9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navitation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
