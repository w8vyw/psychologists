import NextImage from 'next/image'

import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './PreviewImages.module.scss'

import { type IImage } from '@/types'

interface IPreviewImagesProps extends ComponentProps<'div'> {
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
				/>
			))}
		</div>
	)
}
