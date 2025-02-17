import { useMemo, useState } from 'react'

import { VideoContext } from '../VideoContext'

import type { VideoStateType } from '../types'

const initialState = {
	type: null,
	link: null
}

export const VideoContextProvider = ({ children }: React.PropsWithChildren) => {
	const [data, setData] = useState<VideoStateType>(initialState)

	const contextValue = useMemo(() => ({ videoState: data, videoSetter: setData }), [data, setData])

	return <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>
}
