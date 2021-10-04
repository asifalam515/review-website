import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contack = () => {
  return (
    <div>
  <Header></Header>
   
   <h3>Conatck us:</h3>
<div className="mb-5">
<img src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=" alt="" />
</div>

<div className="p-5">
<InputGroup className="mb-5 p-10">
    <FormControl
      placeholder="Enter Your Name"
      aria-label="username"
      aria-describedby="basic-addon2"
    />
    </InputGroup>
<InputGroup className="mb-5 p-10">
    <FormControl
      placeholder="Enter Your Email"
      aria-label="username"
      aria-describedby="basic-addon2"
    />
    </InputGroup>
  
    <Button className="bg-primary" variant="outline-secondary" id="button-addon2">
      Send
    </Button>
  
</div>
    <Footer></Footer>
    </div>
  );
};

export default Contack;