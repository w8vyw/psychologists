'use client'

import styles from './TopLine.module.scss'

import { Logo } from '@/components/ui/logo/Logo'
import { Phones } from '@/components/ui/phones/Phones'
import { TelegramLink } from '@/components/ui/telegram-link/TelegramLink'

import { useMediaQuery } from '@/hooks/useMediaQuery'

export function TopLine() {
	const isDesktop: boolean = useMediaQuery('(width >= 1024px)')

	return (
		<div className={styles.line}>
			<Logo />
			{isDesktop && (
				<>
					<Phones className={styles.phones} />
					<TelegramLink />
				</>
			)}
		</div>
	)
}
