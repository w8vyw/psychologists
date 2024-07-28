import { Button, EnumButtonSizes, EnumButtonColors } from '@/ui/button/Button'
import { Wrapper } from '@/ui/wrapper/Wrapper'

export default function Home() {
	return (
		<Wrapper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
			Главная
			<Button>Записаться на консультацию</Button>
			<Button size={EnumButtonSizes.Medium}>Записаться</Button>
			<Button size={EnumButtonSizes.Large}>Записаться</Button>
			<Button color={EnumButtonColors.Blue}>Записаться на</Button>
			<Button
				color={EnumButtonColors.Blue}
				size={EnumButtonSizes.Medium}
			>
				Записаться
			</Button>
			<Button
				color={EnumButtonColors.Blue}
				size={EnumButtonSizes.Large}
			>
				Записаться
			</Button>
		</Wrapper>
	)
}
