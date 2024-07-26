import Link from 'next/link'

import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Logo.module.scss'

export function Logo({ className, ...props }: ComponentProps<'a'>) {
	return (
		<Link
			className={clsx(styles.logo, className)}
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
