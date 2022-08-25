import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  onActivated: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  background-color: transparent;

  border-radius: 6px;
  border: solid 2px ${({ theme, type }) =>
    type === 'up' ? theme.colors.gray_medium : theme.colors.secondary
  };
`;

export const Button = styled(RectButton) <ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;


  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)} px;
`;

