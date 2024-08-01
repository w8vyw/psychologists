import { forwardRef } from 'react'
import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './MenuButton.module.scss'

export const MenuButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
	function MenuButton({ className, ...props }, ref) {
		return (
			<button
				className={clsx(styles.button, className)}
				type='button'
				ref={ref}
				{...props}
			>
				<svg
					className={styles.icon}
					xmlns='http://www.w3.org/2000/svg'
				>
					<use href='/images/sprite.svg#menu' />
				</svg>
			</button>
		)
	}
)

MenuButton.displayName = 'MenuButton'
