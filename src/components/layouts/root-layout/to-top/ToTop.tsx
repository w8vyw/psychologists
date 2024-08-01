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
			onClick={e => {
				e.preventDefault()
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}}
			type='button'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 15'
				width='24'
				height='15'
				fill='#cb19a4'
			>
				<path d='M11.8921 0.878906L23.5594 12.5462L21.438 14.6675L11.8921 5.12155L2.34615 14.6675L0.224828 12.5462L11.8921 0.878906Z' />
			</svg>
		</button>
	)
}
