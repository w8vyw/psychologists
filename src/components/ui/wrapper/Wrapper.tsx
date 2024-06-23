import { type PropsWithChildren, type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Wrapper.module.scss'

export function Wrapper({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div
			className={clsx(styles.wrapper, className)}
			{...props}
		>
			{children}
		</div>
	)
}
