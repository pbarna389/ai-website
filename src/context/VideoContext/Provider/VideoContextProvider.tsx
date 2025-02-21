import { useMemo, useRef, useState } from 'react'

import { VideoContext } from '../VideoContext'

import type { VideoStateType } from '../types'

const initialState = {
	type: null,
	isPlaying: false,
	link: null
}

export const VideoContextProvider = ({ children }: React.PropsWithChildren) => {
	const [data, setData] = useState<VideoStateType>(initialState)

	const prevVideoId = useRef<string | null>(null)

	const contextValue = useMemo(
		() => ({ videoState: data, videoSetter: setData, prevVideoId }),
		[data, setData]
	)

	return <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>
}
