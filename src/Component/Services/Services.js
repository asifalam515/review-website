import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Services = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
      <Header></Header>
      <h3>our services</h3>
      {
        services.map(service=> <Service
        key={services.Id}
        services={services}></Service>)

        
      }
      <Footer></Footer>
  
      
    </div>
  );
};

export default Services;