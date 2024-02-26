import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './applicants.css'

const Applicants = () => {
    const [aspirantes, setAspirante] = useState([]);
    
    useEffect(() => {
        const traerAspirante = async () => {
            try {
                const response = await fetch('http://localhost:3000/aspirantes');
                const data = await response.json();
                console.log(data);
                setAspirante(data.aspirante);
            } catch (error) {
                console.error('No se encontro al aspirante ', error);
        };
        traerAspirante();
    }
    }, []);

  return (
    <Container className='my-5' id='aspirantes'>
        <Row>
            <h2>Aspirantes</h2>
        </Row>
        <Row xs={1} md={2} lg={3} xl={4}>
            <Col className='col-card'>
            {aspirantes.map((aspirante) =>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/foto6.jpg" />
                    <Card.Body>
                        <Card.Title>{aspirante.nombres}</Card.Title>
                        <Card.Text>
                            {aspirante.nombres}
                        </Card.Text>
                    </Card.Body>
                </Card>   
            )}   
            </Col>
            
        </Row>
    </Container>
    
  );
}

export default Applicants;
