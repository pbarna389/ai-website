import type { VideoPlayerProps } from './types'

export const VideoPlayer = ({ link }: VideoPlayerProps) => {
	return (
		<div>
			<p>{link}</p>
			<iframe
				src={`https://www.youtube.com/embed/${link}`}
				width={`500px`}
				height={`360px`}
				loading="lazy"
				allow="accelerometer; autoplay; encrypted-media; gyroscope;"
				sandbox="allow-scripts allow-same-origin allow-presentation"
			></iframe>
		</div>
	)
}
