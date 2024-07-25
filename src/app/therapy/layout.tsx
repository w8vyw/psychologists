import { Wrapper } from '@/components/ui/wrapper/Wrapper'

export default function TherapyLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Wrapper>{children}</Wrapper>
}
