import { type HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Overlay.module.scss'

interface IOverlayProps extends HTMLAttributes<HTMLDivElement> {
	isActive?: boolean
}

export function Overlay({ isActive = false, className, ...props }: IOverlayProps) {
	return (
		<div
			className={clsx(styles.overlay, isActive && styles.active, className)}
			{...props}
		></div>
	)
}
