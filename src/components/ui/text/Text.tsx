import { type PropsWithChildren, type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Text.module.scss'

export function Text({ children, className, ...props }: PropsWithChildren<ComponentProps<'div'>>) {
	return (
		<div
			className={clsx(styles.text, className)}
			{...props}
		>
			{children}
		</div>
	)
}
