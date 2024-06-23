import NextImage from 'next/image'

import { type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './PreviewImages.module.scss'

import { type IImage } from '@/types/global'

interface IPreviewImagesProps extends HTMLAttributes<HTMLDivElement> {
	images: [IImage] | [IImage, IImage]
}

export function PreviewImages({ images, className, ...props }: IPreviewImagesProps) {
	return (
		<div
			className={clsx(styles.images, className)}
			{...props}
		>
			{images.map(img => (
				<NextImage
					key={img.alt}
					src={img.imageData}
					alt={img.alt}
					className={styles.image}
					quality={100}
					placeholder='blur'
				></NextImage>
			))}
		</div>
	)
}
