import { FC } from 'react';
import { TFootnote } from './TFootnote';
import './Footnote.css';

import { ETypographyWeights } from 'enums/ETypographyWeights';
import { useClassNames } from 'hooks/useClassNames';

export const Footnote: FC<TFootnote> = ({
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
          getClassNamesWithPlatform('Footnote'),
          `Footnote--w-${weight}`,
        ),
        restProps.className,
      )}
    >
      {children}
    </span>
  );
}
