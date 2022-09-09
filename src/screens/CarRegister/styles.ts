import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  isActive: boolean;
  onPress: () => void;
}

export const Container = styled.View`
  flex: 1;
  gap: 20px;
  width: 100%;
  padding: 10px ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TransmissionContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const TransmissionButton = styled(TouchableOpacity) <ButtonProps>`
  width: ${RFValue(124)}px;
  height: ${RFValue(43)}px;
  padding: 10px;
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
  font-size: ${RFValue(18)}px;
`;

export const ButtonContainer = styled.View`
`;

export const TypeContainer = styled.View`
  margin-top: ${RFValue(10)}px;
  height: ${RFValue(55)}px;
  width: 100%;
`;

export const Types = styled.ScrollView`
  flex-direction: row;
`;

export const TypeButtom = styled(TouchableOpacity) <ButtonProps> `
  width: ${RFValue(124)}px;
  height: ${RFValue(43)}px;
  padding: 10px;
  margin: 0 5px;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  border-radius: 8px;
`;

export const CombContainer = styled.View`
  margin-top: ${RFValue(10)}px;
  height: ${RFValue(55)}px;
  width: 100%;
`;

export const Combs = styled.ScrollView`
  flex-direction: row;
`;

export const CombButtom = styled(TouchableOpacity) <ButtonProps> `
  width: ${RFValue(124)}px;
  height: ${RFValue(43)}px;
  padding: 10px;
  margin: 0 5px;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray_medium};
  border-radius: 8px;
`;
