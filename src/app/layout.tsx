import '../assets/styles/main.scss'

import Layout from '@/components/layout/Layout'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Layout>{children}</Layout>
}
// import Layout from '@/components/Layout/Layout'

// export const metadata = {
// 	applicationName: '',

// 	// metadataBase: new URL('https://'),

// 	alternates: {
// 		canonical: '/'
// 	},

// 	verification: {
// 		yandex: '',
// 		google: ''
// 	},

// 	title: '123',

// 	description: '',

// 	openGraph: {
// 		title: '',
// 		description: '',
// 		url: 'https://',
// 		siteName: '',
// 		locale: 'ru_RU',
// 		type: 'website'
// 	},

// 	robots: {
// 		index: true,
// 		follow: true
// 	},

// 	referrer: 'no-referrer-when-downgrade'
// }

// {
// 	/* <meta property="og:type" content="article"/>
//     <meta property="og:title" content="В Москве побит температурный рекорд 1922 года"/>
//     <meta property="og:url" content="https://www.example-news.com/life/weather/moscow#cao"/>
//     <meta property="article:section" content="Погода">
//     <meta property="article:modified_time" content="2018-12-11T08:56:49Z">
//     <meta property="article:published_time" content="2018-11-06T09:26:10+04:00">
//     <meta property="article:author" content="Иван Иванов">
//     <meta property="article:author" content="Петр Петров">
//     <meta property="article:tag" content="Жара">
//     <meta property="article:tag" content="Москва"></meta> */
// }

// export default function RootLayout({ children }) {
// 	return <Layout>{children}</Layout>
// }
