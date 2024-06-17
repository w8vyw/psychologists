'use client'

import { useEffect, type RefObject } from 'react'

export function useClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T> | RefObject<T>[],
	cb: (e: MouseEvent | TouchEvent | FocusEvent) => void
) {
	useEffect(() => {
		const handler = (event: MouseEvent | TouchEvent | FocusEvent) => {
			const target = event.target as Node

			if (!target.isConnected) {
				return
			}

			const isOutside = Array.isArray(ref)
				? ref.filter(r => !!r.current).every(r => r.current && !r.current.contains(target))
				: ref.current && !ref.current.contains(target)

			if (isOutside) {
				cb(event)
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)
		document.addEventListener('focusin', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
			document.removeEventListener('focusin', handler)
		}
	}, [ref, cb])
}
