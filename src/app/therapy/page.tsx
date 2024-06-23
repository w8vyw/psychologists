import { type Metadata } from 'next'

import styles from './page.module.scss'

import { CardLink } from '@/components/ui/card-link/CardLink'
import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { Message } from '@/components/ui/message/Message'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Slogan } from '@/components/ui/slogan/Slogan'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import { IHeadingContent, IImage } from '@/types/global'
import { IListItems } from '@/types/global'

import Image1 from '@/images/1.webp'

export const metadata: Metadata = {
	title: 'Групповая психотерапия'
}

const previewImages: [IImage] = [
	{
		imageData: Image1,
		alt: 'Групповая психотерапия'
	}
]

const headingContent: IHeadingContent = {
	title: 'Групповая психотерапия'
}

const listItems: IListItems = {
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
}

export default function Therapy() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading headingContent={headingContent} />
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
			<Title>Цели групповой психотерапии</Title>
			<List items={listItems} />
			<Message>
				Благодаря многоуровневому воздействию психотерапевтическая группа обладает мощным
				потенциалом и эффективностью!
			</Message>
			<Slogan>
				Вы приняли решение избавиться от лишнего веса, начинайте прямо сегодня! Делайте выбор в п!
				<span>
					ользу своей счастливой стройности и благополучия! Вы обретете лучшую версию своего тела и
					своей жизни
				</span>
			</Slogan>
			<CardLink
				href=''
				image={previewImages[0]}
			>
				Исцеление внутреннего ребенка
			</CardLink>
		</Wrapper>
	)
}