import React from 'react'

import Main from './pages/main'
import Routes from './routes'

import Header from './components/Header'
import './styles.css'

const App = () => (
	<div>
		<Header />
		{/* <Main /> */}
		<Routes />
	</div>
)

export default App

// api=> https://rocketseat-node.herokuapp.com/api
