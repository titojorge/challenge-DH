import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./applicants.css";

function Applicants() {
  const [data, SetData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("http://localhost:3000/aspirantes");
        const resp = await response.json();
        SetData(resp);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    cargarDatos();
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="my-5" id="aspirantes">
        <Row>
          <h2>Aspirantes</h2>
        </Row>
        <Row xs={1} md={2} lg={3} xl={4}>
          <Col className="col-card">
              {data.aspirantes && data.aspirantes.map((aspirante,i) => (
                    <Card key={i} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={"http://localhost:3000/" + aspirante.imagen_perfil} />
                      <Card.Body>
                          <Card.Title>{aspirante.nombres + " " +aspirante.apellidos}</Card.Title>
                          <Card.Text>
                              {aspirante.profesion}
                          </Card.Text>
                      </Card.Body>
                    </Card>   
                  )
                )
              }
          </Col>
        </Row>
      </Container>
    );
  }

  
}

export default Applicants;
