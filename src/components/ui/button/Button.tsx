import NextLink from 'next/link'

import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

export enum EnumButtonSizes {
	Small,
	Medium,
	Large
}

export enum EnumButtonTests {
	Yellow,
	Blue
}

interface IButtonProps extends ComponentPropsWithoutRef<'a'> {
	size?: EnumButtonSizes
	test?: EnumButtonTests
	children?: ReactNode
}

export function Button({ size, test, children, className, ...props }: IButtonProps) {
	return (
		<NextLink
			className={clsx(
				styles.button,
				size === EnumButtonSizes.Medium && styles.medium,
				size === EnumButtonSizes.Large && styles.large,
				test === EnumButtonTests.Blue && styles.blue,
				className
			)}
			href='/#feedback'
			{...props}
		>
			{children}
		</NextLink>
	)
}
