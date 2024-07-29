import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Slogan.module.scss'

export function Slogan({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'p'>>) {
	return (
		<p
			className={clsx(styles.slogan, className)}
			{...props}
		>
			{children}
		</p>
	)
}
