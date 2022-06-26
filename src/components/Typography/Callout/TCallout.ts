import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TCallout extends HTMLAttributes<HTMLSpanElement> {
  weight?: ETypographyWeights;
}
