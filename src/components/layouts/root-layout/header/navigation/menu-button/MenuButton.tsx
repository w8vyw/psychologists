import { forwardRef } from 'react'
import { HTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './MenuButton.module.scss'

import { Icon } from '@/ui/icon/Icon'

export const MenuButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
	function MenuButton({ className, ...props }, ref) {
		return (
			<button
				className={clsx(styles.button, className)}
				type='button'
				ref={ref}
				{...props}
			>
				<Icon
					className={styles.icon}
					id='burger'
				/>
			</button>
		)
	}
)

MenuButton.displayName = 'MenuButton'
