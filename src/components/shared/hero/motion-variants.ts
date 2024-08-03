import { Variants } from 'framer-motion'

export const sectionMotionVariants: Variants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			duration: 0.5
		}
	}
}

export const imageMotionVariants: Variants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3
		}
	}
}

export const textMotionVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -500
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			damping: 50,
			duration: 0.5
		}
	}
}
