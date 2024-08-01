'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

import styles from './Footer.module.scss'

import { links } from '@/data/links.data'

import { Logo } from '@/ui/logo/Logo'
import { TelegramLink } from '@/ui/telegram-link/TelegramLink'
import { Wrapper } from '@/ui/wrapper/Wrapper'

export function Footer() {
	const pathname = usePathname()
	const isOtherPage = pathname !== '/'

	return (
		<footer className={clsx(styles.footer, isOtherPage && styles.isOtherPage)}>
			<Wrapper className={styles.wrapper}>
				<div>
					<Logo />
				</div>
				<div>
					<ul className={styles.list}>
						{links.map((link, index) => (
							<li key={index}>
								<NextLink
									className={clsx(styles.link, pathname === link.url && styles.active)}
									href={link.url}
								>
									{link.label}
								</NextLink>
							</li>
						))}
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<NextLink href='tel:+79852428318'>+7 985 242 83 18</NextLink>
						</li>
						<li>
							<NextLink href='tel:+79254507146'>+7 925 450 71 46</NextLink>
						</li>
						<li>
							<NextLink href='mailto:info@ir-ox-help.ru'>info@ir-ox-help.ru</NextLink>
						</li>
						<li>
							<TelegramLink className={styles.tg} />
						</li>
					</ul>
				</div>
			</Wrapper>
		</footer>
	)
}
