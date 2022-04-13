import React from 'react';

import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'>Mechanic Is Sleeping....</h2>
            <img className='mx-auto w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;