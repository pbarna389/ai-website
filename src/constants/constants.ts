import type { PageLinksType, SocialLinksType } from '@types'

export const YT_API_KEY = import.meta.env.VITE_YT_API_KEY
export const YT_PLAYLIST_ID = import.meta.env.VITE_YT_PLAYLIST_ID
export const YT_SITE = import.meta.env.VITE_YT_SITE

export const INSTA_API_KEY = import.meta.env.VITE_INSTA_API_KEY
export const INSTA_ACCESS_TOKEN = import.meta.env.VITE_INSTA_ACCESS_TOKEN
export const INSTA_SITE = import.meta.env.VITE_INSTA_SITE

export const pageLinks: PageLinksType = ['Youtube', 'Instagram']
export const socialLinks: SocialLinksType = [
	{ socialName: 'Youtube', link: 'http://www.youtube.com' },
	{ socialName: 'Instagram', link: 'http://www.instagram.com' },
	{ socialName: 'TikTok', link: 'http://www.tiktok.com' },
	{ socialName: 'Facebook', link: 'http://www.facebook.com' }
]
