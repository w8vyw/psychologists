import Link from 'next/link'

import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Phones.module.scss'

export function Phones({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={clsx(styles.phones, className)}
			{...props}
		>
			<Link href='tel:+79852428318'>+7 985 242 83 18</Link>
			<Link href='tel:+79254507146'>+7 925 450 71 46</Link>
		</div>
	)
}
