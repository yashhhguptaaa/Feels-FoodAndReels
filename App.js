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
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyA_E-sJgJWj2W1mBcGZ4VTafei8wMyd1-0",
  authDomain: "feels-food-reels.firebaseapp.com",
  projectId: "feels-food-reels",
  storageBucket: "feels-food-reels.appspot.com",
  messagingSenderId: "923326547242",
  appId: "1:923326547242:web:161ea59f7bd9729b794a53",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("yash3144@gmail.com", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
