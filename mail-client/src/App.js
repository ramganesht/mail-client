import React, {Component} from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import MailList from './components/MailList';
import Header from './components/Header';
import MailForm from './components/MailForm';

import {getMailList, closeForm} from './actions'

class App extends Component{

  componentWillMount(){
    this.props.getMails();
  }

  render(){
    return(
        <BrowserRouter>
             <div>
              <MailForm/>
              <Header/>
              <div className="folders">
                  <button onClick={this.props.closeForm} className="compose-btn">Compose</button>
                  <NavLink onClick={this.props.getMails} exact={true} to="/">Inbox</NavLink>
                  <NavLink to="/sent">Sent Mail</NavLink>
                  <NavLink to="/draft">Draft</NavLink>
                  <NavLink to="/trash">Trash</NavLink>
              </div>
              <Route exact path="/" render={props => <MailList data={this.props}/>}/>
              <Route path="/sent" render={props => <MailList data={this.props}/>}/>
              <Route path="/draft" render={props => <MailList data={this.props}/>}/>
              <Route path="/trash" render={props => <MailList data={this.props}/>}/>
            </div> 
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMails: (e) => dispatch(getMailList()),
    closeForm: () => dispatch(closeForm())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
