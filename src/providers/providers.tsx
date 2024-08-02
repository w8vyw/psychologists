'use client'

import { PropsWithChildren } from 'react'

import { LazyMotion, domAnimation } from 'framer-motion'

import { CounterStoreProvider } from '@/providers/counter-store-provider'

export function Providers({ children }: PropsWithChildren) {
	return (
		<LazyMotion
			strict
			features={domAnimation}
		>
			<CounterStoreProvider>{children}</CounterStoreProvider>
		</LazyMotion>
	)
}
