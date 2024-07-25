import { type StaticImageData } from 'next/image'

export interface ILink {
	href: string
	label: string
}

export interface IImage {
	imageData: StaticImageData
	alt: string
}
