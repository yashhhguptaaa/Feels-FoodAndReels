import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: 4px;
`;

const TopMedium = styled.View`
  margin-top: 8px;
`;

const TopLarge = styled.View`
  margin-top: 16px;
`;

const LeftSmall = styled.View`
  margin-left: 4px;
`;

const LeftMedium = styled.View`
  margin-left: 8px;
`;

const LeftLarge = styled.View`
  margin-left: 16px;
`;

const RightSmall = styled.View`
  margin-right: 4px;
`;

const RightMedium = styled.View`
  margin-right: 8px;
`;

const RightLarge = styled.View`
  margin-right: 16px;
`;

const BottomSmall = styled.View`
  margin-bottom: 4px;
`;

const BottomMedium = styled.View`
  margin-bottom: 8px;
`;

const BottomLarge = styled.View`
  margin-bottom: 16px;
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.small") {
    return <TopSmall />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  if (variant === "right.medium") {
    return <RightMedium />;
  }
  if (variant === "right.small") {
    return <RightSmall />;
  }
  if (variant === "right.large") {
    return <RightLarge />;
  }
  if (variant === "bottom.medium") {
    return <BottomMedium />;
  }
  if (variant === "bottom.small") {
    return <BottomSmall />;
  }
  if (variant === "bottom.large") {
    return <BottomLarge />;
  }
};
