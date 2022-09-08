import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacityProps } from 'react-native';

interface TextProps extends TouchableOpacityProps {
  align: 'left' | 'center' | 'right';
  color: 'default' | 'blue' | 'dark';
  size: number;
  onPress: () => void;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const ImageContainer = styled.View`
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(7)}px;
`;

export const CarImage = styled.Image`
  height: ${RFValue(171)}px;
  width: ${RFValue(358)}px;
`;

export const BrandName = styled.Text`
  text-align: center; text-transform: uppercase;
  margin: ${RFValue(10)}px 0;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`
export const CarName = styled.Text<TextProps>`
  text-align: ${({ align }) =>
    align === 'left' ? align : 'center'
  };
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_light};
`

export const SpecificationContainer = styled.View`
  height: ${RFValue(180)}px;
  width: 100%;
`;

export const Cards = styled.ScrollView`
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text<TextProps>`
  text-align: ${({ align }) =>
    align === 'left' && 'left' ||
    align === 'center' && 'center' ||
    align === 'right' && 'right'
  };
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ size }) => size ? `${size}px` : `${RFValue(20)}px`};

  color: ${({ theme, color }) =>
    color === 'default' && theme.colors.offWhite ||
    color === 'blue' && theme.colors.primary ||
    color === 'dark' && theme.colors.dark
  };
`

export const AcessoriesContainer = styled.View`
  margin-top: ${RFValue(10)}px;
  height: ${RFValue(100)}px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AcessItems = styled.View`
  height: ${RFValue(100)}px;
  width: 100%;
`;

export const NoAcessoriesContainer = styled.View`
  height: ${RFValue(100)}px;
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
  text-align: ${({ align }) =>
    align === 'left' ? align : 'center'
  };
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
`;

export const ModalContainer = styled.View`
  padding: 0 ${RFValue(20)}px;
`;

export const ModalPriceContainer = styled.View`
  width: 100%;
`;
