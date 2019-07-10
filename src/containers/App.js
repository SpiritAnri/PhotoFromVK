import React, { Component } from 'react'
import PageContainer from './PageContainer';
import UserContainer from './UserContainer';

//import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer/>
      </div>
    )
  }
}

export default App;