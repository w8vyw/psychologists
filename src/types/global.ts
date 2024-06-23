import { type StaticImageData } from 'next/image'

export interface IImage {
	imageData: StaticImageData
	alt: string
}

export interface IHeadingContent {
	title: string
	subtitle?: string
}

export interface IListItems {
	column1: string[]
	column2?: string[]
}
