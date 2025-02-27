import { useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'

export const useIntersectionObserver = () => {
	const [isInView, setIntersecting] = useState<boolean>(false)
	const ref: MutableRefObject<HTMLImageElement | null> = useRef(null)

	useEffect(() => {
		const callbackForObserver = (entries: IntersectionObserverEntry[]) => {
			const [{ isIntersecting }] = entries

			setIntersecting(isIntersecting)
		}

		const { current } = ref
		const observer = new IntersectionObserver(callbackForObserver)

		if (current) {
			observer.observe(current)
		}
	}, [ref, setIntersecting, isInView])

	return { ref, isInView }
}
