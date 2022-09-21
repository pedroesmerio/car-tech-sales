import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_medium
})) <TextInputProps>`
  width: 100%;
  height: 45px;
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray_medium};
  color: ${({ theme }) => theme.colors.gray};
`;
