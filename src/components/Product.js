import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
function Product() {
    return (
        <div className='product'>
            <div className='card'>
                <Link>
                <img src={logo}/>
                </Link>
                <div className='content'>
                    <h3>
                        <Link>Name</Link>
                    </h3>
                    <span>Tien</span>
                </div>
            </div>
        </div>
    );
};

export default Product;