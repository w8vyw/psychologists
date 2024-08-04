import { Inter, Tenor_Sans } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'

import '@/styles/global.scss'

import { Wrapper } from '@/ui/wrapper/Wrapper'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Providers } from './providers/Providers'
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
			<body className={clsx(inter.className, tenorSans.variable)}>
				<Providers>
					<Header />
					<main>
						<Wrapper>{children}</Wrapper>
					</main>
					<Footer />
					<ToTop />
				</Providers>
				<SpeedInsights />
			</body>
		</html>
	)
}
