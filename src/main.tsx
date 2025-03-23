import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { I18nextProvider } from 'react-i18next'
import i18next from './locale/i18next'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<I18nextProvider i18n={i18next}>
		<Provider store={store}>
			<RouterProvider router={router} future={{v7_startTransition: true}}/>
		</Provider>
	</I18nextProvider>
)
