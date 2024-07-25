import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import PreviewImage from '@/images/games/sexuality/preview.webp'
import { type IImage } from '@/types'

const title = 'Сексуальность – энергия жизни'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Sexuality() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<p>
					Игра позволяет проработать запросы на тему раскрытия своей сексуальности, чувственности,
					женственности, принятия себя и наполнение энергией притягательности.
				</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Возможные запросы:</Title>
				<List
					items={{
						column1: [
							'Что поможет мне пробудить сексуальность?',
							'Что поможет мне возобновить огонь сексуальности в отношениях с мужчиной?',
							'Как мне гармонизировать тело и ум в теме моей сексуальности?',
							'Что блокирует мою сексуальность?',
							'Что блокирует мою сексуальность?',
							'Как раскрытие сексуальности поможет увеличить доход?',
							'Что раскроет мою женственность и привлечет в жизнь будущего мужа?'
						]
					}}
				/>
			</Section>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Игра помогает:</Title>
				<List
					items={{
						column1: [
							'Проработать установки, блокирующие сексуальность (в игре заложено более 50 мощных практик и упражнений, которые помогают снять энергетические блоки и раскрепоститься);',
							'Исследовать грани сексуальности (игровые колоды с заданиями и 5 уровней сексуальности позволят открыть новые сексуальные образы и состояния);',
							'Принять свое тело и пробудить чувственность (80% женщин по результатам игры отмечают усиление чувственности и самопринятия);',
							'Исцелить женственность (игра проводится в женской компании, в задания заложены специальные коллективные практики, которые создают исцеляющий эффект круга женской силы);',
							'Улучшить отношения с любимым человеком и сотворение состояния, которое покоряет мужчин.'
						]
					}}
				/>
			</Section>
		</Wrapper>
	)
}
