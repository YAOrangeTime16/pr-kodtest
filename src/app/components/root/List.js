import React, { Component } from 'react';

const List = ({ products, mq }) => {
    return (
        <div>
            <h1>{mq}</h1>
            {products.map((product, i) => (
                <div key={i}>{product.name}</div>
            ))}
            ;
        </div>
    );
};
export default List;
