'use client'

import { PropsWithChildren } from 'react'

import { LazyMotion, domAnimation } from 'framer-motion'

import { CounterStoreProvider } from './counter-store-provider'

export function Providers({ children }: PropsWithChildren) {
	console.log('Created by w8vy.dev | @w8vyw')
	return (
		// <LazyMotion
		// 	strict
		// 	features={domAnimation}
		// >
		<CounterStoreProvider>{children}</CounterStoreProvider>
		// </LazyMotion>
		// <div>{children}</div>
	)
}
