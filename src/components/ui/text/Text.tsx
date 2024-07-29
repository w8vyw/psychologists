import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Text.module.scss'

export function Text({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
	return (
		<div
			className={clsx(styles.text, className)}
			{...props}
		>
			{children}
		</div>
	)
}
