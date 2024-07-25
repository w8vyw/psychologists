import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './Heading.module.scss'

export interface IHeadingContent {
	title: string
	subtitle?: string
}

interface IHeadingProps extends ComponentProps<'div'> {
	headingContent: IHeadingContent
}

export function Heading({ headingContent, className, ...props }: IHeadingProps) {
	return (
		<div
			className={clsx(styles.heading, className)}
			{...props}
		>
			<h1 className={styles.title}>{headingContent.title}</h1>
			<p className={styles.subtitle}>{headingContent.subtitle}</p>
		</div>
	)
}
