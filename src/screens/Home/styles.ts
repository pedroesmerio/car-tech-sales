import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
  margin-bottom: ${RFValue(340)}px ;
  margin-top: ${RFValue(95)}px ;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.gray_medium};
`
