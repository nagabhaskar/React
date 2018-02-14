/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/



import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Topic = ({match}) => {
  return{
    <div> {match.params.topicId}</div>
  }
}


<div>Topics</div>;

const Topics = ({match}) => {
  console.log(match);
  return(
      <div>
        <h3>Topics</h3>
        <ul>
          <li><Link to="{'${match.url}/rendering'}>Rendering with React</Link></li>
          <li><Link to="topics/components">Components</Link></li>
          <li><Link to="topics/propsVsState">Props vs state</Link></li>
          </ul>
          </div>

        
        
        </div>;

  )
}

const App = () =>{
  return(){
  <router>
    <div>
      <ul>
        <li>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/About">About </Link></li>
          <li><Link to="/Topics">Topics </Link></li>
        </li>
      </ul>
    </div>
    </router>

}
}
export default App;