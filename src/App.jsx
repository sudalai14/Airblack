import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import Form from "./components/Form";
import CourseInfo from "./components/CourseInfo";
import WhyJoin from "./components/WhyJoin";
import Certification from "./components/Certification";
import Community from "./components/Community";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <CourseInfo />
        <Form />
        <WhyJoin />
        <Certification />
        <Community />
      </Container>
    </>
  );
}

export default App;
