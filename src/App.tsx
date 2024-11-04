import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import auth from './auth';

function App() {
  return (
    <Routes >
      <Route path="https://new-ap95wwxbo-blueand13s-projects.vercel.app/" element={auth()} ></Route>
    </Routes>
  );
}

export default App;
