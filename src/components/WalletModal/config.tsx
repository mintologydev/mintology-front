/** @format */

import {Config, ConnectorNames} from './types'

const connectors: Config[] = [
  {
    title: 'Metamask',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    connectorId: ConnectorNames.WalletConnect,
  },
]

export default connectors
export const connectorLocalStorageKey = 'connectorId'
