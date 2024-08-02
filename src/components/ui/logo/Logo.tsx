import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Logo.module.scss'

import { Icon } from '@/ui/icon/Icon'

export function Logo({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
	return (
		<NextLink
			className={clsx(styles.logo, className)}
			title='Логотип ir-ox-help.ru'
			href='/'
			{...props}
		>
			<Icon
				className={styles.icon}
				id='logo'
			/>
			<span className={styles.text}>
				<span>психологические</span>
				<span>услуги</span>
			</span>
		</NextLink>
	)
}
