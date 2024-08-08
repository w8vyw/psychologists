import { Wrapper } from '@/ui/wrapper/Wrapper'

export default function OtherPagesLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Wrapper>{children}</Wrapper>
}
