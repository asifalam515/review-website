import Button from '@restart/ui/esm/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Feature = (props) => {
  const{name,price,duration,img,Id,sit}=props.feature
  console.log(props.feature);
  return (
    <div>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} alt=""/>
  
  <Card.Body>
    
    <Card.Title>Course name:{name}</Card.Title>
    <Card.Text>
      No:{Id}
    </Card.Text>
    <Card.Text>
      Price:{price}
    </Card.Text>
    <Card.Text>
      Sit:{sit}
    </Card.Text>
    <Card.Text>
    Duration:{duration}
    </Card.Text>
    <Button className="btn-primary" variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
    </div>
  );
};

export default Feature;