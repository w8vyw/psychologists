import Link from 'next/link'

import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Logo.module.scss'

interface ILogoProps extends HTMLAttributes<HTMLAnchorElement> {
	className?: string
}

export function Logo({ className, ...props }: ILogoProps) {
	return (
		<Link
			className={clsx(styles.link, className)}
			href='/'
			title='Логотип ir-ox-help.ru'
			{...props}
		>
			<svg className={styles.icon}>
				<use href='/images/sprite.svg#logo' />
			</svg>
			<span className={styles.text}>
				<span>психологические</span>
				<span>услуги</span>
			</span>
		</Link>
	)
}
