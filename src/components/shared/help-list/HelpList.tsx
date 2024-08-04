import NextImage from 'next/image'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './HelpList.module.scss'

import { IImage } from '@/types/global'

import BgImage1 from '@/images/home/help-list/1.webp'
import BgImage2 from '@/images/home/help-list/2.webp'
import BgImage3 from '@/images/home/help-list/3.webp'
import BgImage4 from '@/images/home/help-list/4.webp'
import BgImage5 from '@/images/home/help-list/5.webp'
import BgImage6 from '@/images/home/help-list/6.webp'

interface IHelpListProps extends ComponentPropsWithoutRef<'section'> {
	p?: string
}

interface IItem {
	title: string
	text: string
	bgImage: IImage
}

const data: IItem[] = [
	{
		title: 'Трудности в отношениях',
		text: 'частые ссоры и конфликты, сложность в поиске партнера для построения отношений, сложности в общении с коллегами, друзьями, родителями, детьми',
		bgImage: {
			imageData: BgImage1,
			alt: ''
		}
	},
	{
		title: 'Личные проблемы',
		text: 'низкая самооценка, неуверенность, нелюбовь к себе, отсутствие целей в жизни',
		bgImage: {
			imageData: BgImage2,
			alt: ''
		}
	},
	{
		title: 'Финансовые проблемы',
		text: 'потеря работы, проблемы с трудоустройством, кредиты, долги, нелюбимая работа, низкий доход',
		bgImage: {
			imageData: BgImage3,
			alt: ''
		}
	},
	{
		title: 'Проблемы со здоровьем',
		text: 'апатия, отсутствие энергии, выгорание, лишний вес, РПП',
		bgImage: {
			imageData: BgImage4,
			alt: ''
		}
	},
	{
		title: 'Кризисное состояние',
		text: 'расставание, боль утраты близкого человека',
		bgImage: {
			imageData: BgImage5,
			alt: ''
		}
	},
	{
		title: 'Эмоциональное состояние',
		text: 'тревожность, вспыльчивость, агрессия, чувство вины, обида, злость, ревность, подавленность, панические атаки',
		bgImage: {
			imageData: BgImage6,
			alt: ''
		}
	}
]

export function HelpList({ className, ...props }: IHelpListProps) {
	return (
		<section
			className={clsx(styles.helpList, className)}
			{...props}
		>
			<h2 className={styles.heading}>В чем мы вам можем помочь?</h2>
			<div className={styles.list}>
				{data.map((item, index) => (
					<div
						className={styles.item}
						key={index}
					>
						<p className={styles.title}>{item.title}</p>
						<p className={styles.text}>{item.text}</p>
						<NextImage
							className={styles.image}
							src={item.bgImage.imageData}
							alt={item.bgImage.alt}
							placeholder='blur'
						/>
					</div>
				))}
			</div>
		</section>
	)
}
