import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting Screen</Text>
      <Button
        title="Cadastros"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'RegisterScreen',
          })
        }
      />
    </Screen>
  );
}
