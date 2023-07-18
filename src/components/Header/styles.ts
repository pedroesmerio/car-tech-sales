import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderHomeContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 114px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 36px;
  margin-left: 20px;
`;

export const TotalText = styled.Text`
  margin-right: 23px;
  font-size: 14px;
  font-weight: regular;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${RFValue(42)}px 0 ${RFValue(16)}px 0;
`;

export const ContainerBackIcon = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 16;
  bottom: 0;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  padding: 0 ${RFValue(16)}px;
`;
