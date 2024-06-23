import styles from './Header.module.scss'

import { Wrapper } from '@/components/ui/wrapper/Wrapper'

import { Navigation } from './navigation/Navigation'
import { TopLine } from './top-line/TopLine'

export const mobileBreakpoint = '991px'

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
