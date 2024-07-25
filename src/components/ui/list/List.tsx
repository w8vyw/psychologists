import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './List.module.scss'

export interface IListItems {
	column1: string[]
	column2?: string[]
}

export enum ENUMListStyle {
	Circle = 'circle',
	Ticks = 'ticks'
}

interface IListProps extends ComponentProps<'div'> {
	items: IListItems
	listStyle?: ENUMListStyle
}

export function List({ items, listStyle = ENUMListStyle.Circle, className, ...props }: IListProps) {
	return (
		<div
			className={clsx(
				styles.listsContainer,
				listStyle === ENUMListStyle.Ticks && styles.ticks,
				className
			)}
			{...props}
		>
			<ul className={styles.list}>
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
				<ul className={styles.list}>
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
	)
}
