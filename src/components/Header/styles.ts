import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 114px;

  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 36px;

  margin-left: 20px;
`;

export const TotalText = styled.Text`
  margin-right: 23px;
  font-size: 14px;
  font-family: regular;

  color: ${({ theme }) => theme.colors.white};
`;
