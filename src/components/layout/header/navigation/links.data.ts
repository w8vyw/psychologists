interface Link {
	href: string
	label: string
}

const links: Link[] = [
	{
		href: '/',
		label: 'Главная'
	},
	{
		href: '/therapy',
		label: 'Групповая психотерапия'
	},
	{
		href: '/games',
		label: 'Игры'
	},
	{
		href: '/marathons',
		label: 'Марафоны'
	},
	{
		href: '/coaching',
		label: 'Коучинг'
	},
	{
		href: '/arrangements',
		label: 'Расстановки'
	},
	{
		href: '/trainings',
		label: 'Тренинги'
	}
]

export default links
