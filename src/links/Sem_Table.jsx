import React, { useState } from "react";
import Header from "./Header"
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Sem_Table = () => {
  const navigate = useNavigate()
  const Location = useParams()
  
  const [AllSemData,SetAllSemData] = useState()
  const [STUDENTDATA,SetStudentData] = useState()

  const getData = async ()=>{
    const response = await axios.get(`http://localhost:3000/get_all_student_data/${Location.rollnumber}/${Location.year}/${Location.branch}/${Location.regulation}`)
    SetAllSemData(response.data.SEM_DATA)
    SetStudentData(response.data.studentData)
  }
  useEffect(()=>{
    getData()
  },[])
// console.log(AllSemData,STUDENTDATA);
console.log("sjdjs",AllSemData);

  return (
    <>
    <Header></Header>
    <div className="container welcome-section">
          <h1>SEMESTER WISE STUDENT PERFORMANCE DATA</h1>
          
        </div>
        <div className="container student_details" style={{overflow: "auto"}}>

        <table class="table table-striped">
            <tr>
            <th> UserName </th>
            <th> Full Name</th>
            <th> Mobile </th>
            <th> Regulation </th>
            <th>section</th>
            <th>Gender</th>
            <th> Email </th>
            <th> Photo </th>

            </tr>

            <tr>
                <td>{STUDENTDATA && STUDENTDATA[0].rollnu}</td>
                <td>{STUDENTDATA && STUDENTDATA[0].name}</td>
                <td>{STUDENTDATA && STUDENTDATA[0].PhoneNumber}</td>
                <td>{Location.regulation}</td>
                <td>{STUDENTDATA && STUDENTDATA[0].Branch_section}</td>
                <td>{STUDENTDATA && STUDENTDATA[0].gender}</td>
                <td>{STUDENTDATA && STUDENTDATA[0].email}</td>

                <td><img src={STUDENTDATA && STUDENTDATA[0].photo} alt="" srcset="" style={{height:'5rem'}}/></td>
            </tr>
        </table>
        </div>
    <div className="container semtable">
    <hr />
      {
       AllSemData && Object.keys(AllSemData).map((SEM,index)=>(
          <>
             <h2> YEAR/SEM: {SEM} </h2>
      <h3> SGPA : {AllSemData[SEM][0].gpa} </h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th> Subject Name </th>
            <th> Subject Status</th>
            <th> Credits </th>
            <th> Grade </th>
          </tr>
        </thead>
        <tbody>
          {
            AllSemData[SEM][0]['subjects'].map((key,index)=>(
              <tr>
              <td>{key.name}</td>
              <td>{key.status}</td>
              <td>{key.credits}</td>
              <td>{key.grade}</td>
            </tr>
            ))
          }
        
    
        </tbody>
      </table>
      <hr />
          </>
       ))
      }
   
    </div>
    
    </>

  );
};

export default Sem_Table;
