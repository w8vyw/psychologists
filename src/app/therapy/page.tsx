import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Therapy'
}

export default function Therapy() {
	return (
		<>
			<p>Therapy Page</p>
			<ul>
				<li>
					<Link href='/therapy/kid'>Исцеление внутреннего ребенка</Link>
				</li>
				<li>
					<Link href='/therapy/girls'>Между нами девочками</Link>
				</li>
				<li>
					<Link href='/therapy/yourself'>Обретая себя</Link>
				</li>
				<li>
					<Link href='/therapy/emotions'>Эмоции – перезагрузка</Link>
				</li>
				<li>
					<Link href='/therapy/slimness'>Счастливая стройность</Link>
				</li>
			</ul>
		</>
	)
}
