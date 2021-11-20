import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import SignUp from './SignUp';

function MyVerticallyCenteredModal(props) {
      const [school, setSchool] = useState({
        email: "",
        password: ""
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
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Iniciar Sesión
          </Modal.Title>
        </Modal.Header>
         <Form onSubmit={handleSubmit}>
           <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingrese su email" value={school.email} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Ingrese su contraseña" value={school.password} onChange={handleChange} />
            </Form.Group>

            <SignUp/>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={props.onHide}>Iniciar Sesión </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
}
  

export default function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Iniciar Sesión
        </Button>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </>
    );
}

  //render(<App />);