import React, { Component } from "react";
import "./App.css";
import Students from "./student/Students";
import { Container, Row } from "reactstrap";
import Teachers from "./teacher/Teachers";
import Lessons from "./lesson/Lessons";
import NotFound from "./notFound/NotFound";
import Login from "./login/Login";
import HomePage from "./homePage/HomePage";
import LessonDetail from "./lessonDetail/LessonDetail";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    
    students: [
      {
        studentId: 1,
        studentFullName: "Batuhan ARIK",
        studentNumber: "111",
        studentPassword: "aaa",
      },
      {
        studentId: 2,
        studentFullName: "Simay Asan",
        studentNumber: "1201602807",
        studentPassword: "simay",
      },
      {
        studentId: 3,
        studentFullName: "Alperen Kumcu",
        studentNumber: "1201602808",
        studentPassword: "alperen",
      },
      {
        studentId: 4,
        studentFullName: "Onur Karaöz",
        studentNumber: "1201602809",
        studentPassword: "onur",
      },
      {
        studentId: 5,
        studentFullName: "Mesut Çalık",
        studentNumber: "1201602810",
        studentPassword: "mesut",
      },
      {
        studentId: 6,
        studentFullName: "Ömer Yıldız",
        studentNumber: "1201602811",
        studentPassword: "omer",
      },
      {
        studentId: 7,
        studentFullName: "Sabiha Evren",
        studentNumber: "1201602812",
        studentPassword: "sabiha",
      },
      {
        studentId: 8,
        studentFullName: "Beyza Soylu",
        studentNumber: "1201602813",
        studentPassword: "beyza",
      },
      {
        studentId: 9,
        studentFullName: "Semih Ertürk",
        studentNumber: "1201602814",
        studentPassword: "semih",
      },
      {
        studentId: 10,
        studentFullName: "Lütfü Türkyılmaz",
        studentNumber: "1201602815",
        studentPassword: "lutfu",
      },
      {
        studentId: 11,
        studentFullName: "Paris Hamilton",
        studentNumber: "1201602816",
        studentPassword: "paris",
      },
      {
        studentId: 12,
        studentFullName: "Hüsna Bağcı",
        studentNumber: "1201602817",
        studentPassword: "husna",
      },
      {
        studentId: 13,
        studentFullName: "Sevilay Korkmaz",
        studentNumber: "1201602818",
        studentPassword: "sevilay",
      },
      {
        studentId: 14,
        studentFullName: "Fırat Yılmaz Bakırcıoğlu",
        studentNumber: "1201602819",
        studentPassword: "firat",
      },
      {
        studentId: 15,
        studentFullName: "Saadettin Turhan",
        studentNumber: "1201602820",
        studentPassword: "saadettin",
      },
    ],
    lessons: [
      {
        lessonId: 1,
        lessonName: "Web Based Programming",
        teacherId: 0,
        studentCount: 15,
        students : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        description:
          "Bu ders öğrencilere web projesi geliştirebilmek için temel seviyede Html5, CSS3, React Framework'ünü öğretmeyi amaçlar.",
        pdfDownloadCount:10
      },
      {
        lessonId: 2,
        lessonName: "Technical English IV",
        teacherId: 1,
        studentCount:8,
        students : [1,2,3,4,5,6,7,8],
        description:
          "Bu ders öğrencilere mühendislik alanında ileri düzey döküman ve makale okumak, akıcı bir şekilde  günlük konuşma için İngilizce'de önemli konuları ve terimleri öğretmeyi amaçlar.",
        
        pdfDownloadCount:4
      },
      {
        lessonId: 3,
        lessonName: "Data Structures and Algorithms",
        teacherId: 2,
        studentCount: 12,
        students : [1,2,3,4,5,6,7,8,9,10,11,12],
        description:
          "Bu ders öğrencilere veri yapılarının ve algoritmaların problem çözümünde kullanımının önemini kavramak ve uygulama içinde etkin olarak kullanmayı öğretmeyi amaçlar.",
      
        pdfDownloadCount:11
      },
      {
        lessonId: 4,
        lessonName: "Computer Networks",
        teacherId: 3,
        studentCount: 15,
        students : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        description:
          "Bu ders öğrencilere bilgisayar ağlarının ve internet yapısının gelişimini vurgulamaktadır. Hedefler, öğrencilere ağ teknolojilerini sunmak ve internet yapısında önemli bir yer tutan TCP/IP protokolünü iyi bir şekilde anlaşılmasını amaçlar.",
        pdfDownloadCount:1
      },
      {
        lessonId: 5,
        lessonName: "Database Management Systems II",
        teacherId: 4,
        studentCount: 13,
        students : [1,2,3,4,5,6,7,8,9,10,11,12,13],
        description:
          "	Bu ders öğrencilere günümüzde en çok kullanılan Veri Tabanı Yönetim Sistemlerinden birisi olan ORACLE hakkında bilgi ve beceriyi arttırmayı, PL/SQL dilini tanıtmayı amaçlar.",
        pdfDownloadCount:10
      },
      {
        lessonId: 6,
        lessonName: "Object Oriented Programming",
        teacherId: 5,
        studentCount: 14,
        pdfDownloadCount:9,
        students : [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        description:
          "Bu dersin iki ana amacı vardır: 1. nesneye yönelik programlamanın temel ilke ve kavramlarını öğrenmek ve 2. bu ilke ve kavramları JAVA programlama dili ile etkin olarak kullanabiliyor olmayı amaçlar.",
      },
      {
        lessonId: 7,
        lessonName: "Electronics Lab",
        teacherId: 5,
        studentCount: 10,
        pdfDownloadCount:9,
        students : [1,2,3,4,5,6,7,8,9,10],
        description:
          "Bu ders öğrencilere teorik olarak öğrenilen elektronik dersindeki devre elemanlarını, devre tasarımı içinde kullanarak sonuçlarını gözlemlemek, board üzerinde devre kurarak bu elemanların nasıl çalıştığını öğretmeyi amaçlar. ",
      },
      {
        lessonId: 8,
        lessonName: "System Analysis and Design",
        teacherId: 2,
        studentCount: 15,
        pdfDownloadCount:0,
        students : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        description:
          "Bu ders öğrencilere sistem çözümleme teorisini öğretmek ve bu teoriyi proje uygulamasında kullandırtmayı amaçlar.",
      },
    ],
    teachers: [
      {
        teacherId: 0,
        teacherFullName: "Jorge Jesus",
        teacherBirthDate: "19/07/1962",
        teacherBirthCity: "Amadora",
        academicTitle: "Profesör Doktor",
        imageId: 1,
      },
      {
        teacherId: 1,
        teacherFullName: "İsmail Kartal",
        teacherBirthDate: "20/08/1963",
        teacherBirthCity: "İstanbul",
        academicTitle: "Doktor Öğretim Üyesi",
        imageId: 2,
      },
      {
        teacherId: 2,
        teacherFullName: "Erol Bulut",
        teacherBirthDate: "21/09/1964",
        teacherBirthCity: "Bad Schwalbach",
        academicTitle: "Doktor Öğretim Üyesi",
        imageId: 3,
      },
      {
        teacherId: 3,
        teacherFullName: "Aykut Kocaman",
        teacherBirthDate: "22/10/1965",
        teacherBirthCity: "Sakarya",
        academicTitle: "Profesör Doktor",
        imageId: 4,
      },
      {
        teacherId: 4,
        teacherFullName: "Ersun Yanal",
        teacherBirthDate: "23/11/1966",
        teacherBirthCity: "İzmir",
        academicTitle: "Araştırma Görevlisi",
        imageId: 5,
      },
      {
        teacherId: 5,
        teacherFullName: "Fatih Terim",
        teacherBirthDate: "24/12/1967",
        teacherBirthCity: "Adana",
        academicTitle: "Araştırma Görevlisi",
        imageId: 6,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Routes>
            <Route
                path="*"
                element={<NotFound/>}
              />
              <Route
                path="/"
                element={<Login studentList={this.state.students} />}
              />
              <Route path="/main" element={<HomePage />} />
              <Route
                path="/students"
                element={<Students studentList={this.state.students} />}
              />

              <Route
                path="/lessons"
                element={<Lessons lessonList={this.state.lessons} />}
              />
              <Route
                path="/teachers"
                element={<Teachers teacherList={this.state.teachers}  />}
              />
              <Route
                path="/lessons/:id"
                element={<LessonDetail lessonList={this.state.lessons}
                studentList = {this.state.students}
                teacherList = {this.state.teachers} />}
              />
            </Routes>
          </Row>
        </Container>
      </div>
    );
  }
}
