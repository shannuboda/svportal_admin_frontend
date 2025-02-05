import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './links/Header';
import './links/HeaderStyling.css'
import { Route, Routes } from 'react-router-dom';
import Home from './links/Home';
import Login from './links/Login';
import Table from './links/Table';

const App = () => {
  return (
  <>
  
 <Routes>
  <Route path='/' element={<Login></Login>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/table' element={<Table></Table>}></Route>


 </Routes>
      
  </>
  );
};

export default App;
