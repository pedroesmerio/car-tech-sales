import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  justify-content: center;
  align-items: stretch;
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: regular;
  color: ${({ theme }) => theme.colors.red};
  margin: 7px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;
