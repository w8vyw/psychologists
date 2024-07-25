import styles from './page.module.scss'

import { Heading } from '@/components/ui/heading/Heading'
import { List } from '@/components/ui/list/List'
import { PreviewImages } from '@/components/ui/preview-images/PreviewImages'
import { Section } from '@/components/ui/section/Section'
import { Text } from '@/components/ui/text/Text'
import { Title } from '@/components/ui/title/Title'
import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import PreviewImage from '@/images/arrangements.webp'
import { type IImage } from '@/types'

const title = 'Расстановки'

const previewImages: [IImage] = [
	{
		imageData: PreviewImage,
		alt: ''
	}
]

export default function Arrangements() {
	return (
		<Wrapper>
			<PreviewImages images={previewImages} />
			<Heading
				headingContent={{
					title: title
				}}
			/>
			<Text className={styles.text}>
				<p>
					Метод системных расстановок является одним из наиболее эффективных быстродействующих
					современных психотерапевтических методов, эффективность которого неоднократно подтверждена
					на практике. Этот метод за один сеанс позволяет решить глубокие личностные проблемы
					человека. Данный метод помогает посмотреть на себя с системной точки зрения и увидеть
					бессознательные динамики, мешающие строить собственную жизнь.
				</p>
				<p>
					Метод расстановок позволяет увидеть корень проблемы и распутать ситуацию, жить в
					настоящем, а не в прошлом; высвобождает мощный жизненный ресурс, который раньше был
					недоступен из-за вовлеченности в процессы прошлого.
				</p>
				<p>
					Один из основных феноменов расстановок — «заместительское восприятие» — состоит в том, что
					заместители оказываются способными передавать существенные стороны переживаний реальных
					событий и членов системы клиента, даже если не имеют о них никакой информации. А также
					прорабатывают в ходе участия в расстановке в роли заместителя свои трудности.
				</p>
			</Text>
			<Section className={styles.list}>
				<Title className={styles.listTitle}>Метод системных расстановок позволяет:</Title>
				<List
					items={{
						column1: [
							'Выявить причинно-следственные связи между текущей проблемой и её первопричиной.',
							'Закрыть резонанс, влияющий на отношения в паре, в детско-родительских отношениях в любом возрасте.',
							'Разрешить любую проблематику в сфере отношений, денег, бизнеса, предназначения, поиска себя, самореализации и т.д.',
							'Проработать детские травмы.'
						]
					}}
				/>
			</Section>
			<Text>
				<Title>Стоимость:</Title>
				<p>
					Для клиента с запросом индивидуальная онлайн расстановка без заместителей –
					<span>3900 рублей.</span>
				</p>
				<p>
					Для клиента с запросом очная расстановка с заместителями – <span>5000 рублей.</span>
				</p>
				<p>
					Участие для заместителей/наблюдателей – <span>500 рублей.</span>
				</p>
			</Text>
		</Wrapper>
	)
}
