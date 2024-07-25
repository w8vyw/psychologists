import Image from 'next/image'
import Link from 'next/link'

import { type ComponentProps } from 'react'

import clsx from 'clsx'

import styles from './LinkCard.module.scss'

import { type IImage, type ILink } from '@/types'

export interface ILinkCardProps extends ILink, Omit<ComponentProps<'a'>, 'href'> {
	image: IImage
}

export function LinkCard({ href, label, image, className, ...props }: ILinkCardProps) {
	return (
		<Link
			href={href}
			className={clsx(styles.link, className)}
			{...props}
		>
			{label}
			<Image
				className={styles.image}
				src={image.imageData}
				alt={image.alt}
			/>
		</Link>
	)
}
