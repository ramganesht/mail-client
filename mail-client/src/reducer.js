let initState = {
	    mails: [],
	    mail:{},
	    showForm: false,
	    sentMails:[],
	    draftMails:[]
	  };

const reducer = (state = initState, action) => {
	console.log(action);
	switch (action.type){
		case "INBOX":
			if(window.location.pathname === '/sent'){
				for(let i=0; i<state.sentMails.length;i++){
					if(state.sentMails[i].id === action.payload){
						return {...state, mail:state.sentMails[i]}
					}
				}
			}
			if(window.location.pathname === '/draft'){
				for(let i=0; i<state.draftMails.length;i++){
					if(state.draftMails[i].id === action.payload){
						return {...state, mail:state.draftMails[i]}
					}
				}
			}
			return {...state, mails:action.payload.mails, mail:action.payload.mail}
		case "GETMAIL":
			if(window.location.pathname === '/sent'){
				for(let i=0; i<state.sentMails.length;i++){
					if(state.sentMails[i].id === action.payload){
						return {...state, mail:state.sentMails[i]}
					}
				}
			}
			if(window.location.pathname === '/draft'){
				for(let i=0; i<state.draftMails.length;i++){
					if(state.draftMails[i].id === action.payload){
						return {...state, mail:state.draftMails[i]}
					}
				}
			}
			return {...state, mail:action.payload}
		case "SHOWFORM":
			return {...state, showForm:!state.showForm}
		case "SENDMAIL":
			let newState = {...state};
			newState.sentMails.push({...action.payload, type:'sent', id:state.sentMails.length+1});
			console.log(newState);
			// return {...newState, mail:{...action.payload, id:state.sentMails.length+1}}
			return {...newState}
		case "SAVEMAIL":
			let anotherState = {...state};
			anotherState.draftMails.push({...action.payload, type:'draft', id:state.draftMails.length+1});
			console.log(anotherState);
			// return {...anotherState, mail:{...action.payload, id:state.draftMails.length+1}}
			return {...anotherState}
		case "DELETEMAIL":
		
		case "GETSENTMAIL":
			let sentMail = {};
			for(let i =0 ;i < state.sentMails.length; i++){
				if(state.sentMails[i].id === action.id){
					sentMail = state.sentMails[i];
					return {...state, mail:sentMail};
				}
			};
			return {...state, mail:sentMail};
		case "GETDRAFTMAIL":
			let draftMail = {};
			for(let x =0 ;x < state.draftMails.length; x++){
				if(state.draftMails[x].id === action.id){
					draftMail = state.draftMails[x];
					return {...state, mail:draftMail};
				}
			};
			return {...state, mail:draftMail};
		default:
			return state
	}
}

export default reducer;