import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

type TextProps = {
  align: 'left' | 'center' | 'right';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background}
`;

export const Title = styled.Text<TextProps>`
  text-align: ${({ align }) =>
    align === 'left' && 'left' ||
    align === 'center' && 'center' ||
    align === 'right' && 'right'
  };
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
