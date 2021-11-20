import React, { Fragment, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import NivelBoxCard from '../components/NivelBoxCard';
import '../css/index.css';
import '../css/curso.css';

export default function Index(){
    const [school, setSchool] = useState({
        name: "",
        comment: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        //console.log(name,value);
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
                <center> 
                    <br/>
                    <br/>
                    <h1 className="titulo">Titulo del Curso</h1>
                    <br/>
                    <img className="imgCurso" src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg">
                    </img>
                    <br/>
                    <br/>
                    <h1 className="titulo">Descripción</h1>
                    <br/>
                </center>
                <div className="fondoBlanco">
                <img className="imgStar" src="https://habitatschool.mx/wp-content/uploads/2019/02/5-stars-png-2.png"/>
                <br/>
                <br/>   
                <br/>
                <br/>
                <br/>
                
                    
                        <p className="parrafSize">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
                        <br/>
                        <Button variant="warning">Comprar Curso </Button>
                        <br/>
                 
                    <br/>   
                    </div>
                <center>
                    
                        <br/>
                    <div className="fondoBlanco">
                        <h1 className="titulo">Niveles</h1>
                    
                        <br/>
                        <NivelBoxCard/>
                        
                    </div>
                    <br/>
                    <h1 className="titulo">Comentarios</h1>
                    
                </center>
                <div className="fondoBlanco">
                    <br/> 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                           <h5  name="name" value={school.name} onChange={handleChange}>Usuario: Diego </h5>
                            <Col sm="10">
                            <Form.Control name="comment" type="text" placeholder="Ingrese el nombre del curso" value={school.comment} onChange={handleChange}/>
                            </Col> 
                            <Col sm="2">
                             <Button type="submit" variant="warning">Comentar</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    <br/> 
                    <br/> 

                    <Card body>
                        <Row className="align-items-center">
                            <Col sm="1">
                                <img className="imgComentario" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"/>
                            
                            </Col>
                            <Col sm="11">
                            <h5 className="textoComentario"> Nombre</h5>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </Col>
                        </Row>
                        
                    </Card>  
                    
                    <br/> 
                    <Card body>
                        <Row className="align-items-center">
                            <Col sm="1">
                                <img className="imgComentario" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"/>
                            
                            </Col>
                            <Col sm="11">
                            <h5 className="textoComentario"> Nombre</h5>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </Col>
                        </Row>
                        
                    </Card>
                    <br/> 
                    <Card body>
                        <Row className="align-items-center">
                            <Col sm="1">
                                <img className="imgComentario" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"/>
                            
                            </Col>
                            <Col sm="11">
                            <h5 className="textoComentario"> Nombre</h5>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </Col>
                        </Row>
                        
                    </Card>
                    <br/> 

                    </div>

                    <br/> 
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