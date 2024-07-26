import { type PropsWithChildren, type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Message.module.scss'

export function Message({ children, className, ...props }: PropsWithChildren<ComponentProps<'p'>>) {
	return (
		<p
			className={clsx(styles.message, className)}
			{...props}
		>
			{children}
		</p>
	)
}
