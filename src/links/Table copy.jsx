import React from "react";
import DataTable from "react-data-table-component";
import "./TableStyle.css";
import Header from "./Header";
const Table = () => {
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
                <th onclick="sortTable(3)">Section</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19KH1A0512</td>
                <td>Shanmukha Subramani</td>
                <td>R19</td>
                <td>CSE-A</td>
                <td>
                  <div class="button-container">
                    <a
                      href="data/login_student_data_view.php?id=19KH1A0512"
                      class="view-button"
                    >
                      View
                    </a>
                  </div>
                </td>
                <td>
                  <div class="button-container">
                    <a
                      href="data/login_student_data_edit.php?id=19KH1A0512"
                      class="edit-button"
                    >
                      Edit
                    </a>
                  </div>
                </td>
                <td>
                  <div class="button-container">
                    <a
                      href="data/login_student_data_delete.php?id=19KH1A0512"
                      class="delete-button"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>{" "}
        </div>
      </div>
    </div>
  );
};
export default Table;
