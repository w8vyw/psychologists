import { type HTMLAttributes, type PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Text.module.scss'

export function Text({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div
			className={clsx(styles.text, className)}
			{...props}
		>
			{children}
		</div>
	)
}
