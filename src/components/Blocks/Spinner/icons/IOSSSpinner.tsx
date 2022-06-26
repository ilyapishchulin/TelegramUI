import { FC } from 'react';

export const IOSSSpinner: FC = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity=".5" x="11" y="2" width="3" height="7" rx="1.5" fill="currentColor"/>
    <rect opacity=".7" x="11" y="16" width="3" height="7" rx="1.5" fill="currentColor"/>
    <rect opacity=".5" x="19" y="4" width="3" height="7" rx="1.5" transform="rotate(45 19 4)" fill="currentColor"/>
    <rect opacity=".5" width="3" height="7" rx="1.5" transform="scale(1 -1) rotate(45 34.91 12.339)" fill="currentColor"/>
    <rect opacity=".8" x="6" y="21" width="3" height="7" rx="1.5" transform="rotate(-135 6 21)" fill="currentColor"/>
    <rect width="3" height="7" rx="1.5" transform="scale(-1 1) rotate(45 -7.828 -5.243)" fill="currentColor"/>
    <rect opacity=".5" x="23" y="11" width="3" height="7" rx="1.5" transform="rotate(90 23 11)" fill="currentColor"/>
    <rect opacity=".9" x="9" y="11" width="3" height="7" rx="1.5" transform="rotate(90 9 11)" fill="currentColor"/>
  </svg>
);
