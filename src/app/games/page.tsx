import NextImage from 'next/image'

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
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import Image1 from '@/images/games/content-1.webp'
import MoneyCardImage from '@/images/games/money.webp'
import PreviewImage from '@/images/games/preview.webp'
import SexualityCardImage from '@/images/games/sexuality.webp'
import { type IImage } from '@/types'

const title = 'Трансформационные психологические игры'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Games() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<Title>Что такой трансформационные психологические игры и для чего в них играть?</Title>
				<p>
					Цель каждой игры – найти вопрос на свой ответ. Вопросы могут быть разные: В чем мое
					предназначение? Как мне заработать денег? Когда я встречу мужчину? и т.д. Главное, чтобы
					игрок был сам заинтересован в поиске ответа на свой вопрос.
				</p>
				<p>
					И с помощью игры происходит процесс, сравнимый со сборкой пазла: из разрозненных кусочков
					складывается единая картина, и если не целиком, то с ясностью, каких деталей не хватает.
					Решая свои вопросы, мы привыкли опираться на ту картину мира, к которой привыкли. Это с
					одной стороны хорошо, ведь в постоянстве проявляются убеждения и ценности. Но вместе с
					тем, это мешает и ограничивает увидеть то, что находится за этими границами. А ведь ответы
					и решения видны не сразу – скорее всего, они лежат там, куда еще не заглядывали. Так вот
					игра, позволяет легко и с задором заглянуть в эти места.
				</p>
				<p>
					Игра - это универсальный инструмент, так как в ее пространстве можно все! Игровое поле –
					это карта другого мира, в котором можно изменить себя, можно представлять («а что,
					если…»), смотреть с таких точек зрения, с каких никогда не посмотрели бы. И главное, это
					понарошку! А понарошку, значит не всерьез, значит не страшно, значит можно включить азарт
					и расслабиться. А в этом состоянии эффективность работы увеличивается в разы! А еще, у вас
					есть возможность увидеть, как справляются в таких же ситуациях другие участники. Это
					всегда интересно!
				</p>
				<p>
					Знаете, в игры лучше играть, чем про них рассказывать! Ведь у многих есть неразрешенные
					вопросы.
				</p>
				<p>Приходите играть, получать ответы на важные вопросы и создавать свой сценарий Жизни!</p>
				<NextImage
					className={styles.image}
					src={Image1}
					alt=''
					quality={100}
					placeholder='blur'
				/>
				<p>
					Игра длится <span>3-4 часа,</span> и это время пролетает как ураган!
				</p>
				<p>
					Количество участников – <span>от 2 до 7 человек.</span>
				</p>
				<p>
					Стоимость участия в игре – <span>2800 руб.</span>
				</p>
			</Text>

			<LinkCards
				cards={linkCardsData}
				heading={'Игры, в которые мы с удовольствием с вами поиграем:'}
			/>
		</Wrapper>
	)
}
const linksPrefix = '/games/'

const linkCardsData: ILinkCardProps[] = [
	{
		href: `${linksPrefix}money`,
		label: 'Территория денег',
		image: {
			imageData: MoneyCardImage,
			alt: ''
		}
	},
	{
		href: `${linksPrefix}sexuality`,
		label: 'Сексуальность – энергия жизни',
		image: {
			imageData: SexualityCardImage,
			alt: ''
		}
	}
]
