import List from './List';
import './App.css';
import './list.css'
import Newlist from './Newlist';
import React from 'react'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Newlist/>}></Route>
        <Route path='/:list' element={<List></List>}></Route>
      </Routes>
    </div>
  );
}

export default App;
