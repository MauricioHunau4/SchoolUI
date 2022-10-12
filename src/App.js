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
      <Route exact path="/:id" element={<ForEach />} />
    </Routes>
  </Router>;
}

export default App;
