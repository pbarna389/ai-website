import type { VideoStateType } from 'context/VideoContext/types'
import type { Dispatch, SetStateAction } from 'react'

export const handleVideoPlayer = (
	callback: {
		args: []
		event: 'command'
		func: 'pauseVideo' | 'playVideo'
	},
	state: { isPlaying: boolean; setter: Dispatch<SetStateAction<VideoStateType>> }
) => {
	const iFrame: HTMLIFrameElement | null = document.querySelector('iframe') as HTMLIFrameElement

	const { isPlaying, setter } = state

	setter((prev) => {
		return { ...prev, isPlaying: !isPlaying }
	})

	iFrame?.contentWindow?.postMessage(JSON.stringify(callback), '*')
}
