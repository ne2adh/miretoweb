import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './StartPage.js';
import Running from './Running.js';
import Finish from './Finish.js';


class App extends Component {
  
	constructor(props){
		super(props);
		this.state = {disp:'start',score:0};
		this.handleState= this.handleState.bind(this);
	}
	handleState(change,rest=0){
		this.setState({disp:change,score:rest});
	}
	render() {
		return (
			<div className="App">			
			<BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
				<Switch>
					<Route exact={true} path={'/'} component={StartPage} />
					<Route exact={true} path={'/running'} component={Running} />
					<Route exact={true} path={'/finish'} component={Finish} />
				</Switch>
			</BrowserRouter>
			
		  </div>
		);
  	}
}

export default App;
