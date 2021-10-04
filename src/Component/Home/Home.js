import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
 const[home,setHome]=useState([])
 useEffect(()=>{
   fetch("./home.json")
   .then(res=>res.json())
    .then(data=>setHome(data))
 })
  return (
    <div>
      <Header></Header>
     <div className="home">
     
     {home.map(feature=><Feature
     key={feature.Id}
     feature={feature}></Feature>)}

    
       </div>
       <Footer></Footer>
    </div>
  );
};

export default Home;