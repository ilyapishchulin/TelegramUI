import { FC } from 'react';
import { TCallout } from './TCallout';
import './Callout.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const Callout: FC<TCallout> = ({
  weight = ETypographyWeights.REGULAR,
  children,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  return (
    <span
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Callout'),
          `Callout--w-${weight}`
        ),
        restProps.className,
      )}
    >
      {children}
    </span>
  );
}
