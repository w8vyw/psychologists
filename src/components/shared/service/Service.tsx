import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Service.module.scss'

import { EnrollButton } from '../enroll-button/EnrollButton'

interface IServiceProps extends ComponentPropsWithoutRef<'section'> {
	p?: string
}

interface IItem {
	title: string
	duration: string
	price: string
}

const data: IItem[] = [
	{
		title: '1 онлайн сессия',
		duration: 'Продолжительность сессии 60 минут',
		price: '5 000'
	},
	{
		title: '1 очная сессия',
		duration: 'Продолжительность сессии 60 минут',
		price: '3 900'
	},
	{
		title: 'Курс терапии 5 сессий онлайн',
		duration: 'Продолжительность сессии 60 минут',
		price: '18 500'
	}
]

export function Service({ className, ...props }: IServiceProps) {
	return (
		<section
			className={clsx(styles.service, className)}
			{...props}
		>
			<h2 className={styles.heading}>Услуги</h2>
			<div className={styles.list}>
				{data.map((item, index) => (
					<div
						className={styles.item}
						key={index}
					>
						<p className={styles.title}>{item.title}</p>
						<p className={styles.duration}>{item.duration}</p>
						<div className={styles.itemHeading}>
							<p className={styles.price}>{item.price} ₽</p>
							<EnrollButton className={styles.button}>Записаться</EnrollButton>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
