import { ElementType, HTMLAttributes } from 'react';

export interface TTypography extends HTMLAttributes<HTMLHeadingElement | HTMLSpanElement> {
  Component?: ElementType;
  weight?: 'regular' | 'medium' | 'semibold';
}
