import { useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'

export const useIntersectionObserver = () => {
	const [isInView, setIntersecting] = useState<boolean>(false)
	const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)

	useEffect(() => {
		const callbackForObserver = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries

			const { isIntersecting } = entry

			if (isIntersecting) {
				setIntersecting(isIntersecting)
			}
			if (!isIntersecting) {
				setIntersecting(isIntersecting)
			}
		}
		const { current } = ref
		const observer = new IntersectionObserver(callbackForObserver)

		if (current) {
			observer.observe(current)
		}
	}, [ref, setIntersecting])

	return { ref, isInView }
}
