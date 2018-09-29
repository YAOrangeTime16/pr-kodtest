import React, { Component } from 'react';
import { Seq } from 'immutable';
import { Button } from './Button';
import { Image } from './Image';
import { Review } from './icons';

const List = ({ products }) => {
    const productsObj = Seq(products).toArray();
    return (
        <div className="wrapper">
            {productsObj.map((product, i) => {
                return (
                    <div key={i} className="item">
                        <h1 className="item__name">{product.name}</h1>
                        <Image
                            product={product}
                            img={product.mainImage}
                            className="item__image"
                        />
                        <Review className="item__review" />
                        <p className="item__description">
                            {product.shortDescription}
                        </p>
                        <span className="item__retailers">
                            {product.retailerCount} butiker
                        </span>
                        <span className="item__price">
                            <span className="item__price-textS">fr. </span>
                            <span>
                                {Math.round(product.localMinPrice.value)
                                    .toLocaleString()
                                    .replace(',', ' ') +
                                    ' ' +
                                    product.localMinPrice.currency}
                            </span>
                        </span>
                        <Button className="item__btn" />
                    </div>
                );
            })}
        </div>
    );
};
export default List;
