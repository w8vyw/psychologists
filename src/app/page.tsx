import NextImage from 'next/image'

import styles from './page.module.scss'

import { Slogan } from '@/ui/slogan/Slogan'
import { Wrapper } from '@/ui/wrapper/Wrapper'

import { Feedback } from '@/shared/feedback/Feedback'
import { Form } from '@/shared/form/Form'
import { HelpList } from '@/shared/help-list/HelpList'
import { Hero } from '@/shared/hero/Hero'
import { PrinciplesList } from '@/shared/principles-list/PrinciplesList'
import { Service } from '@/shared/service/Service'

import FlowerImage1 from '@/images/home/flowers/1.webp'
import FlowerImage2 from '@/images/home/flowers/2.webp'
import FlowerImage3 from '@/images/home/flowers/3.webp'

export default function Home() {
	return (
		<>
			<Wrapper className={styles.mb}>
				<Hero />
				<HelpList />
				<PrinciplesList />
				<div className={styles.flowers}>
					<NextImage
						className={styles.flower1}
						src={FlowerImage1}
						alt=''
						placeholder='blur'
					/>
					<NextImage
						className={styles.flower2}
						src={FlowerImage2}
						alt=''
						placeholder='blur'
					/>
					<NextImage
						className={styles.flower3}
						src={FlowerImage3}
						alt=''
						placeholder='blur'
					/>
				</div>
				<Slogan>
					В работе мы используем <span>интегративный подход,</span> опираясь на{' '}
					<span>индивидуальный подход</span> к каждому клиенту!
				</Slogan>
				<Service />
			</Wrapper>
			<Feedback />
		</>
	)
}
