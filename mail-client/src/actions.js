import axios from 'axios';

const mailListURL = 'https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/inbox';
const mailURL = 'https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/mails/';
export const getMailList = () => {
	return dispach => {
		axios.get(mailListURL)
		.then(
			res => {
				let data = {mails:res.data};
				if(res && res.data && res.data[0] && res.data[0].id){
					axios.get(mailURL + res.data[0].id)
					.then(
						res => {
							data.mail = res.data;
							dispach(addTodoSuccess(data));
						}
					);
				}else{
					dispach(addTodoSuccess(data));
				}
			}
		);
	}
}

const addTodoSuccess = mails => ({
  type: 'INBOX',
  payload: {...mails}
});

export const getEmail = id => {
	return dispach => {
		if(window.location.pathname !== '/'){
			dispach(getEmailSuccess(id));
		}else{
			axios.get(mailURL + id)
			.then(
				res => {
					dispach(getEmailSuccess(res.data));
				}
			)
		}
	}
};

const getEmailSuccess = mail => ({
  type: 'GETMAIL',
  payload: ((typeof mail) === "object") ? {...mail} : mail
});

export const closeForm = () => ({
	type: 'SHOWFORM'
});

export const sendEmail = mail => ({
  type: 'SENDMAIL',
  payload: {...mail}
});

export const getSentEmail = id => ({
  type: 'GETSENTMAIL',
  id: id
});

export const deleteMail = (id, type) => {
	alert(id + type);
};

export const getDraftEmail = id => ({
  type: 'GETDRAFTMAIL',
  id: id
});

export const saveMail = (toInput, subjectInput, textInput) => ({
  type: 'SAVEMAIL',
  payload: {subject:subjectInput, from:'appuser@tcs.com', to:toInput, body:textInput, time:(new Date()).toISOString()}
});

export const sendMail = (toInput, subjectInput, textInput) => ({
  type: 'SENDMAIL',
  payload: {subject:subjectInput, from:'appuser@tcs.com', to:toInput, body:textInput, time:(new Date()).toISOString()}
});