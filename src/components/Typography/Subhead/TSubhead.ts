import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TSubhead extends HTMLAttributes<HTMLSpanElement> {
  weight?: ETypographyWeights;
}
