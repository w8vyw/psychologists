import styles from './page.module.scss'

import { type IImage } from '@/types/global'

import { Heading } from '@/ui/heading/Heading'
import { Text } from '@/ui/text/Text'

import { EnrollButton } from '@/shared/enroll-button/EnrollButton'
import { List } from '@/shared/list/List'

import { PreviewImages } from '@/components/shared/preview-images/PreviewImages'

import PreviewImage from '@/images/games/sexuality/preview.webp'

const title = 'Сексуальность – энергия жизни'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Sexuality() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<p>
					Игра позволяет проработать запросы на тему раскрытия своей сексуальности, чувственности,
					женственности, принятия себя и наполнение энергией притягательности.
				</p>
			</Text>
			<List
				heading='Возможные запросы:'
				items={{
					column1: [
						'Что поможет мне пробудить сексуальность?',
						'Что поможет мне возобновить огонь сексуальности в отношениях с мужчиной?',
						'Как мне гармонизировать тело и ум в теме моей сексуальности?',
						'Что блокирует мою сексуальность?',
						'Как раскрытие сексуальности поможет увеличить доход?',
						'Что раскроет мою женственность и привлечет в жизнь будущего мужа?'
					]
				}}
			/>
			<List
				heading='Игра помогает:'
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
			<EnrollButton>Записаться</EnrollButton>
		</>
	)
}
