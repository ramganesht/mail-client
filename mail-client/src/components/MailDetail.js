import React, {Component} from 'react';

export default class MailDetail extends Component{

	render(){
		console.log(this.props);
		let data = {};
		if(this.props && this.props.mail){
			data =  this.props.mail;
		}
		return(
			<div className="mailDetail">
				<div className="mailSubject">{data.subject}</div>
				<div className="mailFrom">{data.from}</div>
				<div className="mailTime">{data.time}</div>
				<div className="mailTo">To: {data.to}</div>
				<div className="mailBody">{data.body}</div>
			</div>
			)
	}
}
