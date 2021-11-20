import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

import '../css/index.css';
import '../css/curso.css';

export default function Index(){
    const [school, setSchool] = useState({
        name: "",
        description: "",
        photo: "",
        video: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setSchool({
            ...school,
            [name]:value,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <Fragment>
           
            
            <Container> 
                <br/>
                <br/>
                <center className="fondoBlanco"> 
                   
                    <h1 className="titulo">Creación de Nivel</h1>
                    <br/>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Nombre del Curso:
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control name="name" type="text" placeholder="Ingrese el nombre del curso" value={school.name} onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Descripción:
                            </Form.Label>
                            <Col sm="9">
                            <FloatingLabel controlId="floatingTextarea2" >
                                <Form.Control
                                name="description"
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '200px' }}
                                value={school.description}
                                onChange={handleChange}
                                />
                            </FloatingLabel>
                            </Col>
                        </Form.Group>
                        <br/>
                        <br/>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Foto:
                            </Form.Label>
                            <Col sm="9">
                            <img className="imgCrearCurso" src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg"/>
                            <br/>
                            <br/>
                            <Form.Control name="photo" type="file" value={school.photo} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <br/>
                        <br/>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Videos:
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control name="video" type="text" placeholder="Ingrese el Link de su video" value={school.video} onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <br/>
                        <br/>


                    
                        <br/>
                        <br/>
                        <br/>

                        <Col sm="4">
                        <Button type="submit" variant="warning">Agregar Niveles</Button>
                        <br/>
                        <br/>
                        <Button type="submit" href="/" className="btnFinalizar" variant="success">Finalizar</Button>
                    </Col>
                    
                    </Form>
                    <br/> 
                    <br/> 

                    </center>
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