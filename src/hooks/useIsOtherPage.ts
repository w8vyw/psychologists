'use client'

import { usePathname } from 'next/navigation'

export function useIsOtherPage(): boolean {
	const pathname = usePathname()
	return pathname !== '/'
}
