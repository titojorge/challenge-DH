import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import './professions.css'


class Professions extends Component{
    constructor(){
        super()
        this.state = {
            listProfessions: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/profesiones')
            .then( respuesta =>  { return respuesta.json() })
            .then( data => { 
                console.log(data.data);
                this.setState({
                    listProfessions : data.profesiones
                })
            })
            .catch( error => console.log(error))
    }

    render(){
        return (
            <Container className='my-5' id='profesiones'>
                <Row className='mb-4'>
                    <h2>Profesiones</h2>
                </Row>
                {this.state.listProfessions.map((profesion, i) =>
                <Row key={i}>
                    <Col className="d-grid gap-2">
                        <Button variant="secondary" size="lg">
                            {profesion.nombre_profesion}
                        </Button>
                    </Col>
                </Row>
                )}
            </Container>


        )
    }


}

export default Professions;
