import { Inter, Tenor_Sans } from 'next/font/google'

import clsx from 'clsx'

import '@/styles/global.scss'

import { Providers } from '@/providers/providers'

import { Wrapper } from '../../ui/wrapper/Wrapper'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { ToTop } from './to-top/ToTop'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	variable: '--primary-font'
})

const tenorSans = Tenor_Sans({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: '400',
	style: 'normal',
	variable: '--secondary-font'
})

export function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className='__poweredBy__w8vy.dev__Next.js__'
		>
			<Providers>
				<body className={clsx(inter.className, tenorSans.variable)}>
					<Header />
					<main>
						<Wrapper>{children}</Wrapper>
					</main>
					<Footer />
					<ToTop />
				</body>
			</Providers>
		</html>
	)
}