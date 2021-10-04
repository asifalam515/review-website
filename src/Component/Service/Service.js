import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Service = (props) => {
  const{name,price}=props.service
  console.log(props.service);
  return (
    <div>
      <Header></Header>
      <h2>name:{name}</h2>


      <Footer></Footer>
    </div>
  );
};

export default Service;