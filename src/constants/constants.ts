import type { PageLinksType, SocialLinksType } from '@types'

export const YT_API_KEY = import.meta.env.VITE_YT_API_KEY
export const YT_PLAYLIST_ID = import.meta.env.VITE_YT_PLAYLIST_ID
export const YT_SITE = import.meta.env.VITE_YT_SITE

export const INSTA_API_KEY = import.meta.env.VITE_INSTA_API_KEY
export const INSTA_ACCESS_TOKEN = import.meta.env.VITE_INSTA_ACCESS_TOKEN
export const INSTA_SITE = import.meta.env.VITE_INSTA_SITE

export const pageLinks: PageLinksType = ['Youtube', 'Instagram']
export const socialLinks: SocialLinksType = [
	{ socialName: 'Youtube', link: 'https://www.youtube.com/@ElectricalCyberTunes' },
	{ socialName: 'TikTok', link: 'https://www.tiktok.com/@electricalcybertunes' },
	{ socialName: 'Reddit', link: 'https://www.reddit.com/user/CapitalCover9006/' },
	{ socialName: 'Instagram', link: 'https://www.instagram.com/electricalcybertunes' },
	{ socialName: 'Facebook', link: 'https://www.facebook.com/ECybertunes' },
	{ socialName: 'X', link: 'https://x.com/ECybertunes' }
]

export const errorMessages = {
	youtube: 'Something went wrong with the Youtube API, please try again later!',
	instagram: 'Something went wrong with the Instagram API, please try again later!'
}
