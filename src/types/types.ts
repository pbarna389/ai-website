/* eslint-disable @typescript-eslint/no-unused-vars */
enum SocialNamesEnum {
	Youtube = 'Youtube',
	Instagram = 'Instagram',
	Facebook = 'Facebook',
	TikTok = 'TikTok'
}

export type SocialNames = keyof typeof SocialNamesEnum

export type PageLinksType = Exclude<SocialNames, 'TikTok' | 'Facebook'>[]
export type SocialLinksType = Exclude<SocialNames, 'TikTok'>[]

type SocialVariantsTypeSelector<KeyType extends string, AssignedType> = {
	[key in KeyType]: AssignedType
}

export type SocialPickTypes = Omit<SocialVariantsTypeSelector<SocialNames, JSX.Element>, 'TikTok'>
