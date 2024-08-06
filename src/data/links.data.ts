import { IImage } from '@/types/global'

import MoneyCardImage from '@/images/games/link-cards/money.webp'
import SexualityCardImage from '@/images/games/link-cards/sexuality.webp'
import EmotionsCardImage from '@/images/therapy/link-cards/emotions.webp'
import GirlsCardImage from '@/images/therapy/link-cards/girls.webp'
import KidCardImage from '@/images/therapy/link-cards/kid.webp'
import SlimnessCardImage from '@/images/therapy/link-cards/slimness.webp'
import YourselfCardImage from '@/images/therapy/link-cards/yourself.webp'

interface ILink {
	url: string
	label: string
}

interface ISubLink extends ILink {
	cardImage: IImage
}

interface IFullLink extends ILink {
	psychologists: 'both' | 'ir' | 'ox'
	subLinks?: ISubLink[]
}

export const links: IFullLink[] = [
	{
		url: '/',
		label: 'Главная',
		psychologists: 'both'
	},
	{
		url: '/therapy',
		label: 'Групповая психотерапия',
		psychologists: 'ir',
		subLinks: [
			{
				url: '/kid',
				label: 'Исцеление внутреннего ребенка',
				cardImage: {
					imageData: KidCardImage,
					alt: ''
				}
			},
			{
				url: '/girls',
				label: 'Между нами девочками',
				cardImage: {
					imageData: GirlsCardImage,
					alt: ''
				}
			},
			{
				url: '/yourself',
				label: 'Обретая себя',
				cardImage: {
					imageData: YourselfCardImage,
					alt: ''
				}
			},
			{
				url: '/emotions',
				label: 'Эмоции - перезагрузка',
				cardImage: {
					imageData: EmotionsCardImage,
					alt: ''
				}
			},
			{
				url: '/slimness',
				label: 'Счастливая стройность',
				cardImage: {
					imageData: SlimnessCardImage,
					alt: ''
				}
			},
			{
				url: '/perfection',
				label: 'Счастливое совершенство',
				cardImage: {
					imageData: SlimnessCardImage,
					alt: ''
				}
			}
		]
	},
	{
		url: '/training',
		label: 'Тренинг',
		psychologists: 'both'
	},
	{
		url: '/games',
		label: 'Игры',
		psychologists: 'ox',
		subLinks: [
			{
				url: '/money',
				label: 'Территория денег',
				cardImage: {
					imageData: MoneyCardImage,
					alt: ''
				}
			},
			{
				url: '/sexuality',
				label: 'Сексуальность – энергия жизни',
				cardImage: {
					imageData: SexualityCardImage,
					alt: ''
				}
			}
		]
	},
	{
		url: '/marathon',
		label: 'Марафон',
		psychologists: 'ir'
	},
	{
		url: '/coaching',
		label: 'Коучинг',
		psychologists: 'both'
	},
	{
		url: '/arrangements',
		label: 'Расстановки',
		psychologists: 'both'
	}
]
