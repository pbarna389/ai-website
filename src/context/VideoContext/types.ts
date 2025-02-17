import type { Dispatch, SetStateAction } from 'react'

import type { SocialNames } from 'types/types'

export type VideoStateType = {
	link: string | null
	type: Extract<SocialNames, 'Youtube' | 'Instagram'> | null
}

export type VideoContextType = {
	videoSetter: Dispatch<SetStateAction<VideoStateType>>
	videoState: VideoStateType
}
