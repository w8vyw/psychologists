import NextImage from 'next/image'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './ProductCard.module.scss'

import { IImage } from '@/types'

import { Button, EnumButtonSizes } from '@/ui/button/Button'

export interface IProductCardProps extends ComponentPropsWithoutRef<'div'> {
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
				placeholder='blur'
			/>
			<div className={styles.content}>
				<h4 className={styles.heading}>
					<span>Условия группы</span> {product.name}
				</h4>
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
					<li className={clsx(styles.item, styles.price)}>
						1 онлайн занятие <span>{product.specs.price.online} ₽</span>
					</li>
					<li className={clsx(styles.item, styles.price)}>
						1 очное занятие <span>{product.specs.price.offline} ₽</span>
					</li>
				</ul>
				<Button
					className={styles.button}
					size={EnumButtonSizes.Medium}
				>
					Записаться
				</Button>
			</div>
		</div>
	)
}
