import Layout from './components/Layout'
import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'

const App = () => {

	return (
	<ThemeProvider>
		<Layout />
	</ThemeProvider>
	)
}

export default App
