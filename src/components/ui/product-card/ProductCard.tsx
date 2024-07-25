import NextImage from 'next/image'

import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './ProductCard.module.scss'

import { IImage } from '@/types'

export interface IProductCardProps extends ComponentProps<'div'> {
	product: {
		image: IImage
		name: string
		active: boolean
		specs: {
			age: string
			maxCapacity: number
			minSessions?: number
			sessionDuration?: string
			groupDuration: string
			price: {
				online: number
				offline: number
			}
		}
	}
}

export function ProductCard({ product, className, ...props }: IProductCardProps) {
	return (
		<div
			className={clsx(styles.card, className)}
			{...props}
		>
			<NextImage
				className={styles.image}
				src={product.image.imageData}
				alt={product.image.alt}
				quality={100}
				placeholder='blur'
			/>
			<div className={styles.content}>
				<p className={styles.name}>
					Условия группы <span>«{product.name}»</span>
					<span className={clsx(styles.status, product.active ? styles.opened : styles.closed)}>
						{product.active ? 'Идет набор' : 'Закрытая группа'}
					</span>
				</p>
				<ul className={styles.list}>
					<li className={styles.item}>
						Возраст участников группы
						<span>{product.specs.age}</span>
					</li>
					<li className={styles.item}>
						Макс. кол-во участников в 1 группе
						<span>{product.specs.maxCapacity}</span>
					</li>
					{typeof product.specs.minSessions !== 'undefined' && (
						<li className={styles.item}>
							Мин. кол-во занятий для каждого участника
							<span>{product.specs.minSessions}</span>
						</li>
					)}
					<li className={styles.item}>
						Продолжительность занятий
						<span>{product.specs.sessionDuration}</span>
					</li>
					<li className={styles.item}>
						Продолжительность работы группы
						<span>{product.specs.groupDuration}</span>
					</li>
				</ul>
				<div className={styles.price}>
					<p>
						1 онлайн занятие <span>{product.specs.price.online} ₽</span>
					</p>
					<p>
						1 очное занятие <span>{product.specs.price.offline} ₽</span>
					</p>
				</div>
			</div>
		</div>
	)
}
