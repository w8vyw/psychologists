import { PropsWithChildren } from 'react'

import { CounterStoreProvider } from '@/providers/counter-store-provider'

export function Providers({ children }: PropsWithChildren) {
	return <CounterStoreProvider>{children}</CounterStoreProvider>
}
