import { type PropsWithChildren, type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'

export function Section({
	children,
	className,
	...props
}: PropsWithChildren<ComponentProps<'section'>>) {
	return (
		<section
			className={clsx(styles.section, className)}
			{...props}
		>
			{children}
		</section>
	)
}
