import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  padding: 0 ${RFValue(20)}px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(340)}px ;
  margin-top: ${RFValue(95)}px ;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.gray_medium};
`
export const Form = styled.View`
  flex: 1;  
  justify-content: space-between;
  width: 100%;

  padding: 24px;
`;

export const DoubleInputContainer = styled.View`
  flex-direction: row;
`;

export const TransmissionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`;


export const ButtonContainer = styled.View``;
