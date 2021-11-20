import { Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import '../css/index.css';

export default function NivelBoxCard(){
    return(
      <div>
      <br/> 
      
        <Card body>
            <Row className="align-items-center">
                <Col sm="4">
                  <a href="Curso">
                    <img className="imgHorizontal" src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg"/>
                  </a>
                </Col>
                <Col sm="8">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Col>
            </Row>
            
        </Card>   
      
      </div>
  );
}