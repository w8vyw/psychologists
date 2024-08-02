import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Icon.module.scss'

interface IIconProps extends ComponentPropsWithoutRef<'svg'> {
	id: string
}

export function Icon({ id, className, ...props }: IIconProps) {
	return (
		<svg
			className={clsx(styles.icon, className)}
			{...props}
		>
			<use href={`/images/sprite.svg#${id}`} />
		</svg>
	)
}
