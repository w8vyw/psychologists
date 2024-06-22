import { Metadata } from 'next'

import Layout from '@/components/layout/Layout'

export const metadata: Metadata = {
	applicationName: '',

	metadataBase: new URL('https://ir-ox-help.ru'),

	formatDetection: { telephone: false },

	alternates: {
		canonical: '/'
	},

	verification: {
		yandex: '',
		google: ''
	},

	title: '',

	description: '',

	openGraph: {
		title: '',
		description: '',
		url: 'https://',
		siteName: '',
		locale: 'ru_RU',
		type: 'website'
	},

	robots: {
		index: true,
		follow: true
	},

	referrer: 'no-referrer-when-downgrade'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Layout>{children}</Layout>
}
