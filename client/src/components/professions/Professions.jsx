import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import './professions.css'

const profesiones = () => {
    const [profesiones, setProfesiones] = useState([]);
    
    useEffect(() => {
        const fetchProfesiones = async () => {
            try {
                const response = await fetch('http://localhost:3000/profesiones');
                const data = await response.json();
                setAspirante(data.profesiones);
            } catch (error) {
                console.error('Error ', error);
            };    
        }
        fetchProfesiones();
    }, []);

function Professions() {
  return (
    <Container className='my-5' id='profesiones'>
        <Row className='mb-4'>
            <h2>Profesiones</h2>
        </Row>
        <Row>
            <Col className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                    Profesión 1
                </Button>
                <Button variant="secondary" size="lg">
                    Profesión 2
                </Button>
                <Button variant="secondary" size="lg">
                    Profesión 3
                </Button>
                <Button variant="secondary" size="lg">
                    Profesión 4
                </Button>
                <Button variant="secondary" size="lg">
                    Profesión 5
                </Button>
            </Col>
        </Row>
    </Container>
    
  );
}

export default Professions;
