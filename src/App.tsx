import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import auth from './auth';

function App() {
  return (
    auth()
  );
}

export default App;
