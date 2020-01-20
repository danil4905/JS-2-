const goods = [
    { title: "Робот-пылесос xiaomi", price: 20000, img: 'https://via.placeholder.com/150' },
    { title: "Samsung Galaxy", price: 21500, img: 'https://via.placeholder.com/150' },
    { title: "Стиральная машина hotpoint", price: 32000, img: 'https://via.placeholder.com/150' },
    { title: "Умные часы apple watch", price: 26000, img: 'https://via.placeholder.com/150' },
];

const renderGoodsItem = (title='Без названия', price = 0, img = '') => {
    return `<div class="goods-item">
                <img src="${img}" alt="alt">
                <h3>${title}</h3>
        <p>${price}</p>
            </div>`
};

const renderGoodsList = (list, container) => {
    const goodsList = list.map(good => renderGoodsItem(good.title, good.price, good.img));
    document.querySelector(container).innerHTML = goodsList;
};

renderGoodsList(goods, '.goods-list');
