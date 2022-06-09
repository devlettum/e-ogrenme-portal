import React,{useEffect} from "react";
import logo from "../assets/imgs/logo.svg";
import "./Login.css";
import { Container, Row, Col ,Button} from "reactstrap";
import alertify from "alertifyjs";
import {useNavigate } from "react-router-dom";


const Login = (props) => {
  let navigate = useNavigate();
  var students = [];
  var currentStudent;

  useEffect(() => {
    props.studentList.forEach((student) => students.push(student));
  });

  const loginValidation = (students) => {
    let ogrNo = document.getElementById("inputNum").value;
    let sifre = document.getElementById("inputPass").value;

    currentStudent =
      students.find((student) => student.studentNumber === ogrNo) || null;
    if (currentStudent) {
      if (sifre === currentStudent.studentPassword) {
        console.log("başarıyla giriş yaptınız.");
        alertify.success(
          currentStudent.studentFullName + " Başarıyla Giriş Yaptınız.",
          1.5
        );
        navigate("/main", { replace: true });
 
      } else if(sifre !== currentStudent.studentPassword || currentStudent === null) {
        alertify.error("Öğrenci Bilgileri Yanlış.");
      }
    }
    else{
      alertify.error("Böyle bir öğrenci bulunmamaktadır.");
    }
  }
    return (
      <Container>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6" className="mx-auto">
            <img
              style={{ width: "390px", height: "auto" }}
              src={logo}
              className="img-fluid"
              alt="Responsive"
            />
            <form>
              <h3>E-Trakya Öğrenci Girişi</h3>
              <div className="form-group">
                <label>Öğrenci Numarası</label>
                <input
                  id="inputNum"
                  type="input"
                  className="form-control"
                  placeholder="Öğrenci numaranızı giriniz."
                />
              </div>
              <div className="form-group">
                <label>Şifre</label>
                <input
                  id="inputPass"
                  type="password"
                  autoComplete="on"
                  className="form-control"
                  placeholder="Şifrenizi giriniz."
                />
              </div>
              <br />
              <Button
                
                type="button"
                className="btn btn-light btn-lg btn-block"
                onClick={() => loginValidation(students)}
              >
               
                Giriş Yap
              </Button>
            </form>
          </Col>
          <Col xs="3"></Col>
        </Row>
      </Container>
    );
  }
export default Login;