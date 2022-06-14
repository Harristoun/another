import React from 'react';
import Product from './Product'


const product = [
    {'brand': 'apple', 'price': 90000, 'image': 'https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'},
    {'brand': 'sumsung', 'price': 10000, 'image': 'https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'},
    {'brand': 'realMe', 'price': 98990, 'image': 'https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'},
    {'brand': 'readMe ', 'price': 90500, 'image': 'https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'},
]


const App = () => {
    return (
        <div>
            
            {product.map(item =><Product result={item.brand} cost={item.price} image={item.image}/>)}
        </div>
    );
};

export default App;
