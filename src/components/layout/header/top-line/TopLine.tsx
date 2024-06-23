import Link from 'next/link'

import styles from './TopLine.module.scss'

import { Logo } from '@/components/ui/logo/Logo'

import { TelegramLink } from './telegram-link/TelegramLink'

export function TopLine() {
	return (
		<ul className={styles.line}>
			<li>
				<Logo />
			</li>
			<li className={styles.phones}>
				<Link href='tel:+79852428318'>+7 985 242 83 18</Link>
				<Link href='tel:+79254507146'>+7 925 450 71 46</Link>
			</li>
			<li className={styles.tg}>
				<TelegramLink />
			</li>
		</ul>
	)
}
