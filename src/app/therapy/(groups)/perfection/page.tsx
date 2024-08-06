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

import PreviewImage from '@/images/therapy/emotions/preview.webp'
import CardImage from '@/images/therapy/emotions/product-card.webp'

const title = 'Счастливое совершенство'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Perfection() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
					title: title,
					subtitle: 'Арт-терапевтический тренинг'
				}}
			/>
			<Text className={styles.text}>
				<p>
					Зависимость в определенных жизненных ситуациях – явление вполне здоровое, нормальное, даже
					необходимое. Зависимость мамы и младенца, наша зависимость от кислорода, воды и многое
					другое.
				</p>
				<p>
					Зависимость здорова и хороша только тогда, когда она занимает нашей природой отведенное
					место. Но здоровая зависимость часто перерастает в принципиально иное, болезненное и
					разрушительное состояние. Например, когда ребенок вырастает, превращается во взрослого, а
					родитель его не отпускает. Или, наоборот, он сам не может отделиться от родителей,
					отношения становятся невыносимыми для обеих сторон.
				</p>
				<p>
					Также, когда влюбленность, приводя к браку, превращается во взаимное рабовладение,
					семейная атмосфера становится болезненной, порождая неврозы. Точно также, когда человек
					злоупотребляет химическими веществами, играми, покупками, гаджетами, едой и т.д., он
					наносит ущерб не только себе, но и другим людям, теряя взаимопонимание, доверие, баланс,
					при этом взамен получая боль и разочарование{' '}
				</p>
				<p>
					Зависимость – явление сложнейшее, комплексное, системное. Зависимость, с одной стороны,
					возникает как результат жизненной системы, с другой стороны деформирует и
					переструктурирует систему жизни.
				</p>
			</Text>
			<Text>
				<Title>Для зависимости характерны правила:</Title>
				<p>
					❌ Не доверяй <br />
					Если мама говорит тебе, что ты можешь ей довериться и все рассказать — не вздумай! Твои
					жалкие проблемы и глупые желания будет обсуждать не только вся семья.
				</p>
				<p>
					❌ Не чувствуй <br />
					Не нравится что-то? Терпи и молчи, твои потребности никого не волнуют. Громко радуешься?
					Лучше делай это незаметно или не делай вовсе, если не хочешь потом плакать.
				</p>
				<p>
					❌ Не говори <br />
					Зачем говорить о своих потребностях прямо, если есть намеки, иносказания и манипуляции?
					Если у тебя есть просьбы и желания, лучше оставь их при себе.
				</p>
			</Text>
			<Text>
				<Title>Зависимость можно заподозрить, если Вы:</Title>
				<p>
					- Боитесь обидеть другого человека.
					<br />
					- Склонны брать на себя ответственность за чувства и/или поведение других людей. Ощущение
					себя виноватым, должным.
					<br />
					- Болезненно воспринимаете критику.
					<br />
					- Ругаете себя за ошибки, за не так сделанное, не то съеденное. - Часто жалеете о
					сказанном/невысказанном.
					<br />
					- Подстраивайтесь и пытаетесь угадать чувства другого человека прежде чем что-то сказать
					или о чем-то попросить.
					<br />
					- Расстраивайтесь, что другие люди поступают не так как вам хочется. Что они вас не
					понимают.
					<br />
					- Не умеете конструктивно выражать свои чувства.
					<br />
					- Постоянная борьба, тревога и напряжение внутри вас.
					<br />
					- Считаете, что лучше сделать самой, чем просить кого-то.
					<br />
					- Стараетесь быть хорошей. Ставите желания и потребности других людей на первый план.
					Действуете вопреки своим желаниям.
					<br />
					- Трудно принимаете решения. Полагаетесь на мнения других людей.
					<br />
					- Сложно эффективно распоряжаться деньгами. Жалко тратить деньги на себя.
					<br />
					- Утешаете себя едой, алкоголем, сигаретами, покупками.
					<br />
					- Сложно держать свой вес, аппетит.
					<br />
					- Подвергаетесь контролю или стремитесь контролировать. <br />
					- Вам надо всегда знать о других, что с ними происходит. <br />
					- Часто чувствуете, что о вас думают плохо, даже когда человек мне об этом не говорит.
					<br />
					- Не отдыхаете даже в выходной день. Постоянно ощущаете, что вам нужно что-то делать.
					<br />
					- Хотите перестать делать в угоду другим и начать жить для себя, а не получается.
					<br />- Не прислушиваетесь к себе, не понимаете свои чувства, не обращаете внимание на
					подсказки своего тела.
				</p>
				<p>
					Специально для вас мы создали уникальный арт - терапевтический тренинг «Счастливое
					совершенство». Где мы с вами будем: Разбираться с вашими затруднениями, повышая
					собственную самоценность. Избавляться от деструктивных программ и ограничений,
					совершенствуя себя. Очищаться от всех негативных установок, нормализуя эмоциональный фон.
					Становиться уверенной и независимой, просто рисуя. Укреплять личные границы, расширяя
					мышление. Арт-терапия – это метод работы с нашей бессознательной частью через рисунок.
					Препятствия к счастью, независимости, самоценности скрываются именно в вашем
					бессознательном. Здесь неважно, как вы рисуете, хорошо или нет. Основная задача –
					заглянуть в себя и привести в гармонию и целостность. Программа тренинга: Диагностика
					личностных качеств и самооценки. Диагностика внутренних и внешних взаимоотношений.
					Определение желаемых изменений. Проработка стрессовых ситуаций. Повышение
					стрессоустойчивости. Разблокировка мышления и восприятия. Поиск и восстановление
					ресурсности и силы. Работа с эмоциональной сферой. Проработка негативных чувств. Снятие
					ограничений. Обретение целостности и гармонии.
				</p>
			</Text>
			<List
				heading='По итогу тренинга Вы:'
				listStyle={EnumListStyle.Ticks}
				items={{
					column1: [
						'Без стеснения сможете отстаивать своё собственное мнение',
						'Отпустите обиды, тревоги, печали',
						'Расстанетесь с деструктивными программами',
						'Разберётесь со своими трудностями и стрессовыми ситуациями',
						'Познаете себя и научитесь слышать себя'
					],
					column2: [
						'Придёте к целостности и гармонии с собой',
						'Обретёте ресурсное состояние, энергию, лёгкость, устойчивость, свободу и уверенность',
						'Повысите собственную самоценность и значимость'
					]
				}}
			/>
			<Slogan className={styles.mb}>
				Сделай красивым свое настоящее,
				<br />
				Тогда твое будущее будет прекрасным!
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
						maxCapacity: 10,
						sessionDuration: '1.5ч / x2 в неделю',
						groupDuration: '10 занятий',
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
