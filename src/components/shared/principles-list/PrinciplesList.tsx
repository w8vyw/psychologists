import NextImage from 'next/image'

import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './PrinciplesList.module.scss'

import { IImage } from '@/types/global'

import BgImage1 from '@/images/home/principles-list/1.webp'
import BgImage2 from '@/images/home/principles-list/2.webp'
import BgImage3 from '@/images/home/principles-list/3.webp'
import BgImage4 from '@/images/home/principles-list/4.webp'
import BgImage5 from '@/images/home/principles-list/5.webp'
import BgImage6 from '@/images/home/principles-list/6.webp'

interface IPrinciplesListProps extends ComponentPropsWithoutRef<'section'> {
	p?: string
}

interface IItem {
	title: string
	text: string
	bgImage: IImage
}

const data: IItem[] = [
	{
		title: 'Конфиденциальность',
		text: 'Все, о чем говорится в терапии, остаётся между участниками терапии',
		bgImage: {
			imageData: BgImage1,
			alt: ''
		}
	},
	{
		title: 'Неравнодушие к клиенту',
		text: 'Даже если клиент неправ, мы всегда на его стороне',
		bgImage: {
			imageData: BgImage2,
			alt: ''
		}
	},
	{
		title: 'Честность',
		text: 'Мы работаем, если есть с чем работать',
		bgImage: {
			imageData: BgImage3,
			alt: ''
		}
	},
	{
		title: 'Щедрость',
		text: 'Мы не боимся дать в работе больше нашим клиентам',
		bgImage: {
			imageData: BgImage4,
			alt: ''
		}
	},
	{
		title: 'Ответственность',
		text: 'Мы несем ответственность за свою работу с клиентом',
		bgImage: {
			imageData: BgImage5,
			alt: ''
		}
	},
	{
		title: 'Четкая уверенность того, что мы делаем',
		text: 'Высокий уровень профессионализма, который мы постоянно поддерживаем и развиваем',
		bgImage: {
			imageData: BgImage6,
			alt: ''
		}
	}
]

export function PrinciplesList({ className, ...props }: IPrinciplesListProps) {
	return (
		<section
			className={clsx(styles.principlesList, className)}
			{...props}
		>
			<h2 className={styles.heading}>Наши принципы</h2>
			<div className={styles.list}>
				{data.map((item, index) => (
					<div
						className={styles.item}
						key={index}
					>
						<NextImage
							className={styles.image}
							src={item.bgImage.imageData}
							alt={item.bgImage.alt}
							placeholder='blur'
						/>
						<p className={styles.title}>{item.title}</p>
						<p className={styles.text}>{item.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}
