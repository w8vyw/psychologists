import NextImage from 'next/image'
import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './LinkCard.module.scss'

import { type IImage, type ILink } from '@/types/types'

export interface ILinkCardProps extends ILink, Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
	image: IImage
}

export function LinkCard({ href, label, image, className, ...props }: ILinkCardProps) {
	return (
		<NextLink
			href={href}
			className={clsx(styles.link, className)}
			{...props}
		>
			{label}
			<NextImage
				className={styles.image}
				src={image.imageData}
				alt={image.alt}
			/>
		</NextLink>
	)
}
