import React, {useState, useEffect, Component} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './applicants.css'


class Applicants extends Component{
    constructor(){
        super()
        this.state = {
            listApplicants: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/aspirantes')
            .then( respuesta =>  { return respuesta.json() })
            .then( data => { 
                this.setState({
                    listApplicants : data.aspirantes
                })
            })
            .catch( error => console.log(error))
    }

    render(){
        return (
            <Container className='my-5' id='aspirantes'>
                <Row>
                    <h2>Aspirantes</h2>
                </Row>
                <Row xs={1} md={2} lg={3} xl={4}>
                    <Col className='col-card'>
                    {this.state.listApplicants.map((aspirante, i) =>
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"http://localhost:3000/" + aspirante.imagen_perfil} />
                            <Card.Body>
                                <Card.Title>{aspirante.nombres + " " +aspirante.apellidos}</Card.Title>
                                <Card.Text>
                                    {aspirante.profesion}
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                    )}   
                    </Col>
                    
                </Row>
            </Container>
        )
    }


}

export default Applicants;
