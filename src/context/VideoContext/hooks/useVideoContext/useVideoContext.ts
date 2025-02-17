import { useContext } from 'react'

import { VideoContext } from '@context'

export const useVideoContext = () => {
	const context = useContext(VideoContext)

	if (!context) throw new Error('VideoContextProvider not found!')

	return context
}
