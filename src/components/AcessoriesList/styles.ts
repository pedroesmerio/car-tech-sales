import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacityProps } from "react-native";

type TitleProps = {
  align: "left" | "right";
  color: "offWhite" | "gray_medium";
};

export const ItemContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 24px;
  padding-top: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const NameView = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(24)}px;
`;

export const PriceView = styled.View`
  align-items: baseline;
  height: ${RFValue(24)}px;
`;

export const Title = styled.Text<TitleProps>`
  text-align: ${({ align }) => (align === "left" ? align : "right")};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.offWhite};
`;

export const FeatherIcon = styled(Icon)<TouchableOpacityProps>`
  margin-right: 10px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.red};
`;
