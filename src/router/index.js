import React, { Component } from 'react'
import {Link, Route, Redirect, Switch} from "react-router-dom";

import {DialogLayout} from '../components/Dialog'
import Bundle from '../components/Bundle/bundle.js'
import * as utils from '../utils/util'
import Frame from 'bundle-loader?lazy&name=home!./frame';
import Home from 'bundle-loader?lazy&name=home!./home/home.js';
import Home1 from 'bundle-loader?lazy&name=home!./home1/home.js';
import Home2 from 'bundle-loader?lazy&name=home!./home2/home.js';
import '../styles/babel.css'
class App extends Component {
	render(){
		return (
			<div className='content'>				
				<Route path="/" component={utils.syncBundle(Frame)} />
				<Switch>
					<Redirect exact from="/" to="/home"></Redirect>
					<Route path="/home" component={utils.syncBundle(Home)} />
					<Route path="/home1" component={utils.syncBundle(Home1)} />
					<Route path="/home2" component={utils.syncBundle(Home2)} />
					
				</Switch>
			</div>
		)
	}
}

module.exports = App