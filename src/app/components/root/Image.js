import React from 'react';
import { getProductImageLink } from '../../utils/product';

export const Image = ({ product, className }) => {
    return (
        <div className={className}>
            <img src={getProductImageLink(product)} />
        </div>
    );
};
