import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Wrapper.module.scss'

export function Wrapper({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
	return (
		<div
			className={clsx(styles.wrapper, className)}
			{...props}
		>
			{children}
		</div>
	)
}
