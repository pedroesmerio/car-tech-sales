import styled from 'styled-components/native';
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import { TouchableOpacityProps } from "react-native";

interface IconProps extends TouchableOpacityProps {
  name: string;
  color: 'red' | 'white';
}

export const FontistoIcon = styled(FontistoIcons) <IconProps>`
  font-weight: light;
  
  color: ${({ theme, color }) =>
    color === 'red' ? theme.colors.red : theme.colors.white
  };
`;
