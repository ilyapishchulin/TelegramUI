import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TBody extends HTMLAttributes<HTMLSpanElement> {
  weight?: ETypographyWeights;
}
