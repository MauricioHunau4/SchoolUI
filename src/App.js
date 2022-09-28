import React from 'react';
import Main from './components/Main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'

import ForEach from './components/ForEach';

function App() {
  return <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/foreach" element={<ForEach />} />
      {/*<Route exact path="/:id" element={<Entities />} />*/}
    </Routes>
  </Router>;
}

export default App;

/*{data ===null?<></> : 
      data[0].entitie === "school"? <Route exact path ="/school" element={<School/>}/>: 
      data[0].entitie === "professor" ? <Route exact path ="/professor" element={<Professor/>}/>: 
      data[0].entitie === "student" ? <Route exact path ="/student" element={<Student/>}/>:
      <></>
      } */
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div> 
*/