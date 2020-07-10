import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
	// switch faz com que apenas uma rota seja chamada ao mesmo tempo
	<BrowserRouter>
		<Switch>
			{/* so vai chamar a rota main quando for exatamente igual a / -> para nao prejudicar a proxima rota */}
			<Route exact path="/" component={Main} />
			<Route path="/products/:id" component={Product} />
		</Switch>
	</BrowserRouter>
)

export default Routes
