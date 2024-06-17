import { HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'

interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
}

export function Section({ className, children, ...props }: PropsWithChildren<ISectionProps>) {
	return (
		<div
			className={clsx(styles.section, className)}
			{...props}
		>
			{children}
		</div>
	)
}
