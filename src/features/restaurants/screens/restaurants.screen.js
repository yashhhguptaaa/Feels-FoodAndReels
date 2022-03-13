import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";

const SearchContainer = styled.View`
  padding: 16px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1px;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};
`;

const RestaurantListContainer = styled.View`
  flex: 1px;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
