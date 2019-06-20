import React, {Component} from 'react';
import { connect } from 'react-redux';

import MailDetail from './MailDetail'
import {getEmail, getSentEmail, getDraftEmail, deleteMail} from '../actions'

class MailList extends Component{

	// getEmail(id){console.log(id);}

	componentWillMount(){
		let mailData = this.props.data;
		if(window.location.pathname === '/sent'){
			mailData = this.props.data.sentMails;
			if(mailData && mailData[0]  && mailData[0].id){
				this.props.getSentEmail(mailData[0].id);
			}
		}else if(window.location.pathname === '/draft'){
			mailData = this.props.data.draftMails;
			if(mailData && mailData[0]  && mailData[0].id){
				this.props.getDraftEmail(mailData[0].id);
			}
		}else if(window.location.pathname === '/'){
			mailData = this.props.data.mails;
			if(mailData && mailData[0]  && mailData[0].id){
				this.props.getEmail(mailData[0].id);
			}
		}
	  }

	render(){
		console.log(this.props);
		let mailsData = this.props.data.mails;
		if(window.location.pathname === '/sent'){
			mailsData = this.props.data.sentMails;
		}else if(window.location.pathname === '/draft'){
			mailsData = this.props.data.draftMails;
		}
		let pageLength = 6;
		const mailItems = mailsData.length ? (
				mailsData.map(mail => {
					var mailDate = new Date(mail.time);
					mailDate = mailDate.toLocaleDateString();
					return (
						<div className='mail' key={mail.id} onClick={() => this.props.getEmail(mail.id)}>
							<em className="from">{mail.from}</em>
							<div className="subject">{mail.subject}</div>
							<em className="date">{mailDate}</em>
							<button className='deleteMail' onClick={() => this.props.deleteMail(mail.id, mail.type)}>Delete</button>
						</div>
						)
				})
			) : (<em>You dont have any emails</em>)
		return(
				<div className="mailListHolder">
					<div className="mailList">
						<input placeholder="Search..."/>
						<select>
							<option>Newest on top</option>
							<option>Oldest on top</option>
						</select>
						{mailItems}
						<button>Prev</button><button>Next</button>
					</div>
					<MailDetail mail={this.props.data.mail}/>
				</div>
			)
	}
}
const mapStateToProps = (state) => {
  return {...state};
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSentEmail: (id) => dispatch(getSentEmail(id)),
    getDraftEmail: (id) => dispatch(getDraftEmail(id)),
    getEmail: (id) => dispatch(getEmail(id)),
    deleteMail: (id, type) => dispatch(deleteMail(id, type))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MailList)
