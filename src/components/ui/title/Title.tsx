import { type HTMLAttributes, type PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Title.module.scss'

export function Title({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
	return (
		<h3
			className={clsx(styles.title, className)}
			{...props}
		>
			{children}
		</h3>
	)
}
