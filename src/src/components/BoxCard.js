import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import '../css/index.css';

export default function BoxCard(){
    return(
<CardGroup>
  <Card >
    <a href="Curso">
    <Card.Img variant="top"  src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg" />
    </a>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <a href="Curso">
    <Card.Img variant="top"  src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg" />
    </a>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <a href="Curso">
    <Card.Img variant="top"  src="https://www.casacientifica.com/modules/icommerce/img/product/default.jpg" />
    </a>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>   
  );
}