import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BoxCard from '../components/BoxCard';
import '../css/index.css';
import '../css/curso.css';

export default function Index(){
    const [school, setSchool] = useState({
        name: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value);
        setSchool({
            ...school,
            [name]:value,

        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    };
    return(
        <Fragment>
           
            
            <Container> 
                
                    <br/>
                    <br/>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label className="fondoLista" column sm="2">
                                <center>
                                <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p>
                            <hr className="hr"></hr>    
                            <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p>
                            <hr className="hr"></hr> 
                            <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p>
                            <hr className="hr"></hr> 
                            <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p>
                            <hr className="hr"></hr> 
                            <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p>
                            <hr className="hr"></hr> 
                            <p></p>
                            <h4>Nombre</h4>
                            <h6>Asunto</h6>
                            <h7>Fecha</h7>
                            <p></p></center> 
                            </Form.Label>
                            <Col className="fondoChat" sm="10">
                                <br/>
                                <Form  onSubmit={handleSubmit}>
                                    <Row className="align-items-center">
                                    <h5  name="name" value={school.name} onChange={handleChange}>Usuario: Diego </h5>
                                        <Col sm="10">
                                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            name="message"
                                            className="mb-"
                                            id="inlineFormInput"
                                            placeholder="Escribe un mensaje..."
                                            value={school.comment} onChange={handleChange}
                                        />
                                        </Col>
                                        <Col xs="auto">
                                        <Button type="submit" className="mb-2">
                                            Enviar Mensaje
                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <Col className="fondoMensaje1" sm="7">
                                <div>
                                    <p></p>
                                    <h4>Nombre</h4>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h6>
                                    <h7>Fecha</h7>
                                    <p></p> 
                                </div>
                                </Col>
                                <Col className="fondoChat" sm="7">
                                <div className="fondoMensaje2">
                                    <p></p>
                                    <h4>Nombre</h4>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h6>
                                    <h7>Fecha</h7>
                                    <p></p> 
                                </div>
                                </Col>
                            </Col>
                        </Form.Group>

                    <br/>
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                
            </Container>
            
        </Fragment>
    );
}