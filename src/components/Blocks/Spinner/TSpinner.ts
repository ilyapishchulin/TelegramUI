import { HTMLAttributes } from 'react';

export interface TSpinner extends HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 's' | 'm' | 'l';
}
