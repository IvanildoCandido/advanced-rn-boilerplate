import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function ExpiredIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M0 20L10 0L20 20H0ZM3.13636 17.8947H16.8636L10 4.21053L3.13636 17.8947ZM10 16.8421C10.2576 16.8421 10.4736 16.7411 10.6482 16.5389C10.8227 16.3368 10.9097 16.087 10.9091 15.7895C10.9085 15.4919 10.8212 15.2421 10.6473 15.04C10.4733 14.8379 10.2576 14.7368 10 14.7368C9.74242 14.7368 9.52667 14.8379 9.35273 15.04C9.17879 15.2421 9.09152 15.4919 9.09091 15.7895C9.0903 16.087 9.17758 16.3372 9.35273 16.54C9.52788 16.7428 9.74364 16.8435 10 16.8421ZM9.09091 13.6842H10.9091V8.42105H9.09091V13.6842Z"
        fill={color}
      />
    </Svg>
  );
}
