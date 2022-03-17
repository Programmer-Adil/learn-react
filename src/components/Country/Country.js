import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <h4>Official Name: {name.official}</h4>
            <h4>Capital Name: {capital}</h4>
        </div>
    );
};

export default Country;