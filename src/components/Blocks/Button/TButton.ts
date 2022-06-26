import { HTMLAttributes } from 'react';

export interface TButton extends HTMLAttributes<HTMLButtonElement> {
  size: 's' | 'm' | 'l';
  loading?: boolean;
  stretched?: boolean;
}
