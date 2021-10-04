import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
      <h3>our services</h3>
      {
        services.map(service=> <Service
        key={services.Id}
        services={services}></Service>)
      }
    </div>
  );
};

export default Services;