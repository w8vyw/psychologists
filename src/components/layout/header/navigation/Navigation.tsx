'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import styles from './Navigation.module.scss'

import { Overlay } from '@/components/ui/overlay/Overlay'
import { Phones } from '@/components/ui/phones/Phones'
import { TelegramLink } from '@/components/ui/telegram-link/TelegramLink'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useIsOtherPage } from '@/hooks/useIsOtherPage'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import links from './links.data'
import { MenuButton } from './menu-button/MenuButton'

export function Navigation() {
	const isOtherPage = useIsOtherPage()
	const pathname = usePathname()
	const isMobile = useMediaQuery('(width <= 1023px)')

	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
	const menuRef = useRef<HTMLUListElement>(null)
	useClickOutside(menuRef, () => setIsMenuActive(false))

	useEffect(() => {
		isOtherPage
			? document.documentElement.classList.add('isOtherPage')
			: document.documentElement.classList.remove('isOtherPage')
	}, [isOtherPage])

	useEffect(() => {
		isMenuActive
			? document.documentElement.classList.add('scrollLocked')
			: document.documentElement.classList.remove('scrollLocked')
	}, [isMenuActive])

	return (
		<nav className={clsx(styles.nav, isOtherPage && styles.isOtherPage)}>
			<ul
				className={clsx(styles.list, isMenuActive && styles.active)}
				ref={menuRef}
			>
				{links.map(link => (
					<li
						className={styles.item}
						key={link.href}
						onClick={() => setIsMenuActive(false)}
					>
						<NextLink
							className={clsx(styles.link, pathname === link.href && styles.active)}
							href={link.href}
						>
							{link.label}
						</NextLink>
					</li>
				))}
				{isMobile && (
					<>
						<li>
							<Phones className={styles.phones} />
						</li>
						<li>
							<TelegramLink className={styles.tg} />
						</li>
					</>
				)}
			</ul>
			{isMobile && (
				<>
					<MenuButton onClick={() => setIsMenuActive(true)} />
					<Overlay isActive={isMenuActive} />
				</>
			)}
		</nav>
	)
}
