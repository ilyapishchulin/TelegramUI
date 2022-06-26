import { FC } from 'react';
import { TButton } from './TButton';
import 'components/Blocks/Button/Button.css';

import 'styles/palette.css';

import { useClassNames } from 'hooks/useClassNames';
import { Caption } from 'components/Typography/Caption/Caption';
import { Footnote } from 'components/Typography/Footnote/Footnote';
import { Callout } from 'components/Typography/Callout/Callout';
import { usePlatform } from 'hooks/usePlatform';
import { ETypographyWeights } from 'enums/ETypographyWeights';
import { Platform } from 'helpers/platform';
import { Body } from 'components/Typography/Body/Body';

export const Button: FC<TButton> = ({
  size = 's',
  stretched = false,
  loading = true,
  children,
  ...restProps
}) => {
  const platform = usePlatform();
  const { getClassName, getClassNamesWithPrefix, getClassNamesWithPlatform } = useClassNames();

  const TypographyByIOS = () => {
    switch (size) {
      case 's':
        return <Caption weight={ETypographyWeights.SEMIBOLD}>{children}</Caption>;

      case 'm':
        return <Footnote weight={ETypographyWeights.SEMIBOLD}>{children}</Footnote>;

      case 'l':
        return <Callout weight={ETypographyWeights.SEMIBOLD}>{children}</Callout>;
    }
  }

  const TypographyByAndroid = () => {
    switch (size) {
      case 's':
        return <Caption weight={ETypographyWeights.SEMIBOLD}>{children}</Caption>;

      case 'm':
        return <Caption weight={ETypographyWeights.SEMIBOLD}>{children}</Caption>;

      case 'l':
        return <Body weight={ETypographyWeights.MEDIUM}>{children}</Body>;
    }
  }

  const TypographyByPlatformAndSize = () => {
    if (platform === Platform.IOS) {
      return <TypographyByIOS />
    }

    return <TypographyByAndroid />;
  }

  return (
    <button
      {...restProps}
      className={getClassName(
        getClassNamesWithPrefix(
          getClassNamesWithPlatform('Button'),
          `Button--${size}`,
          stretched && 'Button--stretched',
        ),
        restProps.className,
      )}
    >
      <TypographyByPlatformAndSize />
    </button>
  )
}
