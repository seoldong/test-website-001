const processBestProducts = (productData, topCount) => {
    if(!productData) return;
    const filterData = productData.filter(product => product.onSale);
    const sortData = filterData.sort((a, b) => b.salesCount - a.saleCount);
    const sliceData = sortData.slice(0, topCount)
    return sliceData;
}

export default processBestProducts;