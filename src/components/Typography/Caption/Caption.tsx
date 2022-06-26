import { FC } from 'react';
import { TCaption } from './TCaption';
import './Caption.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const Caption: FC<TCaption> = ({
  children,
  level = "1",
  weight = ETypographyWeights.REGULAR,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  return (
    <span
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Caption'),
          `Caption--l-${level}`,
          `Caption--w-${weight}`
        ),
        restProps.className,
      )}
    >
      {children}
    </span>
  );
}
