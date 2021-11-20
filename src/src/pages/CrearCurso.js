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
import { Create } from "../api/CurseApi";

export default function Index(){
    const [curse, setCurse] = useState({
        name: "",
        shortdescription: "",
        longdescription: "",
        price: "",
        category: "",
        photo: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value);
        setCurse({
            ...curse,
            [name]:value

        });
    };
/*      const handleAddCurse =(e)=>{
        setCurse({
            ...curse,
            names: [...curse.name],
        });
        
    }  */

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("submit",curse);
        await Create(curse);
    };
    return(
        <Fragment>
           
            
            <Container> 
                <center> 
                    <br/>
                    <br/>
                    <div className="fondoBlanco">
                    <h1 className="titulo">Creación de Curso</h1>
                    <br/>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Nombre del Curso:
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control name="name" type="text" placeholder="Ingrese el nombre del curso" value={curse.name} onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Descripción Corta:
                            </Form.Label>
                            <Col sm="9">
                            <FloatingLabel controlId="floatingTextarea2" >
                                <Form.Control
                                name="shortdescription"
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                value={curse.shortdescription} onChange={handleChange}
                                />
                            </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Descripción Larga:
                            </Form.Label>
                            <Col sm="9">
                            <FloatingLabel controlId="floatingTextarea2" >
                                <Form.Control
                                name="longdescription"
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '300px' }}
                                value={curse.longdescription} onChange={handleChange}
                                />
                            </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Categoria:
                            </Form.Label>
                            <Col sm="1">
                            <DropdownButton name="category" id="dropdown-basic-button" title="Dropdown button" value={curse.category} onChange={handleChange}> 
                                <Dropdown.Item >3D</Dropdown.Item>
                                <Dropdown.Item >2D</Dropdown.Item>
                                <Dropdown.Item >Programación</Dropdown.Item>
                                <Dropdown.Item >Efectos Visuales</Dropdown.Item>
                                <Dropdown.Item >Otro</Dropdown.Item>
                            </DropdownButton>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Precio:
                            </Form.Label>
                            <Col sm="3">
                            <Form.Control name="price" type= "number" placeholder="" value={curse.price} onChange={handleChange}/>
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
                            <Form.Control name="photo" type="file" value={curse.photo} onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                    
                    <br/>
                    <br/>
                    <br/>
                    
                    <Button type="submit" variant="warning" >Agregar Curso</Button>
                    <Button href= "CrearNivel" variant="success">Agregar Niveles</Button>
                    
                    </Form>
                    <br/>
                    <br/>
                    </div>
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