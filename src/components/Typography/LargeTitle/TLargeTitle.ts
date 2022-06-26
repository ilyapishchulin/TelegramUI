import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TLargeTitle extends HTMLAttributes<HTMLHeadElement> {
  weight?: ETypographyWeights;
}
