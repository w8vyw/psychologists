import { Metadata } from 'next'

import { Wrapper } from '@/components/ui/wrapper/Wrapper'

export const metadata: Metadata = {
	title: 'Главная'
}

export default function Home() {
	return <Wrapper>Главная</Wrapper>
}
