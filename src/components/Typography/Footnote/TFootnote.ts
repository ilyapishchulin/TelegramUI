import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TFootnote extends HTMLAttributes<HTMLSpanElement> {
  weight?: ETypographyWeights;
}
