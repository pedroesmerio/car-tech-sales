import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

export const InputContainer = styled.View`
  width: 100%;
  height: 85px;
  justify-content: center;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NoCarContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  margin: ${RFValue(20)}px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(340)}px;
  margin-top: ${RFValue(95)}px;
  font-weight: medium;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const AddCarButtom = styled(TouchableOpacity) <ButtonProps>`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
