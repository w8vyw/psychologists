import { type Metadata } from 'next'

import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { Message } from '@/components/ui/message/Message'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import PreviewImage1 from '@/images/coaching-1.webp'
import PreviewImage2 from '@/images/coaching-2.webp'
import { type IImage } from '@/types'

const title = 'Коучинг'

const previewImages: [IImage, IImage] = [
	{
		imageData: PreviewImage1,
		alt: ''
	},
	{
		imageData: PreviewImage2,
		alt: ''
	}
]

export default function Coaching() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<Title>Что такое коучинг?</Title>
				<p>
					Коучинг – это сотрудничество коуча и клиента, направленное на достижение цели последнего,
					при чем, заявленные цели превышают его теперешние возможности и не могут быть достигнуты с
					помощью привычных стратегий поведения.
				</p>
				<p>
					В коучинге фокус на будущее. В психотерапии фокус на прошлое, избавление от травм, которые
					мешают двигаться вперед.
				</p>
				<p>
					Наши личные сложности – комплексы, ограничения, страхи влияют на то, как мы себя ведем и
					какие результаты получаем. Клиент, работая с коучем над задачей, учится осознавать, что
					его ограничивает. Начинает действовать по-другому и получает новые результаты.
				</p>
				<p>
					Коучинг наполнен техниками, практиками, основанными на научных опытах о работе
					человеческого мозга, обучении и развитии взрослых людей.
				</p>
				<p>
					Иными словами, коучинг – это регулярные, структурированные и конфиденциальные беседы между
					коучем и клиентом, целью которых является достижение конкретных результатов, желаемых
					клиентом.
				</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Чаще всего к коучам обращаются, чтобы:</Title>
				<List
					items={{
						column1: [
							'Улучшить личную жизнь, найти подходящего партнера',
							'Развить лидерские качества',
							'Научиться свободно и уверенно общаться с людьми',
							'Найти прибыльную идею и открыть свой бизнес'
						],
						column2: [
							'Раскрыть творческий потенциал и найти дело по душе',
							'Решить проблему постоянной нехватки времени',
							'Станете понимать лучше себя, соответственно, и других.',
							'Больше зарабатывать и правильно распределять финансы',
							'Быть более эффективным в профессиональной жизни'
						]
					}}
				/>
			</Section>
			<Text>
				<p>
					Длительность коучинговой сессии — <span>60 минут.</span>
				</p>
				<p>
					Стоимость индивидуальной коуч-сессии — <span>3 900 рублей.</span>
				</p>
			</Text>
		</Wrapper>
	)
}
