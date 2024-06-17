import 'react'

declare module 'react' {
	interface CSSProperties {
		'--color'?: string
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
			'swiper-slide': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
		}
	}
}

export default global
