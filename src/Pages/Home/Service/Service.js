import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, price, description, img } = props.service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button className='btn btn-dark'>Book Now: {name}</button>
        </div>
    );
};

export default Service;