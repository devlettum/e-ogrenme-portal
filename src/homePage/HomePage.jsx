import React from "react";
import {
  Button,
  CardBody,
  CardTitle,
  Row,
  Container,
  CardGroup,
  Card,
  CardText,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  let navigate = useNavigate();
  var go = (uri) => {
    navigate(`/${uri}`);
  };


  return (
    <Container>
      <Row>
        <div className="col-sm-12">
          <h4 style={{ marginTop: "10px" }} className="card-header--title">
            Trakya Üniversitesi E-Öğrenme Portalı - <b>Anasayfa</b>
          </h4>
          <CardGroup style={{ width: "100%" }}>
            <Col className="col-4">
              <Card
                style={{ top: "220px", margin: "auto", width: "330px",
                }}
              >
                <img
                  alt=""
                  src={require(`./img/students.jpg`)}
                  // top
                  className="card-header"
                  width="100%"
                />
                <CardBody className="card-body body-content">
                  <CardTitle
                    className="card-header--title card-header--title-text"
                    tag="h5"
                  >
                    ÖĞRENCİ LİSTESİ
                  </CardTitle>

                  <CardText className="card-text">
                    2021 / 2022 Bahar Dönemi Bilgisayar Mühendisliği 3. Sınıf
                    Öğrencileri
                  </CardText>

                  <Button
                    onClick={() => go("students")}
                    type="button"
                    style={{ width: "100%", height: "auto", bottom: "" }}
                    className="btn btn-success btn-lg btn-block button-primary"
                  >
                    Öğrencilere Git
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-4">
              <Card
               style={{ top: "220px", margin: "auto", width: "330px"}}
              >
                <img
                  alt=""
                  src={require(`./img/lessons.jpg`)}
                  className="card-header"
                  width="100%"
                />
                <CardBody className="card-body body-content">
                  <CardTitle
                    className="card-header--title card-header--title-text"
                    tag="h5"
                  >
                    DERS LİSTESİ
                  </CardTitle>

                  <CardText className="card-text">
                    2021 / 2022 Bahar Dönemi Bilgisayar Mühendisliği 3. Sınıf
                    Dersleri
                  </CardText>

                  <Button
                    onClick={() => go("lessons")}
                    type="button"
                    style={{ width: "100%", height: "auto", bottom: "" }}
                    className="btn btn-success btn-lg btn-block button-primary"
                  >
                    Derslere Git
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-4">
              <Card
                style={{ top: "220px", margin: "auto", width: "330px"}}
              >
                <img
                  alt=""
                  src={require(`./img/akademisyen.png`)}
                  // top
                  className="card-header"
                  width="100%"
                />
                <CardBody className="card-body body-content">
                  <CardTitle
                    className="card-header--title card-header--title-text"
                    tag="h5"
                  >
                    AKADEMİSYEN LİSTESİ
                  </CardTitle>

                  <CardText className="card-text">
                    Mühendislik Fakültesi Bilgisayar Mühendisliği
                    Akademisyenleri
                  </CardText>

                  <Button
                    onClick={() => go("teachers")}
                    type="button"
                    style={{ width: "100%", height: "auto" }}
                    className="btn btn-success btn-lg btn-block button-primary"
                  >
                    Akademisyenlere Git
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </CardGroup>
        </div>
      </Row>
    </Container>
  );
};
export default HomePage;
