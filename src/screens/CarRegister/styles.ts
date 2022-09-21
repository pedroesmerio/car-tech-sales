import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  isActive: boolean;
  onPress: () => void;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TransmissionContainer = styled.View`
  height: ${RFValue(35)}px;
  width: 100%;
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const TransmissionButton = styled(TouchableOpacity) <ButtonProps>`
  width: ${RFValue(124)}px;
  height: ${RFValue(36)}px;
  align-items: center;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  border-radius: 8px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  text-align: center;
  font-weight: regular;
  font-size: ${RFValue(15)}px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 20px;
`;

export const TypeContainer = styled.View`
  height: ${RFValue(55)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Types = styled.View`
  flex-direction: row;
`;

export const TypeButtom = styled(TouchableOpacity) <ButtonProps> `
  width: ${RFValue(124)}px;
  height: ${RFValue(36)}px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  border-radius: 8px;
`;

export const CombContainer = styled.View`
  height: ${RFValue(55)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Combs = styled.View`
  flex-direction: row;
`;

export const CombButtom = styled(TouchableOpacity) <ButtonProps>`
  width: ${RFValue(124)}px;
  height: ${RFValue(36)}px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  border-radius: 8px;
`;
