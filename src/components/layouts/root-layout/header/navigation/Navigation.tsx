'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { useEffect, useRef, useState, type ElementRef } from 'react'

import clsx from 'clsx'
import { motion, type Variants } from 'framer-motion'

import styles from './Navigation.module.scss'

import { links } from '@/data/links.data'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { Overlay } from '@/ui/overlay/Overlay'
import { TelegramLink } from '@/ui/telegram-link/TelegramLink'

import { lg } from '@/constants/breakpoints.constants'

import { MenuButton } from './menu-button/MenuButton'

export function Navigation() {
	const pathname = usePathname()
	const isOtherPage = pathname !== '/'

	useEffect(() => {
		isOtherPage
			? document.body.classList.add('isOtherPage')
			: document.body.classList.remove('isOtherPage')
	}, [isOtherPage])
	const isMobile = useMediaQuery(`(width <= ${lg})`)
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const menuRef = useRef<ElementRef<'ul'>>(null)

	const toggleMenu = (state: boolean) => {
		setIsMenuOpened(state)
		isMenuOpened
			? document.body.classList.add('scrollLocked')
			: document.body.classList.remove('scrollLocked')
	}

	useClickOutside(menuRef, () => toggleMenu(false))

	const menuVariants: Variants = {
		closed: {
			x: '100%',
			transition: { duration: 0.15, staggerChildren: 0.02 }
		},
		opened: {
			x: '0%',
			transition: {
				duration: 0.2,
				when: 'beforeChildren',
				staggerChildren: 0.075,
				delayChildren: 0.1
			}
		}
	}

	const menuItemVariants: Variants = {
		closed: { x: 100, opacity: 0 },
		opened: { x: 0, opacity: 1 }
	}

	return (
		<>
			<nav className={clsx(styles.nav, isOtherPage && styles.isOtherPage)}>
				<motion.ul
					className={clsx(styles.list)}
					ref={menuRef}
					variants={menuVariants}
					animate={!isMobile || isMenuOpened ? 'opened' : 'closed'}
					initial={'closed'}
				>
					{links.map((link, index) => (
						<motion.li
							key={index}
							onClick={() => toggleMenu(!isMenuOpened)}
							variants={menuItemVariants}
						>
							<NextLink
								className={clsx(styles.link, pathname === link.url && styles.active)}
								href={link.url}
							>
								{link.label}
							</NextLink>
						</motion.li>
					))}
					{isMobile && (
						<>
							<motion.li
								className={styles.phone}
								variants={menuItemVariants}
							>
								<NextLink href='tel:+79852428318'>+7 985 242 83 18</NextLink>
							</motion.li>
							<motion.li
								className={styles.phone}
								variants={menuItemVariants}
							>
								<NextLink href='tel:+79254507146'>+7 925 450 71 46</NextLink>
							</motion.li>
							<motion.li
								className={styles.tg}
								variants={menuItemVariants}
							>
								<TelegramLink />
							</motion.li>
						</>
					)}
				</motion.ul>
				{isMobile && (
					<>
						<MenuButton onClick={() => toggleMenu(!isMenuOpened)} />
						<Overlay isActive={isMenuOpened} />
					</>
				)}
			</nav>
		</>
	)
}
