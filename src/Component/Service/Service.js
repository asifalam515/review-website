import React from 'react';

const Service = (props) => {
  const{name,price}=props.service
  console.log(props.service);
  return (
    <div>
      <h2>name:{name}</h2>
    </div>
  );
};

export default Service;