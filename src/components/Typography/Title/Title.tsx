import { ElementType, FC } from 'react';
import { TTitle } from './TTitle';
import './Title.css';

import { useClassNames } from 'hooks/useClassNames';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export const Title: FC<TTitle> = ({
  children,
  level = "1",
  weight = ETypographyWeights.REGULAR,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();
  const Component = `h${Number(level) + 1}` as ElementType;

  return (
    <Component
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Title'),
          `Title--l-${level}`,
          `Title--w-${weight}`,
        ),
        restProps.className,
      )}
    >
      {children}
    </Component>
  );
}
