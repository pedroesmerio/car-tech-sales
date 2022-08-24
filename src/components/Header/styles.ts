import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Feather'

export const HeaderHomeContainer = styled.View`
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

export const HeaderDetailContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(96)};
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  height: ${RFValue(24)};
  width: ${RFValue(24)};
`;

export const FeatherIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.offWhite};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.offWhite};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(20)};
`;

