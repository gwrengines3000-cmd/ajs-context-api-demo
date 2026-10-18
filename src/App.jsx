import Layout from './components/Layout'
import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import { NotificationProvider } from './contexts/NotificationContext'
import NewNotification from './components/NewNotification'
import NotificationList from './components/NotificationList'

const App = () => {

	return (
	<ThemeProvider>
		<NotificationProvider>
			<Layout />
			<NewNotification />
			<NotificationList />
		</NotificationProvider>
	</ThemeProvider>
	)
}

export default App
