import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Content from './components/content/Content'
import Menu from './components/header/Menu'
import Hero from './components/content/Hero'
import Applicants from './components/applicants/Applicants'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Professions from './components/professions/Professions'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Menu />
        </Col> 
      </Row>
      <Row>
        <Col>
          <Hero />
        </Col>
      </Row>
      <Row>
        <Col>
          <Applicants />
        </Col>
      </Row>
      <Row>
        <Col>
          <Professions />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;