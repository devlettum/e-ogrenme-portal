import React, { useEffect } from "react";
import "./Teachers.css";

import {
  CardBody,
  CardTitle,
  Row,
  Container,
  CardGroup,
  Card,
  CardText,
  Col,
} from "reactstrap";



const Teachers = (props) => {
  
  var teachers = [];
  useEffect(() => {
    props.teacherList.forEach((teacher) => teachers.push(teacher));
  });
  return (
    <Container>
      <Row>
        <div className="col-sm-12">
        <h4 style={{ marginTop: "10px" }} className="card-header--title">
            Trakya Üniversitesi E-Öğrenme Portalı - <b>AKADEMİSYENLER</b>
          </h4>
          <CardGroup style={{ width: "100%" }}>
          {props.teacherList.map((teacher) => (
            <Col className="col-4" key={teacher.teacherId}>
              <Card style={{left:'50px',top:'50px',margin: '10px',width: '280px',height:'auto'}}>
                <img
                  alt=""
                  src={require(`./img/${teacher.imageId}.jpg`)}
                  
                  className="card-header"
                  width="100%"
                />
                <CardBody className="card-body body-content">
                  <CardTitle
                    className="card-header--title card-header--title-text"
                    tag="h5"
                  >
                    {teacher.teacherFullName}
                  </CardTitle>

                  <CardText className="card-text">
                    <b>Akademik Ünvan : {teacher.academicTitle}</b>
                    <br/>
                    Doğum Tarihi : {teacher.teacherBirthDate}
                    <br/>
                    Doğum Yeri : {teacher.teacherBirthCity}
                  </CardText>
            
                
                </CardBody>
              </Card>
              </Col>
          ))};
          </CardGroup>
        </div>
      </Row>
    </Container>
  );
}
export default Teachers;