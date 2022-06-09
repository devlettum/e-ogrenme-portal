import React, { useEffect } from "react";
import { Table } from 'reactstrap';

const Students = (props) =>{
  var students = [];
  useEffect(() => {
    props.studentList.forEach((student) => students.push(student));
  });

  
    return (
    <div className="col-sm-12">
      <h4 style={{ marginTop: "10px" }} className="card-header--title">
            Trakya Üniversitesi E-Öğrenme Portalı - <b>ÖĞRENCİLER</b>
          </h4>
       <Table style={{marginTop:'70px'}} striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Adı Soyadı</th>
            <th>Öğrenci Numarası</th>
            <th>Sınıf</th>
          </tr>
        </thead>
        <tbody>
        {props.studentList.map((student) => (
            <tr key={student.studentId}>
            <th scope="row">{student.studentId}</th>
            <td>{student.studentFullName}</td>
            <td>{student.studentNumber}</td>
            <td>3. Sınıf</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>);
}
export default Students;