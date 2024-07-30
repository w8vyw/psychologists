import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Title.module.scss'

export function Title({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'h3'>>) {
	return (
		<h3
			className={clsx(styles.title, className)}
			{...props}
		>
			{children}
		</h3>
	)
}
