import { type Metadata } from 'next'

import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { type ILinkCardProps } from '@/components/ui/link-card/LinkCard'
import { LinkCards } from '@/components/ui/link-cards/LinkCards'
import { List } from '@/components/ui/list/List'
import { Message } from '@/components/ui/message/Message'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'

import EmotionsCardImage from '@/images/therapy/link-cards/emotions.webp'
import GirlsCardImage from '@/images/therapy/link-cards/girls.webp'
import KidCardImage from '@/images/therapy/link-cards/kid.webp'
import SlimnessCardImage from '@/images/therapy/link-cards/slimness.webp'
import YourselfCardImage from '@/images/therapy/link-cards/yourself.webp'
import PreviewImage from '@/images/therapy/preview.webp'
import { type IImage } from '@/types'

export const metadata: Metadata = {
	title: 'Групповая психотерапия'
}

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: 'Групповая психотерапия'
	}
]

const linksPrefix = '/therapy/'

export default function Therapy() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: 'Групповая психотерапия'
				}}
			/>
			<Text className={styles.text}>
				<Title>Что такое групповая психотерапия?</Title>
				<p>
					Групповая психотерапия – это метод решения эмоциональных, поведенческих, личностных и
					межличностных проблем, инструмент самосовершенствования, терапевтический эффект которого
					основан на взаимодействии и взаимовлиянии людей в небольшом коллективе –
					психотерапевтической группе.
				</p>
				<p>
					Управляет терапевтическим процессом ведущий – эксперт, психотерапевт. Его задача так
					построить групповую работу, чтобы незнакомые друг с другом люди, разные по темпераменту,
					степени открытости/закрытости, могли расслабиться, почувствовать себя комфортно и
					поделиться с одногруппниками своими страхами, сомнениями, проблемами, установками и т.д.
				</p>
				<p>
					Главное отличие группового формата от индивидуальных сессий заключается в том, что эффект
					от контакта с психотерапевтом многократно усиливается воздействием каждого из участников в
					отдельности и всей группы в целом. Психотерапевтический эффект достигается посредством
					взаимодействия участников группы друг с другом и со своим терапевтом. В ходе такой
					совместной работы каждый участник раскрывается и получает возможность посмотреть на себя
					со стороны, увидеть и услышать разные точки зрения, поделиться своим опытом и узнать о
					том, как одногруппники переживают подобные или совсем непохожие ситуации.
				</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Цели групповой психотерапии</Title>
				<List
					items={{
						column1: [
							'устранить негативные симптомы',
							'выявить проблему каждого участника, помочь понять и изменить свое состояние',
							'улучшить коммуникативные навыки',
							'улучшить общий психоэмоциональный фон',
							'изменить привычные, но малоэффективные или деструктивные схемы мышления и поведения'
						],
						column2: [
							'облегчить адаптацию в социуме',
							'раскрыть личностный потенциал каждого участника группы и найти пути самореализации',
							'принять ответственность за свой выбор',
							'выработать позитивную жизненную позицию',
							'повысить работоспособность и способствовать карьерному росту'
						]
					}}
				/>
			</Section>
			<Message className={styles.message}>
				Благодаря многоуровневому воздействию психотерапевтическая группа обладает мощным
				потенциалом и эффективностью!
			</Message>
			<LinkCards
				cards={linkCardsData}
				heading={'Психотерапевтические группы'}
			/>
		</>
	)
}

const linkCardsData: ILinkCardProps[] = [
	{
		href: `${linksPrefix}kid`,
		label: 'Исцеление внутреннего ребенка',
		image: {
			imageData: KidCardImage,
			alt: ''
		}
	},
	{
		href: `${linksPrefix}girls`,
		label: 'Между нами девочками',
		image: {
			imageData: GirlsCardImage,
			alt: ''
		}
	},
	{
		href: `${linksPrefix}yourself`,
		label: 'Обретая себя',
		image: {
			imageData: YourselfCardImage,
			alt: ''
		}
	},
	{
		href: `${linksPrefix}emotions`,
		label: 'Эмоции перезагрузка',
		image: {
			imageData: EmotionsCardImage,
			alt: ''
		}
	},
	{
		href: `${linksPrefix}slimness`,
		label: 'Счастливая стройность',
		image: {
			imageData: SlimnessCardImage,
			alt: ''
		}
	}
]
