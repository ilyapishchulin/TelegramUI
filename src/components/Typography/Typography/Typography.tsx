import { FC } from 'react';
import { TTypography } from './TTypography';
import './Typography.css';

import { useClassNames } from 'hooks/useClassNames';

export const Typography: FC<TTypography> = ({
  Component = 'span',
  weight = 'regular',
  children,
  ...restProps
}) => {
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  return (
    <Component
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Typography'),
          `Typography--${weight}`,
        ),
        restProps.className,
      )}
    >
      {children}
    </Component>
  );
}
