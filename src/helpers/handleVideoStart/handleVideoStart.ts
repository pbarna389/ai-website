import type { VideoStateType } from 'context/VideoContext/types'
import type { SocialNames } from 'types/types'

export const handleVideoStart = (
	videoData: {
		currentLink: string | null
		newLink: string
		prevVideo: React.MutableRefObject<string | null>
		videoSetter: React.Dispatch<React.SetStateAction<VideoStateType>>
	},
	type: Extract<SocialNames, 'Youtube' | 'Instagram'> | null
) => {
	const { currentLink, newLink, prevVideo, videoSetter } = videoData
	if (newLink !== currentLink) {
		prevVideo.current = currentLink

		videoSetter({
			type,
			isPlaying: true,
			link: newLink
		})
	}
}
