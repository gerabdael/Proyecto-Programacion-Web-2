import React, { Fragment, useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { GetAll } from "../api/CurseApi";
import BoxCard from '../components/BoxCard';
import HorizontalBoxCard from '../components/HorizontalBoxCard';
import { useAuth0 } from "../hooks/react-auth0-spa"; 
import '../css/index.css';
const Index =()=>{
     const [curse, setCurse]= useState([]);
    useEffect(() =>{
        async function fetchData(){
            const curseRes = await GetAll();
            setCurse(curseRes);
        }
        fetchData();
    }, []); 

    return(
        <Fragment>
            <center>

            <br/>
            <br/>
        
                <img src="https://sauraconsultores.com/wp-content/uploads/2020/03/cursos.png"/>
                <br/>

                <br/>
                <Container>
                <div className="fondoBlanco"> 

                    <h1 className="titulo">Cursos Recientes</h1>

                    </div>
                    <HorizontalBoxCard/>
                     <HorizontalBoxCard/>
                     <HorizontalBoxCard/>
                <br/>
                <br/>
                <div className="fondoBlanco">

                <h1 className="titulo">Cursos Mejor Puntuados</h1>
                <br/>
                </div> 
                <BoxCard>

                </BoxCard>
                <br/>
                <br/>
                <div className="fondoBlanco">

                    <h1 className="titulo">Cursos Más Vendidos</h1>
                    <br/>
                </div> 
                <BoxCard>

                </BoxCard>
                </Container>
            </center>
            
        </Fragment>
    );
}

export default Index