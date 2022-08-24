import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  isActive: 'auto' | 'manual';
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: transparent;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(20)}px;
`;

export const ButtonAuto = styled(RectButton) <ButtonProps>`
  color: ${({ isActive }) =>
    isActive === 'auto' ? theme.colors.secondary : theme.colors.gray
  };
  border: solid 2px ${({ isActive }) =>
    isActive === 'auto' ? theme.colors.secondary : theme.colors.gray
  };
`;

export const ButtonManual = styled(RectButton) <ButtonProps>`
  color: ${({ isActive }) =>
    isActive === 'manual' ? theme.colors.secondary : theme.colors.gray
  };
  border: solid 2px ${({ isActive }) =>
    isActive === 'manual' ? theme.colors.secondary : theme.colors.gray
  };
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)} px;
`;

