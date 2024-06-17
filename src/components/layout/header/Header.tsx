import styles from './Header.module.scss'

import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import { Navigation } from './navigation/Navigation.1'
import { TopLine } from './top-line/TopLine'

export function Header() {
	return (
		<header className={styles.header}>
			<Wrapper className={styles.wrapper}>
				<TopLine />
				<Navigation />
			</Wrapper>
		</header>
	)
}
