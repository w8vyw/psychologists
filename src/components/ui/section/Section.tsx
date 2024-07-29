import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'

export function Section({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'section'>>) {
	return (
		<section
			className={clsx(styles.section, className)}
			{...props}
		>
			{children}
		</section>
	)
}
