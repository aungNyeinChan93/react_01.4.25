import React from 'react';
import Pannel from './base/Pannel';

const Product = ({ product }) => {
    const { image, title, price } = product;
    return (
        <React.Fragment>
            <a href="#" className="group block overflow-hidden">
                <div className="relative h-[350px] sm:h-[450px]">
                    <img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div className="relative bg-white pt-3">
                    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {title}
                    </h3>

                    <p className="mt-1.5 tracking-wide text-gray-900">
                        <Pannel>
                            {price}
                        </Pannel>
                    </p>
                </div>
            </a>
        </React.Fragment>
    );
};

export default Product;