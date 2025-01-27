import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

export const useIntersectionObserver = (
	setState: React.Dispatch<React.SetStateAction<boolean>>,
	ref: MutableRefObject<HTMLDivElement | null>,
	infiniteScrollRelated: {
		idx: number
	}
) => {
	const { idx } = infiniteScrollRelated

	useEffect(() => {
		const callbackForObserver = (entries: IntersectionObserverEntry[]) => {
			// console.log(entries);
			const [entry] = entries
			// console.log(entry);
			if (entry.isIntersecting) {
				setState(entry.isIntersecting)
			}
			if (!entry.isIntersecting) {
				setState(entry.isIntersecting)
			}
		}
		const { current } = ref
		const observer = new IntersectionObserver(callbackForObserver)

		if (current) {
			observer.observe(current)
		}
	}, [ref, setState, idx])

	return [ref]
}
