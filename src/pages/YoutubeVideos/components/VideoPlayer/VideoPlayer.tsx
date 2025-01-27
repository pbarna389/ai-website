import type { MutableRefObject } from 'react'
import { useRef, useState } from 'react'

import { useIntersectionObserver } from '@hooks'

import type { VideoPlayerProps } from './types'

export const VideoPlayer = ({ link, idx }: VideoPlayerProps) => {
	const [, setIntersecting] = useState<boolean>(false)

	const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	const [observerRef] = useIntersectionObserver(setIntersecting, elementRef && elementRef, {
		idx
	})

	return (
		<div ref={observerRef && observerRef}>
			<p>{link}</p>
			<iframe
				src={`https://www.youtube.com/embed/${link}`}
				width={`500px`}
				height={`360px`}
				allow="accelerometer; autoplay; encrypted-media; gyroscope;"
				sandbox="allow-scripts allow-same-origin allow-presentation"
			></iframe>
		</div>
	)
}
