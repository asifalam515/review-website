import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Service = (props) => {
  const{name,price,duration,img,Id,sit}=props.service
  console.log(props.service);
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

export default Service;