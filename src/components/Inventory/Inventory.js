import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    const handleAddProduct = () => {
        fetch('https://infinite-sierra-42088.herokuapp.com/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <form action="">
                
            </form>
            <button onClick={handleAddProduct}>Add Products</button>
        </div>
    );
};

export default Inventory;