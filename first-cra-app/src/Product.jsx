import React from 'react';

const Product = (props) => {
    return (
        <div className='list-products'>
            <h3>{props.result}</h3>
            <p>{props.cost}</p>
            <img src={props.image} alt="" />
            
        </div>
    );
};

export default Product;