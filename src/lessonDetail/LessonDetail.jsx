import React, { useEffect, useState, setState } from "react";
import { useParams } from "react-router-dom";

import {
  CardBody,
  CardTitle,
  Card,
  CardText,
  Row,
  Container,
  Badge
} from "reactstrap";
import "./LessonDetail.css";

const LessonDetail = (props) => {
  // state=[{"currentLesson":""}]
  const { id } = useParams();
  var currentLesson = props.lessonList.find(
    (lesson) => lesson.lessonId === Number(id)
  );
  var teacher = props.teacherList.find(teacher => teacher.teacherId === currentLesson.teacherId)
  var downloadCount = currentLesson.pdfDownloadCount
  const increaseCounter = () =>{
    setCount(count + 1);
  }
  const [count, setCount] = useState(downloadCount);
  var students = [];
 
  props.studentList.map((student,index) => student.studentId === currentLesson.students[index] ? students.push(student) : console.log('hata') )
  return (
    <div>
      <Container>
        <Row>
          <div className="col-sm-12">
            <h3 style={{ marginTop: "10px" }} className="card-header--title">
              Trakya Üniversitesi E-Öğrenme Portalı - DERSLERİM -{" "}
              <b>{currentLesson.lessonName}</b>
            </h3>

            <Card className="card2"
            style={{width:"1250px",
              height: "750px"}}
            >
              
              <img
                alt=""
                src={require(`./imgs/trakya.png`)}
                className="card-header"
                width="100%"
              />
              <CardBody className="card-body body-content">
                <CardTitle
                  className="card-header--title card-header--title-text"
                  tag="h5"
                >
                  {currentLesson.lessonName}
                </CardTitle>

                <CardText className="card-text">
                  {currentLesson.description}
                </CardText>
                <h4 style={{color:'gray'}}>Ders Materyalleri</h4>
                <a
                onClick={()=>{increaseCounter()}}
                href={require(`./pdfs/pdf1.pdf`)} download={`pdf${id}.pdf`}>
                
                <img
                  src={require(`./pdfs/pdf.png`)}
                  style={{ width: "50px", height: "auto" }}
                  alt=""
                ></img>
                </a>
                <br></br>
                <b style={{fontSize:'17px'}}>PDF İndirme Sayısı : {count}</b>
                <CardTitle
                  className="card-header--title card-header--title-text"
                  style={{ fontSize:'21px'}}
                  tag="h5"
                >
                  Dersi Veren Öğretmen : {teacher.teacherFullName}
                  <br/>
                  <Badge style={{marginTop:'10px',marginBottom:'10px'}} color="primary">
                      DERSİ ALAN ÖĞRENCİLER
                    </Badge>
             
                  <ul>
                    {students.map((student) => (
                    <Badge key={student.studentId} style={{margin:'4px'}} color="secondary">
                      {student.studentFullName}
                    </Badge>
                    ))}
                  </ul>
                </CardTitle>

              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default LessonDetail;
