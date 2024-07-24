import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RegisterScreen(props: AppTabScreenProps<'RegisterScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Register Screen</Text>
    </Screen>
  );
}
