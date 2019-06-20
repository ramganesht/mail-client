import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Header extends Component{
	render(){
		return (<div className="app-header">
					<span>Mail Client Using </span>
					<img src={logo} />
				</div>);
	}
}