/* eslint-disable @eslint-react/hooks-extra/no-direct-set-state-in-use-effect */
import { useEffect, useState } from 'react'
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
	const [isStarted, setIsStarted] = useState<boolean>(false)

	const { videoState, videoSetter, prevVideoId } = useVideoContext()
	const { link, type, isPlaying } = videoState

	const onBottom = useBottomChecker()

	useEffect(() => {
		const starterState = link !== null

		setIsStarted(starterState)
		if (prevVideoId.current !== link && link !== null) {
			const timeout = setTimeout(() => {
				setIsStarted(false)
			}, 1500)

			return () => clearTimeout(timeout)
		}
	}, [link, prevVideoId])

	const handleStopClick = () => {
		prevVideoId.current = null
		videoSetter(() => {
			return { link: null, isPlaying: false, type: null }
		})
	}

	return (
		<div
			className={`flex flex-column flex-nowrap videoPlayer ${onBottom && 'invisible'} ${isStarted && 'activated'}`}
		>
			<div className="social-helper" />
			{isPlaying ? (
				<>
					{link && type && ComponentSelector(link)[type]}
					<FaStopCircle size={100} onClick={handleStopClick} />
				</>
			) : (
				<p>Please select a video to play</p>
			)}
		</div>
	)
}
