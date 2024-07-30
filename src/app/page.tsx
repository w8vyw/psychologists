import { Button, EnumButtonSizes, EnumButtonTests } from '@/ui/button/Button'
import { Wrapper } from '@/ui/wrapper/Wrapper'

// import { useCounterStore } from '@/providers/counter-store-provider'

export default function Home() {
	// const { count, incrementCount, decrementCount } = useCounterStore(state => state)
	return (
		<Wrapper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
			Главная
			<Button>Записаться на консультацию</Button>
			<Button size={EnumButtonSizes.Medium}>Записаться</Button>
			<Button size={EnumButtonSizes.Large}>Записаться</Button>
			<Button test={EnumButtonTests.Blue}>Записаться на</Button>
			<Button
				test={EnumButtonTests.Blue}
				size={EnumButtonSizes.Medium}
			>
				Записаться
			</Button>
			<Button
				test={EnumButtonTests.Blue}
				size={EnumButtonSizes.Large}
			>
				Записаться
			</Button>
			{/* <div>
				<hr />
				Count: {count}
				<button
					type='button'
					onClick={() => incrementCount()}
				>
					Increment Count
				</button>
				<button
					type='button'
					onClick={() => decrementCount()}
				>
					Decrement Count
				</button>
				<hr />
			</div> */}
		</Wrapper>
	)
}
