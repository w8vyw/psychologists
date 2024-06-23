import Link from 'next/link'

import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './TelegramLink.module.scss'

export function TelegramLink({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link
			className={clsx(styles.link, className)}
			href='https://t.me/zhitschastlivo'
			target='_blank'
			{...props}
		>
			Наш канал
			<svg className={styles.icon}>
				<use href='/images/sprite.svg#tg' />
			</svg>
		</Link>
	)
}
