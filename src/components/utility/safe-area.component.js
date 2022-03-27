import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1px;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};
`;
