import styles from './page.module.scss'

import { type IImage } from '@/types'

import { Heading } from '@/ui/heading/Heading'
import { Message } from '@/ui/message/Message'
import { Section } from '@/ui/section/Section'
import { Text } from '@/ui/text/Text'
import { Title } from '@/ui/title/Title'

import { EnumListStyle, List } from '@/shared/list/List'
import { PreviewImages } from '@/shared/preview-images/PreviewImages'

import PreviewImage from '@/images/therapy/girls/preview.webp'
import CardImage from '@/images/therapy/girls/product-card.webp'

import { ProductCard } from '../../../components/shared/product-card/ProductCard'

const title = 'Между нами девочками'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Girls() {
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
				<Title>О группе</Title>
				<p>
					Желаете повысить свою стрессоустойчивость? Хотите размотать клубок проблем, который
					скопился? Прийти к новым осознаниям? Решить свои трудности? Разобраться в себе и найти
					выход? Наладить отношения?
				</p>
				<p>
					В женской группе «Между нами девочками» под руководством опытного квалифицированного
					психолога Вы сможете в непринужденной, теплой, доверительной и легкой атмосфере решать
					одну за другой свои проблемы, при поддержки других людей.
				</p>
				<p>
					Эта психотерапевтическая группа для всех, кто хочет разобраться с накопившимися
					проблемами, наработать стрессоустойчивость и решить свои запросы! Зачастую каждая женщина
					очень обеспокоена мыслями о том, что никто больше так не мучается как она, что только она
					одна испытывает такие страхи и сомнения, только у неё одной такие проблемы и трудности, у
					неё одной постоянный, непрекращающийся поток тревожащих мыслей.
				</p>
				<p>
					В группе «Между нами девочками», каждая женщина понимает, что может здесь найти поддержку,
					что она не одинока в своих страданиях. И тогда она открывается для окружающего мира и
					начинается процесс выхода на новый уровень осознанности и поиска заблокированной
					ресурсности.
				</p>
				<p>
					Ведь хочется не только обсудить проблемы с лучшей подругой, но и решить их! В женской
					группе вы имеете уникальную возможность говорить о своих проблемах открыто, честно и
					безопасно, получать обратную связь и психологическую пользу. Также, проработав свои
					затруднения, вы сможете решить свои сложности. Мы не будем работать в рамках какой-то
					одной темы. Мы будем затрагивать и решать разнообразные волнующие Вас вопросы. Групповое
					взаимодействие поможет перейти в другое качество общения и обрести собственную
					устойчивость. Эта группа для тех, кому необходима поддержка и разрешение трудностей в
					различных аспектах жизни.
				</p>
			</Text>
			<List
				heading='	В ходе прохождения групповой психотерапевтической работы Вы:'
				listStyle={EnumListStyle.Ticks}
				items={{
					column1: [
						'Научитесь противостоять стрессу и тревогам.',
						'Увидите под другим углом свою жизненную ситуацию.',
						'Сможете говорить «нет» и обозначать свои личные границы.',
						'Перестанете застревать на негативных мыслях.',
						'Сможете легко и просто, без оглядки на других высказывать свое мнение.',
						'Осознаете свои истинные желания и потребности.'
					],
					column2: [
						'Обретёте уверенность и душевный покой.',
						'Освоите проработки своих чувств и эмоций.',
						'Станете понимать лучше себя, соответственно, и других.',
						'Сможете делать так, чтобы было меньше раздражения и усталости, а больше жизненной энергии.',
						'Обретёте гармонию с собой, с окружающими, с миром.',
						'Откроете новые грани себя.'
					]
				}}
			/>
			<Message className={styles.message}>
				Проработав свои затруднения, вам откроются новые возможности на пути к вашим достижениям!
			</Message>
			<Text>
				Зачастую, когда женщина обращается за советом к подругам или родственникам, каждый из них
				дает совет через призму собственного восприятия ситуации и, естественно, что никто из
				близких не учитывает возможности, способности, опыт данной женщины. И поэтому ей так трудно,
				а иногда просто невозможно воспользоваться данным советом, он оказывается неприменим именно
				к ней. В группе советов давать никто не будет, но при этом каждая женщина сможет найти и
				взять для себя то, что ей подходит, что применимо и выполнимо именно для неё. Проработать
				себя и разобраться в себе таким образом, чтобы видеть многочисленные выходы из ситуаций и
				многообразие подходов к решению поставленных ей же самой, задач.
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
						sessionDuration: '2ч / x1 в неделю',
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
