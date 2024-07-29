import { Button, EnumButtonSizes, EnumButtonTests } from '@/ui/button/Button'
import { Wrapper } from '@/ui/wrapper/Wrapper'

export default function Home() {
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
		</Wrapper>
	)
}
