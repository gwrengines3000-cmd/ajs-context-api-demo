
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserProvider'
import { ThemeProvider } from './contexts/ThemeProvider'
    

import App from './App.jsx'
import './index.css'

const root = document.querySelector('#root')
createRoot(root).render(
<StrictMode>
    <UserProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </UserProvider>
</StrictMode>
)
