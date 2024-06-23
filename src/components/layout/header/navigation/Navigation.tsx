'use client'

import NextLink from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import styles from './Navigation.module.scss'

import { Overlay } from '@/components/ui/overlay/Overlay'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useIsOtherPage } from '@/hooks/useIsOtherPage'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { mobileBreakpoint } from '../Header'
import { TelegramLink } from '../top-line/telegram-link/TelegramLink'
import links from './links.data'
import { MenuButton } from './menu-button/MenuButton'

export function Navigation() {
	const isOtherPage = useIsOtherPage()
	const pathname = usePathname()
	const isMobile = useMediaQuery(`(width <= ${mobileBreakpoint})`)

	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
	const menuRef = useRef<HTMLUListElement>(null)
	useClickOutside(menuRef, () => setIsMenuActive(false))

	useEffect(() => {
		isOtherPage
			? document.body.classList.add('isOtherPage')
			: document.body.classList.remove('isOtherPage')
	}, [isOtherPage])

	useEffect(() => {
		isMenuActive
			? document.documentElement.classList.add('scrollLocked')
			: document.documentElement.classList.remove('scrollLocked')
	}, [isMenuActive])

	return (
		<>
			<nav className={clsx(styles.nav, isOtherPage && styles.isOtherPage)}>
				<ul
					className={clsx(styles.list, isMenuActive && styles.active)}
					ref={menuRef}
				>
					{links.map(link => (
						<li
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
							<li className={styles.phone}>
								<Link href='tel:+79852428318'>+7 985 242 83 18</Link>
							</li>
							<li className={styles.phone}>
								<Link href='tel:+79254507146'>+7 925 450 71 46</Link>
							</li>
							<li className={styles.tg}>
								<TelegramLink />
							</li>
						</>
					)}
				</ul>
			</nav>
			{isMobile && (
				<>
					<MenuButton onClick={() => setIsMenuActive(true)} />
					<Overlay isActive={isMenuActive} />
				</>
			)}
		</>
	)
}
