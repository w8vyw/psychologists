import NextImage from 'next/image'

import styles from './page.module.scss'

import { type IImage } from '@/types/global'

import { Heading } from '@/ui/heading/Heading'
import { Text } from '@/ui/text/Text'
import { Title } from '@/ui/title/Title'

import { EnrollButton } from '@/shared/enroll-button/EnrollButton'
import { EnumListStyle, List } from '@/shared/list/List'
import { PreviewImages } from '@/shared/preview-images/PreviewImages'

import ContentImage1 from '@/images/training/content/1.webp'
import ContentImage2 from '@/images/training/content/2.webp'
import PreviewImage1 from '@/images/training/preview/1.webp'
import PreviewImage2 from '@/images/training/preview/2.webp'

const title = 'Город желаний'

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

export default function Trainings() {
	return (
		<>
			<PreviewImages images={previewImages} />
			<Heading
				data={{
					title: title,
					subtitle: 'Тренинг'
				}}
			/>
			<Text className={styles.text}>
				<p>
					Согласитесь, вокруг столько дел, что порой не хватает времени даже на себя. Именно поэтому
					вам жизненно необходимо набраться сил, пополнить ресурсы, прокачать свои важные качества и
					просто улучшить настроение, чтобы обновить и расширить свои возможности, открыть для себя
					новые идеи и способы достижения поставленных целей. Каждому хочется найти тот период,
					когда самым чудесным образом сбываются наши желания, осуществляются мечты. В любой
					жизненный период наша энергия способна принести в жизнь колоссальные изменения, которые
					человек только может запросить. Главное, открыть в себе этот поток энергии, высвободить
					его и направить на реализацию задуманного!
				</p>
				<p>
					Мы приглашаем вас на уникальный тренинг «Город желаний». Пройдя который вы начнете
					притягивать желаемое в свою жизнь, усилив все свои необходимые качества. Тренинг состоит
					из 2х частей.
				</p>
			</Text>
			<Text className={styles.textWithImage}>
				<Title>1я часть:</Title>
				<div>
					<p>
						Интереснейшая и увлекательная психологическая игра «Мафия», из которой вы возьмете для
						себя много полезного и практически отработаете свои всесторонне важные навыки.
					</p>
					<NextImage
						className={styles.image}
						src={ContentImage1}
						alt=''
						placeholder='blur'
					/>
				</div>
			</Text>
			<List
				heading='Игра развивает и усиливает:'
				items={{
					column1: [
						'Умение убеждать',
						'Актёрские способности',
						'Способности к вербальному и невербальному общению',
						'Логику, умение выбирать стратегию и тактику, гибкость мышления',
						'Стрессоустойчивость, способность не поддаваться общественному мнению и мнению большинства'
					],
					column2: [
						'Дедукцию, аналитическое мышление',
						'Память',
						'Интуицию',
						'Умение отличать правду ото лжи по жестам, мимике и другим подсознательным сигналам'
					]
				}}
			/>
			<Text className={styles.textWithImage}>
				<Title>2я часть:</Title>
				<div>
					<p>
						Кажется, что Вселенная, порой, будто не слышит ваших желаний и не даёт никаких
						возможностей для их исполнения. А кто-то боится желать, так как не верит, что это может
						исполниться. Или желания исполняются не у вас, а у других. Например, загадала
						автомобиль, а купила его подруга или захотела выйти замуж, а под венец пошла сестра.
					</p>
					<NextImage
						className={styles.image}
						src={ContentImage2}
						alt=''
						placeholder='blur'
					/>
				</div>
			</Text>
			<List
				heading='На технологии исполнения желаний вы:'
				listStyle={EnumListStyle.Ticks}
				items={{
					column1: [
						'Освоите секреты постановки желаний',
						'Избавитесь от накопившегося негатива',
						'Проверите свои желания на подлинность',
						'Разрешите себе желать'
					],
					column2: [
						'Освободите свое пространство для следующих целей и желаний',
						'Откроете новую ресурсную энергию',
						'Сформулируете свои желания таким образом, чтобы они исполнялись',
						'Запустите процесс исполнения желаний'
					]
				}}
			/>
			<Text>
				<p>
					Ведущие тренинга – квалифицированные практикующие психологи, обладающие большим уникальным
					опытом работы и мастерством в своем деле – Ирина Панкова и Оксана Поселеннова.
				</p>
				<div>
					<p>
						Длительность тренинга – <span>5-6 часов.</span>
					</p>
					<p>
						Стоимость – <span>6500 рублей.</span>
					</p>
				</div>
				<p>Количество мест ограничено!</p>
				<div>
					<p>Сделайте шаг навстречу вашим желаниям!</p>
					<p>И их исполнение не заставит себя долго ждать!</p>
				</div>
			</Text>
			<EnrollButton>Записаться</EnrollButton>
		</>
	)
}
