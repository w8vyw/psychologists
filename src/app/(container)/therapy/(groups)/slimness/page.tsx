import NextImage from 'next/image'

import styles from './page.module.scss'

import { type IImage } from '@/types/global'

import { Heading } from '@/ui/heading/Heading'
import { Message } from '@/ui/message/Message'
import { Slogan } from '@/ui/slogan/Slogan'
import { Text } from '@/ui/text/Text'
import { Title } from '@/ui/title/Title'

import { EnumListStyle, List } from '@/shared/list/List'
import { PreviewImages } from '@/shared/preview-images/PreviewImages'
import { ProductCard } from '@/shared/product-card/ProductCard'

import ContentImage1 from '@/images/therapy/slimness/content/1.webp'
import ContentImage2 from '@/images/therapy/slimness/content/2.webp'
import PreviewImage from '@/images/therapy/slimness/preview.webp'
import CardImage from '@/images/therapy/slimness/product-card.webp'

const title = 'Счастливая стройность'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Slimness() {
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
				<Title>Кому подходит:</Title>
				<p>
					Психотерапевтическая группа «Счастливая стройность» для тех, кто хочет разобраться с
					психологическими проблемами лишнего веса, а соответственно, постройнеть и наладить свои
					взаимоотношения с едой, обрести контакт с телом.
				</p>
				<p>
					Подходит всем желающим избавиться от лишнего веса и разрешить свои трудности, мешающие
					этому. Тем, кому уже надоело сидеть на разных диетах, а потом опять набирать лишние
					килограммы. Тем, кто уже занимался проблемами своего избыточного веса. Кто впервые
					задумался об этой проблеме. Тем, кто работал над снижением своего веса и, не достигнув
					желаемого результата, вес встал и больше не снижается. И тем, кто уже все перепробовал и
					отчаялся стать стройным. Тем, кто хочет изменить пищевое поведение.
				</p>
				<p>
					Я Вам не буду рассказывать о том, как питаться правильно и какие делать физические
					упражнения. Все проблемы – у нас в голове. Наши страхи, манера поведения, неуверенность в
					себе и, конечно же, лишний вес – всё это результат работы подсознания, следствие того, что
					в нем прописано. Поэтому для эффективной коррекции веса недостаточно просто придерживаться
					правильного сбалансированного рациона и регулярно тренироваться – тут важно разобраться в
					себе и изменить свое мышление.
				</p>
			</Text>
			<div className={styles.lists}>
				<List
					className={styles.list}
					heading='Психологических причин лишнего веса, расстройства пищевого поведения может быть великое
					множество. Вот некоторые из них:'
					items={{
						column1: [
							'Низкий уровень стрессоустойчивости, обидчивость. Вас угнетают конфликты на работе, в семье, с близкими, вы долго от них восстанавливаетесь. Часто не можете успокоиться после напряженного дня.',
							'Систематическое подавление своих потребностей и желаний. Зачастую действуете в угоду другим, ставя себя на последнее место или вовсе не считаясь с собой.',
							'Многочисленные страхи и тревоги. Еда для успокоения, когда чувствуете, что за кого-то или по поводу чего-то сильно переживаете. Ограничения в питании только усиливают вашу тревогу и приводят к срывам.',
							'Неуверенность в себе, сложно отказывать другим. Поэтому часто едите за компанию, решаете вопросы за едой. Вы предпочитаете скрывать тот факт, что решили сбросить вес, поэтому на людях позволяете себе есть то, что они от вас ожидают.'
						]
					}}
				/>
				<List
					className={styles.list}
					items={{
						column1: [
							'Часто ругаете себя за съеденное.',
							'Чувство одиночества.',
							'Многочисленные внутриличностные конфликты, сложности с принятием решений.',
							'Размытые личностные границы, неспособность обозначить их и отстоять.',
							'Вам сложно даются любые перемены в жизни.'
						],
						column2: [
							'Равнодушное отношение к своему здоровью и телу.',
							'Вы считаете, что успешные люди должны выглядеть солидно и весомо.',
							'Вы часто перекладываете ответственность за свои поступки на других людей или, наоборот, берете ответственность за других людей на себя.',
							'Не позволяете себе воплощение ваших планов в жизнь пока не сбросите вес.'
						]
					}}
				/>
			</div>
			<List
				className={styles.list}
				heading='В психотерапевтической группе «Счастливая стройность» Вы сможете:'
				items={{
					column1: [
						'Выяснить, чем является для Вас еда',
						'Понять особенности Вашего пищевого поведения',
						'Увидеть и осознать, что именно Вы заедаете'
					],
					column2: [
						'Научиться разделять голод и аппетит',
						'Освободиться от закоренелых негативных эмоциональных состояний и чувств',
						'Начать двигаться в сторону снижения веса безопасным образом'
					]
				}}
			/>
			<Message className={styles.message}>
				Нашей основной задачей будет найти Ваши психологические причины расстройства пищевого
				поведения, лишнего веса и разрешить их.
			</Message>
			<List
				heading='После прохождения данной терапевтической работы Вы:'
				listStyle={EnumListStyle.Ticks}
				items={{
					column1: [
						'Избавитесь от старых привычек мышления и питания!',
						'У Вас появится уверенность в себе!',
						'Научитесь правильно общаться с собой и слушать себя, находить и использовать свои жизненные ресурсы!',
						'Вернете себе силы, избавившись от хронической усталости и стресса!',
						'Научитесь «жить вперед», благодаря прежнему опыту и взяв из него только самое важное!',
						'Измените модель своего поведения: сможете делать то, что хочется и в чем есть реальная потребность!'
					],
					column2: [
						'Будете распознавать потребности своего тела!',
						'Освободитесь от страхов, деструктивных установок и разрушительных стереотипов, которые мешали Вам стройнеть и радоваться жизни!',
						'Станете легкими и энергичными, поэтому будет больше жизненных открытий, появятся новые перспективы! Вы обретете лучшую версию своего тела и своей жизни!',
						'Улучшите свое эмоциональное состояние!'
					]
				}}
			/>
			<div className={styles.imagesBlock}>
				<NextImage
					className={styles.image}
					src={ContentImage1}
					alt={''}
					quality={100}
					placeholder='blur'
				/>
				<NextImage
					className={styles.image}
					src={ContentImage2}
					alt={''}
					quality={100}
					placeholder='blur'
				/>
			</div>
			<Slogan className={styles.slogan}>
				Вы приняли решение избавиться от лишнего веса, начинайте прямо сегодня! Делайте выбор в
				пользу своей счастливой стройности и благополучия! Вы обретете лучшую версию своего тела и
				своей жизни!
			</Slogan>
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
							online: 2500,
							offline: 3500
						}
					}
				}}
			/>
		</>
	)
}
