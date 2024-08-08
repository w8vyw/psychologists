import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import styles from './Feedback.module.scss'

import { Form } from '@/shared/form/Form'

import { Wrapper } from '../../ui/wrapper/Wrapper'

interface IFeedbackProps extends ComponentPropsWithoutRef<'section'> {
	p?: string
}

export function Feedback({ className, ...props }: IFeedbackProps) {
	return (
		<section
			className={clsx(styles.feedback, className)}
			{...props}
		>
			<h2 className={styles.heading}>Мы искренне заинтересованы в ваших лучших результатах!</h2>
			<Wrapper>
				<Form />
			</Wrapper>
		</section>
	)
}
