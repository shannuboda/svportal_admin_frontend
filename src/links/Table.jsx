import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./TableStyle.css";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Table = () => {
  const [student_data, setStudentData] = useState();
  const navigate = useNavigate()
  const getData = async () => {
    const stu_Data = await axios.get(
      "https://backend-project-1nk6.onrender.com/db1/students"
    );
    setStudentData(stu_Data.data);
    console.log(student_data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="marksheet-table-container">
      <Header></Header>
   
      <div className="container">
        <div className="welcome-section">
          <h1>Welcome to the Marksheets Page</h1>
          <p>
            Select your semester from the dropdown below to view the marksheet
            data.
          </p>
        </div>

        <div class="table-container">
          <table class="student-table" id="data-table">
            <thead class="dark-header">
              <tr id="headerRow">
                <th onclick="sortTable(0)">RollNumber</th>
                <th onclick="sortTable(1)">Name</th>
                <th onclick="sortTable(2)">Regulation</th>
                <th onclick="sortTable(3)">Branch</th>
                <th onclick="sortTable(3)">Academic Year</th>
                <th >View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {student_data &&
                student_data.map((val, index) => (
                  <tr key={index}>
                    <td>{val.username}</td>
                    <td>{val.name}</td>
                    <td>{val.regulation}</td>
                    <td>{val.branch}</td>
                    <td>{val.year}</td>

                    <td>
                      <div class="button-container view-button" onClick={()=>navigate(`/sem_table/${val.username}/${val.year}/${val.branch}/${val.regulation}`)}>
                       
                          View
                       
                      </div>
                    </td>
                    <td>
                      <div class="button-container b">
                        <a
                          href="data/login_student_data_edit.php?id=19KH1A0512"
                          class="edit-button"
                        >
                          Edit
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="button-container c">
                        <a
                          href="data/login_student_data_delete.php?id=19KH1A0512"
                          class="delete-button"
                        >
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>{" "}
        </div>
      </div>
    </div>
  );
};
export default Table;
