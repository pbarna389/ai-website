import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { queryClient } from '@services'

import { QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { Header, Footer } from '@components'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</QueryClientProvider>
	</StrictMode>
)
