import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import HorizontalBoxCard from '../components/HorizontalBoxCard';
import '../css/index.css';
import '../css/curso.css';

export default function Index(){
    return(
        <Fragment>
           
            
            <Container> 
                <center>
                    <br/>
                    <br/>
                    <div className="fondoBlanco">
                        <h1 className="titulo">Resultados de la Búsqueda</h1>
                       
                    </div>
                    <HorizontalBoxCard/>
                     <HorizontalBoxCard/>
                     <HorizontalBoxCard/>
                    <br/>
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                    <br/> 
                </center>
            </Container>
            
        </Fragment>
    );
}