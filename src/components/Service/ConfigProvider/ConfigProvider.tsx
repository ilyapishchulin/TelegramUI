import { FC } from 'react';
import { TConfigProvider } from './TConfigProvider';

import { ConfigProviderContext } from './ConfigProviderContext';

export const ConfigProvider: FC<TConfigProvider> = ({
  children,
  ...restProps
}) => (
  <ConfigProviderContext.Provider value={restProps}>
    {children}
  </ConfigProviderContext.Provider>
);
