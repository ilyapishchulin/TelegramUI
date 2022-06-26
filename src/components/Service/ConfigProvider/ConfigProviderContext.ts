import { createContext } from 'react';
import { TConfigProvider } from './TConfigProvider';

import { getPlatformByUA } from 'helpers/platform';

export const ConfigProviderContext = createContext<TConfigProvider>({
  platform: getPlatformByUA(),
});
