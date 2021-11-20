import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BoxCard from '../components/BoxCard';
import '../css/index.css';
import '../css/curso.css';

export default function Index(){
    return(
        <Fragment>
           
            
            <Container> 
                <center> 
                    <br/>
                    <br/>
                    <h1 className="titulo">Titulo del Nivel</h1>
                    <br/>
                    <img className="imgCurso" src="https://www.pngkit.com/png/full/267-2678423_bacteria-video-thumbnail-default.png">
                    </img>
                    <br/>
                    <br/>

                </center>
                
   
   
                <center className="fondoBlanco">                    
                    <h1 className="titulo">Descripción</h1>
                    <br/>
                    <p className="parrafSize">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
                    <br/>
                    <Button variant="warning">Contactar al Maestro</Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="warning">Siguiente Nivel</Button>
                    <br/>
                    <br/> 
                    </center> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
               
            </Container>
            
        </Fragment>
    );
}