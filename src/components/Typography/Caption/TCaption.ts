import { HTMLAttributes } from 'react';
import { ETypographyWeights } from 'enums/ETypographyWeights';

export interface TCaption extends HTMLAttributes<HTMLSpanElement> {
  weight?: ETypographyWeights;
  level?: "1" | "2";
}
