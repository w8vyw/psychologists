import { type PropsWithChildren, type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Slogan.module.scss'

export function Slogan({ children, className, ...props }: PropsWithChildren<ComponentProps<'p'>>) {
	return (
		<p
			className={clsx(styles.slogan, className)}
			{...props}
		>
			{children}
		</p>
	)
}
