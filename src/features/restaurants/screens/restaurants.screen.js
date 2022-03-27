import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component.js";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1px;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
