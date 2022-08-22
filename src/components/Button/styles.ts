import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  type: 'add' | 'save'
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(57)}px;
  margin: ${RFValue(20)}px;

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
