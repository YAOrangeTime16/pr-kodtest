import React from 'react';
import { getProductImageLink } from '../../utils/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Image = ({ product, img, className }) => {
    return (
        <div className={className}>
            {img ? (
                <LazyLoadImage
                    alt="product image"
                    height={72}
                    width={72}
                    src={getProductImageLink(product)}
                />
            ) : (
                <div className="no-image">
                    <p>No Image</p>
                </div>
            )}
        </div>
    );
};
