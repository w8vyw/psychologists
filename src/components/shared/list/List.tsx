import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './List.module.scss'

import { Title } from '@/ui/title/Title'

export interface IListItems {
	column1: string[]
	column2?: string[]
}

export enum EnumListStyle {
	Circles,
	Ticks
}

interface IListProps extends ComponentPropsWithoutRef<'section'> {
	heading?: string
	listStyle?: EnumListStyle
	items: IListItems
}

export function List({
	heading,
	listStyle = EnumListStyle.Circles,
	items,
	className,
	...props
}: IListProps) {
	return (
		<section
			className={clsx(styles.list, className)}
			{...props}
		>
			<Title className={styles.heading}>{heading}</Title>
			<div className={clsx(styles.lists, listStyle === EnumListStyle.Ticks && styles.ticks)}>
				<ul>
					{items.column1.map(item => (
						<li
							key={item}
							className={styles.item}
						>
							{item}
						</li>
					))}
				</ul>
				{typeof items.column2 !== 'undefined' && (
					<ul>
						{items.column2.map(item => (
							<li
								key={item}
								className={styles.item}
							>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
