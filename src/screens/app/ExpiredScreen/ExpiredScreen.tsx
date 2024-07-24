import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ExpiredScreen(props: AppTabScreenProps<'ExpiredScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Expired Screen</Text>
    </Screen>
  );
}
