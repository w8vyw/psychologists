import { type HTMLAttributes, type PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Slogan.module.scss'

export function Slogan({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
	return (
		<p
			className={clsx(styles.slogan, className)}
			{...props}
		>
			{children}
		</p>
	)
}
