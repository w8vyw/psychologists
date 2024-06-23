import { type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Heading.module.scss'

import { type IHeadingContent } from '@/types/global'

interface IHeadingProps extends HTMLAttributes<HTMLDivElement> {
	headingContent: IHeadingContent
}

export function Heading({ headingContent, className, ...props }: IHeadingProps) {
	return (
		<div
			className={clsx(styles.heading, className)}
			{...props}
		>
			<h1 className={styles.title}>{headingContent.title}</h1>
			<h2 className={styles.subtitle}>{headingContent.subtitle}</h2>
		</div>
	)
}
