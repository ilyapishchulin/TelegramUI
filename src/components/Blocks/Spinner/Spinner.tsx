import { FC } from 'react';
import { TSpinner } from './TSpinner';
import './Spinner.css';

import { Platform } from 'helpers/platform';

import { usePlatform } from 'hooks/usePlatform';
import { useClassNames } from 'hooks/useClassNames';

import { AndroidXSSpinner } from './icons/AndroidXSSpinner';
import { IOSXSSpinner } from './icons/IOSXSSpinner';
import { AndroidSSpinner } from './icons/AndroidSSpinner';
import { IOSSSpinner } from './icons/IOSSSpinner';
import { MSpinner } from './icons/MSpinner';
import { LSpinner } from './icons/LSpinner';

export const Spinner: FC<TSpinner> = ({
  size = 's',
  ...restProps
}) => {
  const platform = usePlatform();
  const { getClassName, getClassNamesWithPrefix } = useClassNames();

  let SpinnerIcon: FC;
  let pixelSize: number;

  switch (size) {
    case 'xs':
      SpinnerIcon = platform === Platform.IOS ? IOSXSSpinner : AndroidXSSpinner;
      pixelSize = platform === Platform.IOS ? 12 : 16;

      break;

    case 's':
      SpinnerIcon = platform === Platform.IOS ? IOSSSpinner : AndroidSSpinner;
      pixelSize = platform === Platform.IOS ? 24 : 30;

      break;

    case 'm':
      SpinnerIcon = MSpinner;
      pixelSize = 44;

      break;

    case 'l':
      SpinnerIcon = LSpinner;
      pixelSize = 68;

      break;
  }

  return (
    <span
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
      }}
      {...restProps}
      className={getClassName(getClassNamesWithPrefix('Spinner'), restProps.className)}
    >
      <SpinnerIcon />
    </span>
  );
}
