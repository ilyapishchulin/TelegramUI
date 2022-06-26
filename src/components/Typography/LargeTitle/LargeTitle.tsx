import { FC } from 'react';
import { TLargeTitle } from './TLargeTitle';
import './LargeTitle.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const LargeTitle: FC<TLargeTitle> = ({
  children,
  weight = ETypographyWeights.REGULAR,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  return (
    <h1
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('LargeTitle'),
          `LargeTitle--w-${weight}`,
        ),
        restProps.className,
      )}
    >
      {children}
    </h1>
  );
}
