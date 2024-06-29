'use client'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './Flowers.module.scss'

import { useIsOtherPage } from '@/hooks/useIsOtherPage'

import BottomLeft from '@/images/flowers/bottom-left.webp'
import BottomRight from '@/images/flowers/bottom-right.webp'
import TopLeft from '@/images/flowers/top-left.webp'
import TopRight from '@/images/flowers/top-right.webp'

export function Flowers() {
	const isOtherPage = useIsOtherPage()
	return (
		<div className={clsx(styles.flowers, isOtherPage && styles.active)}>
			<Image
				className={clsx(styles.image, styles.topLeft)}
				src={TopLeft}
				alt=''
				quality={100}
				placeholder='blur'
			/>
			<Image
				className={clsx(styles.image, styles.topRight)}
				src={TopRight}
				alt=''
				quality={100}
				placeholder='blur'
			/>
			<Image
				className={clsx(styles.image, styles.bottomLeft)}
				src={BottomLeft}
				alt=''
				quality={100}
				placeholder='blur'
			/>
			<Image
				className={clsx(styles.image, styles.bottomRight)}
				src={BottomRight}
				alt=''
				quality={100}
				placeholder='blur'
			/>
		</div>
	)
}
