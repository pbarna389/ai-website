import { createContext } from 'react'

import type { VideoContextType } from './types'

const initialContextState: VideoContextType = {
	videoState: {
		type: null,
		link: null
	},
	videoSetter: () => null
}

export const VideoContext = createContext<VideoContextType>(initialContextState)
