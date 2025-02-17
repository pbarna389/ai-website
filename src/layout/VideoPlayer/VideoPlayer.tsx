import { FaStopCircle } from 'react-icons/fa'

import { InstaVideo, YoutubeIFrame } from './components'

import { useVideoContext } from '@context'
import { useBottomChecker } from '@hooks'

import './style.css'

const ComponentSelector = (link: string) => {
	return {
		Youtube: <YoutubeIFrame link={link} />,
		Instagram: <InstaVideo link={link} />
	}
}

export const VideoPlayer = () => {
	const { videoState, videoSetter } = useVideoContext()

	const onBottom = useBottomChecker()

	const { link, type } = videoState

	const handleClick = () => {
		videoSetter(() => {
			return { link: null, isPlaying: false, type: null }
		})
	}

	if (videoState.isPlaying) {
		return (
			<div className={`flex flex-column videoPlayer ${onBottom && 'invisible'}`}>
				<div className="social-helper" />
				{link && type && ComponentSelector(link)[type]}
				<FaStopCircle size={100} onClick={handleClick} />
			</div>
		)
	}
}
