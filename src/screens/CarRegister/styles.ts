import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
  isActive: boolean;
  onPress: () => void;
}

export const Container = styled.View`
  flex: 1;
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
  padding: ${RFValue(20)}px 0;
`;

export const DoubleInputContainer = styled.View`
  flex-direction: row;
`;

export const TransmissionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const TransmissionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(20)}px;
`;

export const TransmissionButton = styled(TouchableOpacity) <ButtonProps>`
  padding: 10px;
  color: ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray
  };
  border: solid 2px ${({ isActive, theme }) =>
    isActive === true ? theme.colors.secondary : theme.colors.gray
  };
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)} px;
`;

export const ButtonContainer = styled.View``;
