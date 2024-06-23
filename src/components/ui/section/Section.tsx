import { type PropsWithChildren, type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'

export function Section({
	className,
	children,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div
			className={clsx(styles.section, className)}
			{...props}
		>
			{children}
		</div>
	)
}
