import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Message.module.scss'

export function Message({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'p'>>) {
	return (
		<p
			className={clsx(styles.message, className)}
			{...props}
		>
			{children}
		</p>
	)
}
