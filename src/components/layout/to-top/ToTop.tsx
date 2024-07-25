'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'

import styles from './ToTop.module.scss'

export function ToTop() {
	const [active, setActive] = useState<boolean>(false)

	useEffect(() => {
		const handler = () => {
			document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600
				? setActive(true)
				: setActive(false)
		}

		handler()

		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [])

	return (
		<button
			className={clsx(styles.toTop, active && styles.active)}
			onClick={() => {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}}
		>
			Up
		</button>
	)
}
