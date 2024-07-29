import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Title.module.scss'

interface ITitleProps extends ComponentPropsWithoutRef<'h3'> {
	children?: ReactNode | undefined
}

export function Title({ children, className, ...props }: ITitleProps) {
	return (
		<h3
			className={clsx(styles.title, className)}
			{...props}
		>
			{children}
		</h3>
	)
}
