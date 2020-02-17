import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  renderButton = () => {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
    }
  };
  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/post">Post A Coment</Link>
        </li>
        <li>
          <Link to="/">{this.renderButton()}</Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
