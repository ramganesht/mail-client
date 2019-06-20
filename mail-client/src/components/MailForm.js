import React, {Component} from 'react';
import { connect } from 'react-redux';

import {closeForm, saveMail, sendMail} from '../actions';

class MailForm extends Component{
	constructor() {
		super();
		this.toInput = React.createRef();
		this.subjectInput = React.createRef();
		this.textInput = React.createRef();
	}
	// saveMail(toInput, subjectInput, textInput){
	// 	 alert(toInput+subjectInput+textInput);
	// }
	render(){
		let showForm = !this.props.showForm ? "mail-form show-form" : "mail-form";
		return (
			<div className={showForm}>
				<div className="close-icon-holder">
					<div onClick={this.props.closeForm} className="close-icon">X</div>
				</div>
			    <input type="text" placeholder="To.." ref={this.toInput}/>
			    <input type="text" placeholder="Subject.." ref={this.subjectInput}/>
				<textarea rows="10" placeholder="Your message..." ref={this.textInput}></textarea>
				<div className="btn-holder">
					<button onClick={() => this.props.saveMail(this.toInput.current.value, this.subjectInput.current.value, this.textInput.current.value)}>Save</button>
					<button onClick={() => this.props.sendMail(this.toInput.current.value, this.subjectInput.current.value, this.textInput.current.value)}>Send</button>
				</div>
		    </div>
    	);
	}
}

const mapStateToProps = (state) => {
  return {...state};
}
const mapDispatchToProps = (dispatch) => {
  return {
    closeForm: () => dispatch(closeForm()),
    saveMail: (toInput, subjectInput, textInput) => dispatch(saveMail(toInput, subjectInput, textInput)),
    sendMail: (toInput, subjectInput, textInput) => dispatch(sendMail(toInput, subjectInput, textInput))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MailForm)
