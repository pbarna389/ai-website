import { createContext } from 'react'

import type { VideoContextType } from './types'

const initialContextState: VideoContextType = {
	prevVideoId: { current: null },
	videoState: {
		type: null,
		isPlaying: false,
		link: null
	},
	videoSetter: () => null
}

export const VideoContext = createContext<VideoContextType>(initialContextState)
