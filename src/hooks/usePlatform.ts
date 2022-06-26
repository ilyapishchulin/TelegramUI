import { useContext } from 'react';

import { getPlatformByUA, Platform } from 'helpers/platform';
import { ConfigProviderContext } from 'components/Service/ConfigProvider/ConfigProviderContext';

export const usePlatform = (): Platform => {
  const { platform } = useContext(ConfigProviderContext);
  if (platform) {
    return platform;
  }

  return getPlatformByUA();
};
