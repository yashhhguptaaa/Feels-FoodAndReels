import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { Search } from "../components/search.component.js";

import { SafeArea } from "../../../components/utility/safe-area.component.js";
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context.js";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
