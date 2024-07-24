import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Configurações"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Vencidos"
        mt="s14"
        onPress={() => navigation.navigate('ExpiredScreen')}
      />
    </Screen>
  );
}
