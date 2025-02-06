import React from "react";
import Header from "./Header"
const Sem_Table = () => {
  return (
    <>
    <Header></Header>
    <div className="container welcome-section">
          <h1>SEMESTER WISE STUDENT PERFORMANCE DATA</h1>
          
        </div>
        <div className="container student_details">
        <table class="table table-striped">
            <tr>
            <th> UserName </th>
            <th> Full Name</th>
            <th> Password </th>
            <th> Regulation </th>
            <th>section</th>
            <th>Gender</th>
            <th> Email </th>
            </tr>

            <tr>
                <td>19KH1A0512</td>
                <td>Shanmukha Subramani</td>
                <td>shannu</td>
                <td>R19</td>
                <td>CSE-A</td>
                <td>M</td>
                <td> bsmani512@gmail.com </td>
            </tr>
        </table>
        </div>
    <div className="container semtable">
      <hr />
      <h2> YEAR/SEM: 2_1 </h2>
      <h3> SGPA : 8 </h3>

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
          <tr>
            <td>Mathematical Foundations of Computer Science</td>
            <td>P</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Digital Logic Design</td>
            <td>P</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Design Thinking</td>
            <td>P</td>
            <td>2</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Database Management Systems</td>
            <td>P</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Object Oriented Programming Through Java</td>
            <td>P</td>
            <td>3</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Python Programming</td>
            <td>P</td>
            <td>3</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Universal Human Values</td>
            <td>P</td>
            <td>2</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Database Management Systems Lab</td>
            <td>P</td>
            <td>1.5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Object Oriented Programming Through Java Lab</td>
            <td>P</td>
            <td>1.5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Python Programming Lab</td>
            <td>P</td>
            <td>1.5</td>
            <td>10</td>
          </tr>
          {/* Empty Row with colspan to maintain structure */}
          <tr>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td colSpan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </>

  );
};

export default Sem_Table;
