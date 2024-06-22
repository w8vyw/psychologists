'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
	// const IS_SERVER = typeof window === 'undefined'

	function getMatches(query: string): boolean {
		// if (IS_SERVER) {
		// 	return false
		// }

		return window.matchMedia(query).matches
	}

	// const [matches, setMatches] = useState<boolean>(getMatches(query))
	const [matches, setMatches] = useState<boolean>(false)

	useEffect(() => {
		function handler() {
			setMatches(getMatches(query))
		}

		handler()

		const matchMedia = window.matchMedia(query)

		matchMedia.addEventListener('change', handler)

		return () => {
			matchMedia.removeEventListener('change', handler)
		}
	}, [query])

	return matches
}
