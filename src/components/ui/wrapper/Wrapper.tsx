import { type PropsWithChildren, type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Wrapper.module.scss'

export function Wrapper({
	children,
	className,
	...props
}: PropsWithChildren<ComponentProps<'div'>>) {
	return (
		<div
			className={clsx(styles.wrapper, className)}
			{...props}
		>
			{children}
		</div>
	)
}
