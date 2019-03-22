import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/Navbar';
import Display from './Components/display';
import Body from './Components/body';
import DrawingBoard from './Components/Drawingboard';


class App extends Component {
  render() {
    return (
      <div className="App">
       <NavigationBar/>
       <Display/>
       <Body/>
       <DrawingBoard/>
      </div>
    );
  }
}

export default App;
