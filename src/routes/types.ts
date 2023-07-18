import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CarRegisterProps = {
  IdMobile: string | undefined;
};

export type CarDetailProps = {
  IdMobile: string | undefined;
};

export type RootStackParamList = {
  Home: undefined;
  CarRegister: CarRegisterProps;
  CarDetail: CarDetailProps;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
