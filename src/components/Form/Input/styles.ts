import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  active: boolean;
}

export const Container = styled(TextInput) <Props>`
  flex: 1;
  width: 100%;
  padding: 16px 15px;
  font-weight: regular;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
  border: solid 1px ${({ theme }) => theme.colors.gray_medium};
  border-radius: 5px;
`;
