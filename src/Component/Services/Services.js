import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css'


const Services = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch("./services.json")
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
      <Header></Header>
      <h3>Our Service</h3>
     

     <div className="display">
     {
       services.map(service=><Service
      
       key={service.Id}
       service={service}
       ></Service>)
     }
     </div>
      <Footer></Footer>
  
      
    </div>
  );
};

export default Services;