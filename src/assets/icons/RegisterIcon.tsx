import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function RegisterIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M1.90118 17.7778C1.37412 17.7778 0.92549 17.603 0.555294 17.2533C0.185098 16.9037 0 16.4804 0 15.9833V1.79444C0 1.29815 0.185098 0.874815 0.555294 0.524445C0.92549 0.174815 1.37412 0 1.90118 0H14.7965L18.8235 3.80333V8.83667C18.6322 8.77444 18.4373 8.73815 18.2388 8.72778C18.0404 8.71741 17.8431 8.71852 17.6471 8.73111V4.27111L14.3012 1.11111H1.90118C1.68941 1.11111 1.51569 1.17519 1.38 1.30333C1.24431 1.43148 1.17647 1.59556 1.17647 1.79556V15.9833C1.17647 16.1826 1.24431 16.3463 1.38 16.4744C1.51569 16.6026 1.68941 16.6667 1.90118 16.6667H8.05412V17.7778H1.90118ZM10.8588 20V17.5444L17.1341 11.6478C17.2502 11.5381 17.3706 11.4641 17.4953 11.4256C17.6208 11.387 17.7463 11.3678 17.8718 11.3678C18.0012 11.3678 18.1322 11.3915 18.2647 11.4389C18.398 11.487 18.5149 11.5589 18.6153 11.6544L19.7035 12.7033C19.8 12.813 19.8733 12.927 19.9235 13.0456C19.9745 13.1633 20 13.2815 20 13.4C20 13.5185 19.9761 13.6378 19.9282 13.7578C19.8804 13.8778 19.8055 13.9926 19.7035 14.1022L13.4588 20H10.8588ZM11.9012 19.0178H13.0188L17.0976 15.1578L16.5447 14.63L16.0094 14.0878L11.9012 17.9622V19.0178ZM16.5447 14.63L16.0094 14.0878L17.0976 15.1578L16.5447 14.63ZM3.25765 6.41111H11.9906V3.07778H3.25882L3.25765 6.41111ZM9.41177 13.9333C9.55216 13.9333 9.6851 13.9189 9.81059 13.89C9.93529 13.8611 10.0604 13.8115 10.1859 13.7411L11.5612 12.4689C11.6365 12.3467 11.6894 12.2241 11.72 12.1011C11.7498 11.9774 11.7647 11.8474 11.7647 11.7111C11.7647 11.0985 11.5349 10.5748 11.0753 10.14C10.6157 9.70519 10.0612 9.48778 9.41177 9.48778C8.76235 9.48778 8.20824 9.70482 7.74941 10.1389C7.29059 10.573 7.06039 11.0963 7.05882 11.7089C7.05726 12.3215 7.28745 12.8452 7.74941 13.28C8.21137 13.7148 8.76549 13.9319 9.41177 13.9311"
        fill={color}
      />
    </Svg>
  );
}