import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";

const RestaurantStack = createStackNavigator();

// Any component which is inside Stack component, automatically gets prop.
const RestaurantDetail = () => (
  <SafeArea>
    <Text>Restaurant Details</Text>
  </SafeArea>
);

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerMode: "none",
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsHomeScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
