import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-dark'>Book Now: {name}</button>
        </div>
    );
};

export default Service;