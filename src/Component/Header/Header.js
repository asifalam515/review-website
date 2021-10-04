import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-white">
      <h1 className="bg-warning">Sohan's Language School</h1>
      <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    
    <Link className="bg-info" to="/home">Home</Link>
  </Nav.Item>
  <Nav.Item>
    <Link className="bg-info" to="/about">About</Link>
  </Nav.Item>
  <Nav.Item>
 <Link className="bg-info" to="/services">Services</Link>
  </Nav.Item>
  <Nav.Item>
    <Link className="bg-info" to="/contack">Contack us</Link>
  </Nav.Item>
</Nav>
    </div>
  );
};

export default Header;