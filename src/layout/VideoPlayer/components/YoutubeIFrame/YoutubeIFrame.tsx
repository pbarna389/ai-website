import type { YoutubeIFrameProps } from './types'

import './styles.css'

export const YoutubeIFrame = ({ link }: YoutubeIFrameProps) => {
	return (
		<iframe
			src={`https://www.youtube.com/embed/${link}?enablejsapi=1&autoplay=1&modestbranding=1&rel=0`}
			allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"
			sandbox="allow-scripts allow-same-origin allow-presentation"
			allowFullScreen
		/>
	)
}
