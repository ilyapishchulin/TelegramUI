import { FC } from 'react';
import { TSubhead } from './TSubhead';
import './Subhead.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const Subhead: FC<TSubhead> = ({
  children,
  weight = ETypographyWeights.REGULAR,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  return (
    <span
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Subhead'),
          `Subhead--w-${weight}`,
        ),
        restProps.className,
      )}
    >
      {children}
    </span>
  );
}
