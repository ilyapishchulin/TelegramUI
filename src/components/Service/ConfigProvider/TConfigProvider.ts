import { HTMLAttributes } from 'react';
import { Platform } from 'helpers/platform';

export interface TConfigProvider extends HTMLAttributes<HTMLElement> {
  platform: Platform;
}
