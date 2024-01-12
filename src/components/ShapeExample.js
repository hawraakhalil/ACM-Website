import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './ShapeExample.css';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image style={{paddingLeft:"10px",paddingRight:"10px",paddingTop:"5px",width:"100%", height:"10%"}} src="/images/acm_logo.jpg" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;