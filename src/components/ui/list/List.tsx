import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './List.module.scss'

import { IListItems } from '@/types/global'

interface IListProps extends HTMLAttributes<HTMLDivElement> {
	items: IListItems
	listStyle?: 'circle' | 'ticks'
}

export function List({ items, listStyle = 'circle', className, ...props }: IListProps) {
	return (
		<div
			className={clsx(styles.listsContainer, listStyle === 'ticks' && styles.ticks, className)}
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
