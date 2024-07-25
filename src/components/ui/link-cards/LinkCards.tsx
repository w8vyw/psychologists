import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './LinkCards.module.scss'

import { type ILinkCardProps, LinkCard } from '../link-card/LinkCard'

export interface ILinkCardsProps extends ComponentProps<'section'> {
	heading: string
	cards: ILinkCardProps[]
}

export function LinkCards({ heading, cards, className, ...props }: ILinkCardsProps) {
	return (
		<section
			className={clsx(styles.cards, className)}
			{...props}
		>
			<h4 className={styles.heading}>{heading}</h4>
			<ul className={styles.list}>
				{cards.map(card => (
					<LinkCard
						key={card.href}
						href={card.href}
						label={card.label}
						image={card.image}
					/>
				))}
			</ul>
		</section>
	)
}
