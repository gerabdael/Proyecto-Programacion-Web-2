import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { Create } from "../api/UserApi";

function RegistrarteModal(props) {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        usertype:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        //console.log(name,value);
        setUser({
            ...user,
            [name]:value,

        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("submit",user);
        await Create(user);
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registrarte
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingrese su email" value={user.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="username" type="text" placeholder="Ingrese su nombre" value={user.username} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="usertype" placeholder="Ingrese su contraseña" value={user.usertype ="alumno"} hidden={true} onChange={handleChange}/>
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Ingrese su contraseña" value={user.password} onChange={handleChange}/>
            </Form.Group>        
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Registrate</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    );
}
  

export default function Registrate() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Registrarte
        </Button>

        <RegistrarteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </>
    );
}