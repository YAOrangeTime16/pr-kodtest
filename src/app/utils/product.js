export const getProductImageLink = product => {
    const baseUrl = 'https://images.pricerunner.com/product/200x200';
    return `${baseUrl}/${product.mainImage}/${product.name.replace(' ', '-')}.jpg`;
    //return `${baseUrl}/${product.get('mainImage')}/${product.get('name').replace(' ', '-')}.jpg`;
};
