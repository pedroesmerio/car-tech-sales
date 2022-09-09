import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Container = styled.View`
  width: ${RFValue(134)}px;
  height: ${RFValue(130)}px;
  align-items: center;
  padding: 12px 12px;
  margin-right: ${RFValue(17)}px;
  margin-top: ${RFValue(17)}px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const IconContainer = styled.View`
  width: 100%;
`;

export const FeatherIcon = styled(Icon)`
  font-weight: medium;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const OptionContainer = styled.View`
  justify-content: center;
  align-content: center;
`;

export const Title = styled.Text`
  font-weight: medium;
  text-align: center;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const TitleValue = styled.Text`
  font-weight: medium;
  font-size: ${RFValue(10)}px;
  margin-top: ${RFValue(8)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
`;
