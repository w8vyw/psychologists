import styles from './page.module.scss'

import { type IImage } from '@/types/global'

import { Heading } from '@/ui/heading/Heading'
import { Text } from '@/ui/text/Text'

import { EnrollButton } from '@/shared/enroll-button/EnrollButton'
import { List } from '@/shared/list/List'
import { PreviewImages } from '@/shared/preview-images/PreviewImages'

import PreviewImage from '@/images/games/money/preview.webp'

const title = 'Территория денег – стань денежным магнитом'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Money() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<p>Игра позволяет проработать запросы на тему денег, финансов, процветания.</p>
			</Text>
			<List
				heading='Возможные запросы:'
				items={{
					column1: [
						'Как мне выйти на определенную сумму дохода?',
						'Какие установки, программы ограничивают приток денег в мою жизнь?',
						'Что мешает/поможет получать мне деньги из определенного источника (бизнес, человек)?',
						'Какие действия необходимо предпринять для достижения желаемого дохода? И т.д.'
					]
				}}
			/>
			<List
				heading='Игра помогает:'
				items={{
					column1: [
						'Найти причины, которые ограничивают доход, понять, в какой сфере блок и что нужно проработать',
						'Понять, какие установки, сценарии, родовые программы мешают выйти на желаемую сумму и трансформировать их',
						'Выстроить мышление богатого человека и эффективную денежную стратегию',
						'Гармонизировать баланс между брать и отдавать; проработать готовность принимать и удерживать деньги',
						'Выстроить действия, которые будут планом для достижения Вашего желаемого дохода'
					]
				}}
			/>
			<EnrollButton>Записаться</EnrollButton>
		</>
	)
}
