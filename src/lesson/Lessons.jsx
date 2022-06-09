import React, { useEffect } from "react";
import {
  Button,
  CardBody,
  CardTitle,
  CardGroup,
  Card,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import "./Lessons.css";
import {useNavigate } from "react-router-dom";

const Lessons = (props) => {
  let navigate = useNavigate();
  var lessonList = [];
  const goDetail = (id) =>{
    navigate(`/lessons/${id}`, { replace: false });

  }
  useEffect(() => {
    // lessonList = props.lessonList;
    props.lessonList.forEach((lesson) => lessonList.push(lesson));
  });

    return (
      <Container>
        <Row>
          <div className="col-sm-12">
            <h4 style={{ marginTop: "10px" }} className="card-header--title">
              Trakya Üniversitesi E-Öğrenme Portalı - <b>Derslerim</b>
            </h4>
            <CardGroup style={{ width: "100%" }}>
              { props.lessonList.map((lesson) => (
                <Col className="col-4" key={lesson.lessonId}>
                  <Card style={{width: "370px",height:'540px'}}  >
                    <img
                      alt={"./img/" + lesson.lessonId + ".jpeg"}
                     
                      src={require(`./img/${lesson.lessonId}.jpeg`)}
                      className="card-header"
                      width="100%"
                    />
                    <CardBody className="card-body body-content">
                      <CardTitle className="card-header--title card-header--title-text" tag="h5">
                        {lesson.lessonName}
                      </CardTitle>

                      <CardText className="card-text">{lesson.description}</CardText>
                      <span>Öğrenci Sayısı : {lesson.studentCount}</span>
                      <Button 
                      onClick={()=>goDetail(lesson.lessonId)}
                      className="button-primaryy">Derse Git</Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              ;
            </CardGroup>
          </div>
        </Row>
      </Container>
    );
  }
  export default Lessons;