import { HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'

import styles from './Wrapper.module.scss'

interface IWrapperProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
}

export function Wrapper({ className, children, ...props }: PropsWithChildren<IWrapperProps>) {
	return (
		<div
			className={clsx(styles.wrapper, className)}
			{...props}
		>
			{children}
		</div>
	)
}
