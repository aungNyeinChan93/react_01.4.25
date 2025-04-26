import React from 'react';
import Product from '../components/Product';
import axios from 'axios';

const fetchProducts = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        return data;
    } catch (error) {
        console.log(error);
    }
}
const products = await fetchProducts();


const ProductList = () => {
    return (
        <React.Fragment>
            <h2 className='text-center text-3xl p-2 bg-gray-200 text-red-600 mx-10 my-2 rounded-lg capitalize'>Product List</h2>
            <div className='grid grid-cols-4 gap-4 mx-10 ' >
                {
                    products.map(product => {
                        return <Product product={product} />
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default ProductList;