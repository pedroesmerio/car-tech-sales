import styled from 'styled-components/native';
import { TextInput } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: top;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  height: 56px;

  border-radius: 6px;

  justify-content: flex-end;
  align-items: flex-end;

  margin: 20px;
  padding: 0 20px;

  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.gray_medium};

  background-color: ${({ theme }) => theme.colors.background};

  font-size: 18px;

`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray_light};
`;
