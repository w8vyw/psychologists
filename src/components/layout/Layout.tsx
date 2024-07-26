import { Metadata } from 'next'
import { Inter, Tenor_Sans } from 'next/font/google'

import clsx from 'clsx'

import '@/styles/global.scss'

import { Wrapper } from '../ui/wrapper/Wrapper'
import { Header } from './header/Header'
import { ToTop } from './to-top/ToTop'

export const metadata: Metadata = {
	formatDetection: {
		telephone: false
	}
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	style: 'normal'
})

const tenorSans = Tenor_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	style: 'normal',
	variable: '--tenor-sans'
})

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className='poweredBy__@w8vyw__NextJS__'
		>
			<body className={clsx(inter.className, tenorSans.variable)}>
				<Header />
				<main>
					<Wrapper>{children}</Wrapper>
				</main>
				<ToTop />
			</body>
		</html>
	)
}
