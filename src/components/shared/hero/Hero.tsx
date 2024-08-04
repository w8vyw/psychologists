'use client'

import NextImage from 'next/image'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

// import { m } from 'framer-motion'
import styles from './Hero.module.scss'

import Image from '@/images/home/hero.webp'

import { EnrollButton } from '../enroll-button/EnrollButton'

// import { sectionMotionVariants, textMotionVariants, imageMotionVariants } from './motion-variants'

interface IHeroProps extends ComponentPropsWithoutRef<'section'> {
	p?: string
}

export function Hero({ className, ...props }: IHeroProps) {
	return (
		<section
			className={clsx(styles.hero, className)}
			{...props}
		>
			<h1 className={styles.heading}>Практическая психология Психологические услуги</h1>
			<div
			// variants={sectionMotionVariants}
			// initial={'hidden'}
			// whileInView={'visible'}
			>
				<div className={styles.text}>
					<p
						// variants={textMotionVariants}
						className={styles.paragraph}
					>
						Название, товары, услуги, род деятельности, дата создания, знаки отличия и достижения,
						основные конкуренты
					</p>
					<EnrollButton className={styles.button}>Записаться на консультацию</EnrollButton>
				</div>
				<div
					className={styles.imageContainer}
					// initial={'hidden'}
					// variants={imageMotionVariants}
					// whileInView={'visible'}
				>
					<NextImage
						className={styles.image}
						src={Image}
						alt=''
						quality={100}
						placeholder='blur'
					/>
				</div>
			</div>
		</section>
	)
}
