import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Heading.module.scss'

export interface IData {
	title: string
	subtitle?: string
}

interface IHeadingProps extends ComponentProps<'div'> {
	data: IData
}

export function Heading({ data, className, ...props }: IHeadingProps) {
	return (
		<div
			className={clsx(styles.heading, className)}
			{...props}
		>
			<p className={styles.subtitle}>{data.subtitle}</p>
			<h1 className={styles.title}>{data.title}</h1>
		</div>
	)
}
