import type { RibbonProps } from './types'

import './styles.css'

export const Ribbon = ({ text }: RibbonProps) => {
	const shownText = {
		video: 'Video - tap to play the video',
		image: 'Image - tap to see the full picture',
		canvas: 'Canvas - Not implemented yet'
	}

	return <div className="ribbon">{shownText[text]}</div>
}
