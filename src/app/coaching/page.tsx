import styles from './page.module.scss'

import { type IImage } from '@/types'

import { Heading } from '@/ui/heading/Heading'
import { Text } from '@/ui/text/Text'

import { EnrollButton } from '@/shared/enroll-button/EnrollButton'
import { List } from '@/shared/list/List'

import { PreviewImages } from '@/components/shared/preview-images/PreviewImages'
import { Title } from '@/components/ui/title/Title'

import PreviewImage1 from '@/images/coaching/preview/1.webp'
import PreviewImage2 from '@/images/coaching/preview/2.webp'

const title = 'Коучинг'

const previewImages: [IImage, IImage] = [
	{
		imageData: PreviewImage1,
		alt: 'Ирина'
	},
	{
		imageData: PreviewImage2,
		alt: 'Оксана'
	}
]

export default function Coaching() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
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
			<List
				heading='Чаще всего к коучам обращаются, чтобы:'
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
			<Text>
				<div>
					<p>
						Длительность коучинговой сессии — <span>60 минут.</span>
					</p>
					<p>
						Стоимость индивидуальной коуч-сессии — <span>3 900 рублей.</span>
					</p>
				</div>
			</Text>
			<EnrollButton>Записаться</EnrollButton>
		</>
	)
}
