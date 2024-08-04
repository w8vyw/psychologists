import { Metadata } from 'next'

import '@/styles/global.scss'

import { RootLayout } from '@/components/layouts/root-layout/RootLayout'

export const metadata: Metadata = {
	metadataBase: new URL('https://ir-ox-help.ru'),
	title: 'Психологические услуги',
	description:
		'Мы - психологи/психотерапевты приглашаем вас на: консультации, психотерапию, коучинг, тренинги, трансформационные игры. Мы поможем вам преодолеть любые жизненные трудности: разобраться в отношениях, укрепить личные границы, повысить самооценку, справиться со страхами, фобиями, стрессами, расстройствами пищевого поведения, алкогольной и другими видами зависимостей, депрессией, паническими атаками. Свяжитесь с нами, чтобы начать свой путь к эмоциональному здоровью и психологическому благополучию!',
	applicationName: '',
	authors: { name: 'w8vy', url: 'https://w8vy.dev' },
	generator: 'Next.js 14',
	referrer: 'origin',
	creator: 'w8vy',
	robots: {
		index: false,
		follow: false
	},
	alternates: {
		canonical: ''
	},
	openGraph: {
		type: 'website',
		url: '',
		siteName: 'Психологические услуги',
		title: 'Психологические услуги',
		description:
			'Мы - психологи/психотерапевты приглашаем вас на: консультации, психотерапию, коучинг, тренинги, трансформационные игры. Мы поможем вам преодолеть любые жизненные трудности: разобраться в отношениях, укрепить личные границы, повысить самооценку, справиться со страхами, фобиями, стрессами, расстройствами пищевого поведения, алкогольной и другими видами зависимостей, депрессией, паническими атаками. Свяжитесь с нами, чтобы начать свой путь к эмоциональному здоровью и психологическому благополучию!'
	},
	verification: {
		yandex: '',
		google: ''
	},
	formatDetection: { telephone: false }
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <RootLayout>{children}</RootLayout>
}
