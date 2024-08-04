'use client'

import NextLink from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import clsx from 'clsx'

import styles from './EnrollButton.module.scss'

// import { useCounterStore } from '@/providers/counter-store-provider'

export enum EnumEnrollButtonSizes {
	Small,
	Medium,
	Large
}

export enum EnumEnrollButtonTests {
	Yellow,
	Blue
}

interface IEnrollButtonProps extends ComponentPropsWithoutRef<'a'> {
	size?: EnumEnrollButtonSizes
	test?: EnumEnrollButtonTests
	children?: ReactNode
}

export function EnrollButton({ size, test, children, className, ...props }: IEnrollButtonProps) {
	// const { setPsychologist } = useCounterStore(state => state)
	const router = useRouter()
	const pathname = usePathname()
	const pagesMembership = [
		{ route: '/therapy', psychologists: 'ir' },
		{ route: '/games', psychologists: 'ox' },
		{ route: '/coaching', psychologists: 'both' },
		{ route: '/trainings', psychologists: 'both' },
		{ route: '/arrangements', psychologists: 'both' },
		{ route: '/marathons', psychologists: 'ir' }
	]

	return (
		<NextLink
			className={clsx(
				styles.button,
				size === EnumEnrollButtonSizes.Medium && styles.medium,
				size === EnumEnrollButtonSizes.Large && styles.large,
				test === EnumEnrollButtonTests.Blue && styles.blue,
				className
			)}
			href='/#feedback'
			{...props}
			onClick={e => {
				e.preventDefault()

				const psychologists = 'both'

				const whosePage = () => {
					if (pathname === '/') {
						return psychologists
					}

					const thisPage = pagesMembership.find(page => pathname.includes(page.route))

					return thisPage ? thisPage.psychologists : 'both'
				}

				// setPsychologist(whosePage())

				router.push('/#feedback')
			}}
		>
			{children}
		</NextLink>
	)
}
