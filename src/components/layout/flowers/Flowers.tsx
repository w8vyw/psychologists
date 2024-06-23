'use client'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './Flowers.module.scss'

import { useIsOtherPage } from '@/hooks/useIsOtherPage'

import Image1 from '@/images/1.webp'

export function Flowers() {
	const isOtherPage = useIsOtherPage()
	return (
		<div className={clsx(styles.flowers, isOtherPage && styles.active)}>
			<Image
				className={styles.topLeft}
				src={Image1}
				alt=''
			/>
			Flowers
		</div>
	)
}
