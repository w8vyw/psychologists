import Image from 'next/image'
import Link from 'next/link'

import { type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './CardLink.module.scss'

import { type IImage } from '@/types/global'

interface ICardLink extends HTMLAttributes<HTMLAnchorElement> {
	href: string
	image: IImage
}

export function CardLink({ href, image, children, className, ...props }: ICardLink) {
	return (
		<Link
			href={href}
			className={clsx(styles.link, className)}
			{...props}
		>
			{children}
			<Image
				className={styles.image}
				src={image.imageData}
				alt={image.alt}
			/>
		</Link>
	)
}
