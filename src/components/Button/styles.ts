import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ContainerProps extends TouchableOpacityProps {
  type: 'add' | 'save'
  onPress: () => void;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 100%;
  height: ${RFValue(57)}px;

  margin: ${RFValue(20)}px 0;

  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'add' ? theme.colors.green : theme.colors.primary
  }
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`

interface EditButtonContainerProps extends TouchableOpacity {
  type: 'add' | 'save'
  onPress: () => void;
}

export const EditButtonContainer = styled(TouchableOpacity) <EditButtonContainerProps>`
  flex: 1;
  flex-direction: row;

  height: ${RFValue(57)}px;

  margin-left: ${RFValue(10)}px;


  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'add' ? theme.colors.green : theme.colors.secondary
  }
`;
