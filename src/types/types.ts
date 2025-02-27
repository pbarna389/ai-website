/* eslint-disable @typescript-eslint/no-unused-vars */
enum SocialNamesEnum {
	Youtube = 'Youtube',
	Instagram = 'Instagram',
	Facebook = 'Facebook',
	TikTok = 'TikTok',
	X = 'X',
	Reddit = 'Redit'
}

export type SocialNames = keyof typeof SocialNamesEnum

export type PageLinksType = Exclude<SocialNames, 'X' | 'Facebook' | 'Reddit'>[]

type SocialVariantsTypeSelector<KeyType extends string, AssignedType> = {
	[key in KeyType]: AssignedType
}

export type SocialPickTypes = SocialVariantsTypeSelector<SocialNames, JSX.Element>

export type SocialLinksType = {
	link: string
	socialName: SocialNames
	[key: string]: string | SocialNames
}[]
