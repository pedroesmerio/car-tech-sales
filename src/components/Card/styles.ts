import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(157)}px;
  padding: 12.5px 12px;
  margin-top: 20px;
  border: solid 1px ${({ theme }) => theme.colors.gray_light};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InfoCar = styled.View`
  width: ${RFValue(160)}px;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px 0;
  justify-content: space-around;
  align-content: stretch;
`;

export const PriceContainer = styled.View`
  padding: 0 4px;
  justify-content: flex-start;
  margin-top: ${RFValue(18)}px;
  height: ${RFValue(27)}px;
`;

export const Option = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const TitleValue = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Pricevalue = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InfoImg = styled.Image`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
