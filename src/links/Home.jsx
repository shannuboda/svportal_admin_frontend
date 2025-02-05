import React, { useEffect, useState } from 'react'

import Header from './Header';
import './HeaderStyling.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    const [response, setResponse] = useState()
    const Navigate = useNavigate()
     useEffect(()=>{
    if(!localStorage.getItem('AdminData'))
    {
        Navigate('/')
    }
    else{
        setResponse(JSON.parse(localStorage.getItem('AdminData')))        
    }
  },[Navigate])
  
  return (
    <>
   
   {
    response && (<div>
      <Header></Header>
    <div className="container">
<div className="card">
<h2 className="title">Welcome To Admin Panel</h2>
<h5 className="subtitle">{response.ANAME}</h5>
<hr />

<h4 className="section-title">General Information</h4>
<div className="table-container">
  <table>
    <tbody>
      <tr>
        <td><strong>Name</strong></td>
        <td>{response.ANAME}</td>
        <td><strong>Designation</strong></td>
        <td>{response.designation}</td>
      </tr>
      <tr>
        <td><strong>Access Criteria</strong></td>
        <td>{response.Accs_criteria}</td>
        <td><strong>Associate ID</strong></td>
        <td>{response.AID}</td>
      </tr>
      <tr>
        <td><strong>Username / Mail</strong></td>
        <td>{response.mail}</td>
        <td><strong>Phone Number</strong></td>
        <td>{response.mobile}</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="button-container">
  <a href="data/login_admin_data_edit.php?id=admin" className="update-button">
    Update Your Profile
  </a>
</div>
</div>
</div>
  </div>)
   } 
    </>
  )
}

export default Home
