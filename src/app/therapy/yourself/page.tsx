import styles from './page.module.scss'

import { type IImage } from '@/types'

import { Heading } from '@/ui/heading/Heading'
import { Message } from '@/ui/message/Message'
import { Text } from '@/ui/text/Text'

import { EnumListStyle, List } from '@/shared/list/List'
import { PreviewImages } from '@/shared/preview-images/PreviewImages'
import { ProductCard } from '@/shared/product-card/ProductCard'

import PreviewImage from '@/images/therapy/yourself/preview.webp'
import CardImage from '@/images/therapy/yourself/product-card.webp'

const title = 'Обретая себя'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Yourself() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
					title: title,
					subtitle: 'Групповая психотерапия'
				}}
			/>
			<Text className={styles.text}>
				<p>
					При химической зависимости организм человека ради получения удовольствия искусственно
					стимулируется различными препаратами. Алкоголь или наркотик становится главным в жизни
					зависимого человека, и вся жизнь подстраивается под употребление. Зависимый обвиняет всех
					вокруг, защищая свое употребление. Человек убежден, что сможет победить зависимость сам,
					отказывается верить в то, что у него проблемы с употреблением, либо продолжает бороться
					самостоятельно, но не справляясь со своими душевными муками, опять начинает употребление.
				</p>
				<p>
					Зависимый приходит к выводу, что у него все будет хорошо, просто надо не употреблять, чем
					ставит себе непосильную задачу, так как проблемы и трудности лежат гораздо глубже.
					Употребление – это симптом, убрав который зависимому человеку становится ужасно
					невыносимо. Зависимый не представляет свою жизнь без употребления психоактивных веществ,
					которые создают иллюзию облегчения. И рано или поздно употребление опять возобновится.
				</p>
				<p>
					Поэтому важно разбираться с психологическими причинами и решать их. Невыносимые
					психологические и душевные страдания зависимого приводят к употреблению алкоголя,
					наркотиков, после употребления наступает раскаяние, чувство вины с обещаниями себе и
					другим больше никогда не употреблять, но мучения и терзания вновь приводят к употреблению.
					Замкнутый круг, который самому зависимому человеку разорвать оказывается непосильным.
					Невозможно прекратить употребление и жить полноценной жизнью, не разобравшись в себе и не
					обретя себя.
				</p>
				<p>
					Специально для Вас открыта психотерапевтическая онлайн группа «Обретая себя», где вы
					сможете с помощью группы людей, испытывающих такие же проблемы, под руководством
					квалифицированного психолога в безопасной, конфиденциальной и доверительной атмосфере
					разобраться в себе, решить свои трудности, выйти на новый уровень жизни без употребления
					химических веществ, так как вам это станет не нужно и не интересно. Психотерапевтическая
					группа – это то место, где каждый получает понимание, поддержку и заботу! Также, благодаря
					проработке эмоциональной сферы, вы откроете то изобилие чувств, которое в вас есть, но
					употреблением хим. веществ они были подавлены и заморожены, жизнь заиграет новыми
					потрясающими и здоровыми красками, а не тем однообразием и серостью, которое есть в жизни
					каждого зависимого.
				</p>
			</Text>
			<List
				heading='В ходе прохождения групповой психотерапевтической работы Вы:'
				listStyle={EnumListStyle.Ticks}
				items={{
					column1: [
						'Вы обретете желание жить по-новому!',
						'Вы избавитесь от шаблонных привычек мышления!',
						'Наладятся взаимоотношения с родными и близкими!',
						'Освободитесь от старых обид!'
					],
					column2: [
						'Сможете избавиться от постоянной борьбы и контроля!',
						'Начнете жить, руководствуясь общечеловеческими принципами!',
						'Вы получите личностное развитие и вновь обретете себя!'
					]
				}}
			/>
			<Message className={styles.message}>
				Остановить прием алкоголя и наркотиков сложная, но посильная задача, гораздо труднее
				оставаться трезвым и чистым на протяжении всей жизни и быть счастливым.
			</Message>
			<Text>
				Начните прямо сегодня! Делайте выбор в пользу своей здоровой, благополучной и свободной
				жизни!
			</Text>
			<ProductCard
				product={{
					image: {
						imageData: CardImage,
						alt: ''
					},
					name: title,
					active: true,
					specs: {
						age: '+18',
						maxCapacity: 7,
						minSessions: 12,
						sessionDuration: '2ч / x2 в неделю',
						groupDuration: 'долгосрочно',
						price: {
							online: 1500,
							offline: 2500
						}
					}
				}}
			/>
		</>
	)
}
