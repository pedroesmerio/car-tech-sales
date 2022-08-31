import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

type TextProps = {
  align: 'left' | 'center';
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const ImageContainer = styled.View`
  margin-bottom: ${RFValue(7)}px;
`;

export const CarImage = styled.Image`
  height: ${RFValue(141)}px;
  width: ${RFValue(338)}px;
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
    align === 'left' ? align : 'center'
  };
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.offWhite};
`

export const AcessoriesContainer = styled.View`
  margin-top: ${RFValue(10)}px;
  height: ${RFValue(100)}px;
  width: 100%;
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
