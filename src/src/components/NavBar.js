import React, { Fragment, useState } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Login from './Login';

export default function NavBar(){
    const [school, setSchool] = useState({
        busqueda: ""
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
        <Navbar bg="warning" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">Cursos</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="Historial">Historial</Nav.Link>
                <Nav.Link href="CrearCurso">Crear Curso</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="Mensajes">Mensajes</Nav.Link>
                <Login/>
                <Nav.Link href="/">Cerrar Sesión</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                name="busqueda"
                type="search"
                placeholder="Busqueda"
                className="me-2"
                aria-label="Search"
                value={school.busqueda} onChange={handleChange}
                />
                <Button type="submit" href="Busqueda" variant="outline-success">Buscar</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
  );
}