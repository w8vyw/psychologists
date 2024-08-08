'use client'

import { type ComponentPropsWithoutRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import axios from 'axios'
import clsx from 'clsx'

import styles from './Form.module.scss'

interface IFormProps extends ComponentPropsWithoutRef<'form'> {
	p?: string
}

interface IForm {
	Имя: string
	Телефон: string
	Описание: string
	Психолог: string
	'Способ связи': string
}

export function Form({ className, ...props }: IFormProps) {
	const { register, handleSubmit, formState, reset } = useForm<IForm>({ mode: 'onChange' })
	const nameError = formState.errors['Имя']?.message
	const phoneError = formState.errors['Телефон']?.message
	const descriptionError = formState.errors['Описание']?.message
	const psychologistError = formState.errors['Психолог']?.message
	const connectTypeError = formState.errors['Способ связи']?.message
	const onSubmit: SubmitHandler<IForm> = data => {
		// reset()
		console.log(data)
		axios.post('/api/form', data).then(function (response) {
			console.log(response)
		})
	}
	return (
		<form
			className={clsx(styles.form, className)}
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<p className={styles.heading}>Записаться на консультацию</p>
			<div className={styles.inputsContainer}>
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						type='text'
						autoComplete='off'
						placeholder='Введите ваше имя'
						{...register('Имя', { required: 'Это обязательное поле' })}
					/>
					{typeof nameError !== 'undefined' && <p className={styles.error}>{nameError}</p>}
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						type='tel'
						autoComplete='off'
						{...register('Телефон', { required: 'Это обязательное поле' })}
						placeholder='Введите ваш номер телефона'
					/>
					{typeof phoneError !== 'undefined' && <p className={styles.error}>{phoneError}</p>}
				</div>
				<div className={styles.inputContainer}>
					<textarea
						className={clsx(styles.input, styles.textarea)}
						{...register('Описание', { required: 'Это обязательное поле' })}
						placeholder='Кратко опишите вашу проблему'
					></textarea>
					{typeof descriptionError !== 'undefined' && (
						<p className={styles.error}>{descriptionError}</p>
					)}
				</div>
			</div>
			<p className={styles.title}>К какому специалисту вы хотите записаться?</p>
			<div className={styles.radioContainer}>
				<label>
					<input
						className={styles.radio}
						type='radio'
						value='Ирина'
						{...register('Психолог', { required: 'Это обязательное поле' })}
					/>
					<div className={styles.psyButton}>
						Ирина <span className={styles.checkbox}></span>
					</div>
				</label>
				<label>
					<input
						className={styles.radio}
						type='radio'
						value='Оксана'
						{...register('Психолог', { required: 'Это обязательное поле' })}
					/>
					<div className={styles.psyButton}>
						Оксана <span className={styles.checkbox}></span>
					</div>
				</label>
				{typeof psychologistError !== 'undefined' && (
					<p className={styles.error}>{psychologistError}</p>
				)}
			</div>
			<p className={styles.title}>Предпочтительный способ связи</p>
			<div className={styles.radioContainer}>
				<label>
					<input
						className={styles.radio}
						type='radio'
						value='WhatsApp'
						{...register('Способ связи', { required: 'Это обязательное поле' })}
					/>
					<div className={styles.connectTypeButton}>
						<span className={styles.checkbox}></span> WhatsApp
					</div>
				</label>
				<label>
					<input
						className={styles.radio}
						type='radio'
						value='Telegram'
						{...register('Способ связи', { required: 'Это обязательное поле' })}
					/>
					<div className={styles.connectTypeButton}>
						<span className={styles.checkbox}></span> Telegram
					</div>
				</label>
				<label>
					<input
						className={styles.radio}
						type='radio'
						value='Позвонить по телефону'
						{...register('Способ связи', { required: 'Это обязательное поле' })}
					/>
					<div className={styles.connectTypeButton}>
						<span className={styles.checkbox}></span> Позвонить по телефону
					</div>
				</label>
				{typeof connectTypeError !== 'undefined' && (
					<p className={styles.error}>{connectTypeError}</p>
				)}
			</div>
			<button
				type='submit'
				className={styles.button}
			>
				Записаться
			</button>
		</form>
	)
}

// Валидация
// Кнопка и ошибки
// Статус
// Анимации при ховере и фокусе
// Логика
