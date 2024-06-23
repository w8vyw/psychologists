import { type HTMLAttributes, type PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Message.module.scss'

export function Message({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
	return (
		<p
			className={clsx(styles.message, className)}
			{...props}
		>
			{children}
		</p>
	)
}
