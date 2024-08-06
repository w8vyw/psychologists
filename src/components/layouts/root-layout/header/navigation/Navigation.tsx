'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'

import clsx from 'clsx'

import styles from './Navigation.module.scss'

import { links } from '@/data/links.data'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { TelegramLink } from '@/ui/telegram-link/TelegramLink'

import { lg } from '@/constants/breakpoints.constants'

import { MenuButton } from './menu-button/MenuButton'

export function Navigation() {
	const pathname = usePathname()
	const isOtherPage = pathname !== '/'
	const isActiveLink = (url: string) => pathname === url
	const isMobile = useMediaQuery(`(width <= ${lg})`)
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const toggleMenu = () => {
		isMobile && setIsMenuOpened(!isMenuOpened)
	}

	useEffect(() => {
		isOtherPage
			? document.body.classList.add('isOtherPage')
			: document.body.classList.remove('isOtherPage')
		isMenuOpened
			? document.documentElement.classList.add('scrollLocked')
			: document.documentElement.classList.remove('scrollLocked')
	}, [isOtherPage, isMenuOpened])

	return (
		<>
			<nav>
				<ul
					className={clsx(
						styles.list,
						isMenuOpened && styles.active,
						isOtherPage && styles.isOtherPage
					)}
				>
					{links.map((link, index) => (
						<li
							className={styles.item}
							key={index}
							onClick={toggleMenu}
						>
							<NextLink
								className={clsx(styles.link, isActiveLink(link.url) && styles.active)}
								href={link.url}
							>
								{link.label}
							</NextLink>
							{typeof link.subLinks !== 'undefined' && (
								<ul className={styles.subList}>
									{link.subLinks.map((subLink, subLinkIndex) => (
										<li
											key={subLinkIndex}
											className={clsx(styles.item, styles.subItem)}
											onClick={toggleMenu}
										>
											<NextLink
												className={clsx(
													styles.link,
													styles.subLink,
													isActiveLink(link.url + subLink.url) && styles.active
												)}
												href={link.url + subLink.url}
											>
												{subLink.label}
											</NextLink>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
					{isMobile && (
						<>
							<li className={styles.phone}>
								<NextLink href='tel:+79852428318'>+7 985 242 83 18</NextLink>
							</li>
							<li className={styles.phone}>
								<NextLink href='tel:+79254507146'>+7 925 450 71 46</NextLink>
							</li>
							<li className={styles.tg}>
								<TelegramLink />
							</li>
						</>
					)}
				</ul>
				{isMobile && (
					<>
						<MenuButton onClick={toggleMenu} />
					</>
				)}
			</nav>
		</>
	)
}
