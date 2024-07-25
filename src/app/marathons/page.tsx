import NextImage from 'next/image'

import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { Message } from '@/components/ui/message/Message'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import Image1 from '@/images/marathons-2.webp'
import PreviewImage from '@/images/marathons.webp'
import { type IImage } from '@/types'

const title = 'Моё счастливое тело'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Marathons() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title,
					subtitle: 'Онлайн марафон'
				}}
			/>
			<Text className={styles.text}>
				<p>
					Этот марафон для всех, кому хочется сбросить вес, постройнеть, прийти к осознанному
					питанию, самосовершенствоваться. Для всех, кто хочет двигаться; научиться слышать и
					слушать свое тело; поднять уровень энергии; оздоровить мозг и тело; высвободить свой
					внутренний потенциал; у кого есть какие-то затруднения во взаимоотношениях с едой.
				</p>
				<p>
					В общем, марафон подходит для всех, желающих постройнеть и стать счастливее и свободнее;
					научиться договариваться со своим телом для стройности, для физического здоровья, энергии,
					красоты и молодости.
				</p>
				<p>
					На марафоне мы с вами не только будем разбираться с тем, что стоит на пути к вашей
					стройной фигуре, но и работать с этим; приходить к целостности и гармонии со своим
					счастливым телом. Ограничений по прохождению марафона нет. Я вам не буду рассказывать о
					том, как и чем питаться правильно, потому что все уже давно это знают. Поэтому мы будем
					работать с психологической составляющей, а именно с головой, так как большинство причин
					лишнего веса находятся в нашей голове. Тем не менее в групповом чате вы сможете делиться
					друг с другом предпочтениями по питанию, советами, рецептами и т.д. И каждый сможет для
					себя взять то, что ему по душе.
				</p>
				<p>
					Марафон называется «Счастливое тело», как думаете, почему? Вы знаете, я против насилия, в
					том числе над телом, и в том числе над своим организмом. Да и когда мы делаем то, что нам
					приятно, то, что нам хорошо и полезно, мы от этого становимся счастливее и легче.
					Психологические задания, подготовленные мной для вас, не требуют каких-то изнурительных
					страданий, вы сможете их выполнять в непринужденной форме. Вам они будут исключительно
					полезны и интересны, так как вы будете постоянно открывать в себе и для себя что-то новое,
					изучая себя, свой организм и создавая лучшую версию себя и своего тела.
				</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Что даст Вам марафон:</Title>
				<div>
					<List
						items={{
							column1: [
								'Лучшее понимание себя, своих чувств и своего тела',
								'Вы начнете двигаться в сторону снижения веса, и в принципе начнете двигаться',
								'Вы будете обретать комфортное тело и изящные формы',
								'Вы станете свободнее и легче',
								'Вы станете свободнее и легче',
								'Ваша жизнь заиграет новыми красками',
								'Вы станете более раскрепощенными, уверенными и привлекательными'
							]
						}}
					/>
					<NextImage
						className={styles.image}
						src={Image1}
						alt=''
						quality={100}
						placeholder='blur'
					/>
				</div>
			</Section>
			<Text>
				<p>
					3 недели или 21 день (именно за это время можно сформировать новые полезные привычки).
					Общая стоимость <span>8000 рублей.</span> Приглашайте подругу или друга, знакомую, коллегу
					и тогда для вас стоимость в полцены, двое за одну цену, то есть цена для каждого
					<span>4000 рублей.</span>
				</p>
				<p>
					Стоимость марафона для участников с индивидуальным сопровождением: с проверкой домашних
					заданий, с получением обратной связи - <span>15000 рублей.</span>
				</p>
			</Text>
			<Text>
				<Title>Что входит:</Title>
				<p>
					В марафоне ежедневно мы с вами будем выполнять разные психологические наикрутейшие
					задания, без воды и разводов, четкие и понятные, с одной стороны простые, с другой стороны
					очень глубокие. Раз в неделю мы с вами встречаемся онлайн и обсуждаем, что получилось, что
					не получилось, чтобы ещё хотелось прокачать, чтобы стать лучшей версией себя. 1 день в
					неделю на ваши доработки.
				</p>
				<p>
					Возраст участников: <span>18+</span>
				</p>
				<p>
					В рамках участия в марафоне, по желанию, предусмотрены индивидуальные консультации по
					решению личностных проблем по специальной цене <span>3500 рублей</span> – 1 консультация.
				</p>
			</Text>
			<Message>
				Вы приняли решение избавиться от лишнего веса! Начинайте прямо сегодня! Делайте выбор в
				пользу своей счастливой стройности и гармонии!
			</Message>
		</Wrapper>
	)
}
