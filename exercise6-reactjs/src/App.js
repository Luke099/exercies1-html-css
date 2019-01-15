import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListRecipe from './components/ListRecipe';
import Detail from './components/Detail';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { connect } from 'react-redux';
import { fetch } from './redux/ActionCreators';
import Main from './components/Main';
const store = ConfigureStore();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
