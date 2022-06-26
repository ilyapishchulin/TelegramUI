import { FC } from 'react';

export const IOSXSSpinner: FC = () => (
  <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity=".5" x="5.5" y="2" width="1" height="2" rx=".5" fill="currentColor"/>
    <rect opacity=".7" x="5.5" y="8" width="1" height="2" rx=".5" fill="currentColor"/>
    <rect opacity=".5" x="8" y="6.5" width="1" height="2" rx=".5" transform="rotate(-90 8 6.5)" fill="currentColor"/>
    <rect opacity=".5" x="7" y="7.707" width="1" height="2" rx=".5" transform="rotate(-45 7 7.707)" fill="currentColor"/>
    <rect opacity=".8" width="1" height="2" rx=".5" transform="scale(-1 1) rotate(-45 6.743 10.035)" fill="currentColor"/>
    <rect opacity=".9" x="2" y="6.5" width="1" height="2" rx=".5" transform="rotate(-90 2 6.5)" fill="currentColor"/>
    <rect x="3" y="3.707" width="1" height="2" rx=".5" transform="rotate(-45 3 3.707)" fill="currentColor"/>
    <rect opacity=".5" width="1" height="2" rx=".5" transform="scale(-1 1) rotate(-45 -.086 12.864)" fill="currentColor"/>
  </svg>
);
