import './AnimatedForm.scss'

export function AnimatedForm() {
	return (
		<>
			<form className='ring'>
				<i style={{ '--color': '#00ff0a' }}></i>
				<i style={{ '--color': '#ff0057' }}></i>
				<i style={{ '--color': '#fffd44' }}></i>
				<div className='login'>
					<h2>Login</h2>
					<div className='inputBx'>
						<input
							type='text'
							placeholder='Username'
						/>
					</div>
					<div className='inputBx'>
						<input
							type='password'
							placeholder='Password'
						/>
					</div>
					<div className='inputBx'>
						<input
							type='submit'
							value='Sign in'
						/>
					</div>
					<div className='links'>
						<a href='#'>Forget Password</a>
						<a href='#'>Signup</a>
					</div>
				</div>
			</form>
			<div className='typing'>What is this?</div>
			<button>save</button>
			<p className='test'>Тестирую анимацию подчеркивания</p>
		</>
	)
}
