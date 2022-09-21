import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonProperties, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface TextProps extends TouchableOpacityProps {
  align: "left" | "center" | "right";
  color: "default" | "blue" | "dark";
  size: number;
  onPress?: () => void;
}

interface ButtonProps {
  isActive: boolean;
  onPress: () => void;
}

export const TrashIcon = styled.View<TouchableOpacityProps>`
  position: absolute;
  top: 0px;
  right: 20px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const ImageContainer = styled.View`
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(7)}px;
`;

export const CarImage = styled.Image`
  height: ${RFValue(141)}px;
  width: ${RFValue(348)}px;
`;

export const BrandName = styled.Text`
  text-align: center;
  text-transform: uppercase;
  margin: ${RFValue(10)}px 0;
  font-weight: medium;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;
export const CarName = styled.Text<TextProps>`
  text-align: ${({ align }) => (align === "left" ? align : "center")};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_light};
`;

export const SpecificationContainer = styled.View`
  height: ${RFValue(180)}px;
  width: 100%;
`;

export const Cards = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text<TextProps>`
  text-align: ${({ align }) =>
    (align === "left" && "left") ||
    (align === "center" && "center") ||
    (align === "right" && "right")};
  font-weight: bold;
  font-size: ${({ size }) => (size ? `${size}px` : `${RFValue(20)}px`)};

  color: ${({ theme, color }) =>
    (color === "default" && theme.colors.offWhite) ||
    (color === "blue" && theme.colors.primary) ||
    (color === "dark" && theme.colors.dark)};
`;

export const AcessoriesContainer = styled.View`
  height: ${RFValue(100)}px;
  width: 100%;
`;

export const AcessItems = styled.View`
  height: ${RFValue(40)}px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NoAcessoriesContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${RFValue(50)}px;
  width: 100%;
`;

export const FooterContainer = styled.View`
  margin-bottom: ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(55)}px;
  width: 100%;
`;

export const PriceContainer = styled.View`
  width: ${RFValue(168)}px;
`;

export const PriceTitle = styled.Text<TextProps>`
  text-align: ${({ align }) => (align === "left" ? align : "center")};
  font-weight: medium;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const ModalContainer = styled.View`
  padding: 0 ${RFValue(20)}px;
`;

export const ModalPriceContainer = styled.View`
  width: 100%;
`;

export const AcessorieTypeContainer = styled.View`
  margin-top: ${RFValue(5)}px;
  height: ${RFValue(55)}px;
  width: 100%;
`;

export const Acess = styled.View`
  flex-direction: row;
`;

export const AddAcessButtom = styled(TouchableOpacity) <ButtonProps> `
  width: ${RFValue(100)}px;
  height: ${RFValue(43)}px;
  padding: 10px;
  margin: 0 5px;
  justify-content: center;
  border: solid 2px
    ${({ isActive, theme }) =>
    isActive === true ? theme.colors.primary : theme.colors.gray_medium};
  border-radius: 8px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${({ isActive, theme }) =>
    isActive === true ? theme.colors.primary : theme.colors.gray_medium};
  text-align: center;
  font-weight: regular;
  font-size: ${RFValue(18)}px;
`;
