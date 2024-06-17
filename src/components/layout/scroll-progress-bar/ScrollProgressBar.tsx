// 'use client'

// import { useRef, useEffect, RefObject } from 'react'

// import styles from './ScrollProgressBar.module.scss'

// export function ScrollProgressBar() {
// 	const indicatorRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

// 	const handler = () => {
// 		const scrolled: number =
// 			document.body.scrollTop || document.documentElement.scrollTop
// 		const height: number =
// 			document.documentElement.scrollHeight -
// 			document.documentElement.clientHeight
// 		if (indicatorRef.current) {
// 			indicatorRef.current.style.width = (scrolled / height) * 100 + '%'
// 		}
// 	}

// 	useEffect(() => {
// 		document.addEventListener('scroll', handler)

// 		return () => {
// 			document.removeEventListener('scroll', handler)
// 		}
// 	}, [])

// 	return (
// 		<div className={styles.container}>
// 			<div
// 				className={styles.indicator}
// 				ref={indicatorRef}></div>
// 		</div>
// 	)
// }
