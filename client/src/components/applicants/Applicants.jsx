import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './applicants.css'

function Applicants() {
  return (
    <Container className='my-5'>
        <Row>
            <h2>Aspirantes</h2>
        </Row>
        <Row xs={1} md={2} lg={3} xl={4}>
            <Col className='col-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../public/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>Luis Fuentes</Card.Title>
                        <Card.Text>
                            Economista
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Col>
            <Col className='col-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../public/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>Luis Fuentes</Card.Title>
                        <Card.Text>
                            Economista
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Col>
            <Col className='col-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../public/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>Luis Fuentes</Card.Title>
                        <Card.Text>
                            Economista
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Col>
            <Col className='col-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../public/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>Luis Fuentes</Card.Title>
                        <Card.Text>
                            Economista
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Col>
            <Col className='col-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../public/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>Luis Fuentes</Card.Title>
                        <Card.Text>
                            Economista
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Col>
        </Row>
    </Container>
    
  );
}

export default Applicants;
