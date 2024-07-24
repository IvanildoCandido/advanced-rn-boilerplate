import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  ExpiredScreen: {
    label: 'Vencidos',
    icon: {
      focused: 'expiredFill',
      unfocused: 'expired',
    },
  },
  RegisterScreen: {
    label: 'Cadastros',
    icon: {
      focused: 'registerFill',
      unfocused: 'register',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
