import { FC } from 'react';
import { TBody } from './TBody';
import './Body.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const Body: FC<TBody> = ({
  children,
  weight = ETypographyWeights.REGULAR,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix } = useClassNames();

  return (
    <span
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix('Body'),
        `Body--w-${weight}`,
        restProps.className,
      )}
    >
      {children}
    </span>
  );
}
