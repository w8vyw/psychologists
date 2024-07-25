import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import PreviewImage from '@/images/games/money/preview.webp'
import { type IImage } from '@/types'

const title = 'Территория денег – стань денежным магнитом'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Money() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<p>Игра позволяет проработать запросы на тему денег, финансов, процветания.</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Возможные запросы:</Title>
				<List
					items={{
						column1: [
							'Как мне выйти на определенную сумму дохода?',
							'Какие установки, программы ограничивают приток денег в мою жизнь?',
							'Что мешает/поможет получать мне деньги из определенного источника (бизнес, человек)?',
							'Какие действия необходимо предпринять для достижения желаемого дохода? И т.д.'
						]
					}}
				/>
			</Section>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Игра помогает:</Title>
				<List
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
			</Section>
		</Wrapper>
	)
}
