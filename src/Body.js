import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Info } from './Pages'

function Body(){
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/info" component={Info} />
			{/* <Route path="/channel/:channel" component={Home} /> */}
			<Redirect from="*" to={'/'} />
		</Switch>
	)
}

export default Body