const product = [
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://th.bing.com/th/id/R.481e69d13c8e97f618ea53a4b42f573d?rik=s3Qg4izl6ajwhA&pid=ImgRaw&r=0',
        title: 'Apple',
        space_for_description: 'American imported Apples',
        price: 50.20,
        current_price: '20 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://hoaquasay.vn/wp-content/uploads/2017/05/qu%E1%BA%A3-cam-800x567.jpg',
        title: 'Orange',
        space_for_description: 'Singapo imported Orange',
        price: 48.56,
        current_price: '30 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://hoangdongfood.com/wp-content/uploads/2018/12/B%C6%AF%E1%BB%9EI-5-ROI.jpg',
        title: 'Pomelo',
        space_for_description: 'NewZeaLand inported Pomelo',
        price: 48.39,
        current_price: '25 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://th.bing.com/th/id/OIF.H6THFnCqfdbzU9M8yRRM4Q?pid=ImgDet&rs=1',
        title: 'Watermelon',
        space_for_description: 'China imported Watermelon',
        price: 48.56,
        current_price: '39 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://top10meohay.com/wp-content/uploads/2017/05/qua_xoai_1-660x430.jpg',
        title: 'Mango',
        space_for_description: 'England imported Mango',
        price: 45.70,
        current_price: '30 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://alodoctor.vn/wp-content/uploads/2020/11/qua-mit-8.jpg',
        title: 'Jackfruit',
        space_for_description: 'Thailand imported Jackfruit',
        price: 48.56,
        current_price: '20 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://media.bizwebmedia.net/Sites/99161/data/upload/2015/6/nho_uc.jpg?0',
        title: 'Grapes',
        space_for_description: 'Dutch imported Grapes',
        price: 48.56,
        current_price: '25 USD',
        discount: '10%',
    },
    {
        id: Math.floor(Math.random() * 1000),
        image: 'https://reviews365.net/photos/7/ng%C3%A0y%2014.6/qua-le1.jpg',
        title: 'Pears',
        space_for_description: 'Canadian imported Pears',
        price: 48.56,
        current_price: '25 USD',
        discount: '10%',
    }
];

console.log('product', product);

const productItem = product.map((item, index) => {
    return `
        <div class="product-item">
            <div class="img-container">
                <img src=${item.image} alt="">
                <p>${item.discount}</p>
            </div>

            <h3>${item.title}</h3>
            <p>${item.space_for_description}</p>
            <div class="price">
                <div>
                    <p>${item.current_price}</p>
                    <p>${item.price}</p>
                </div>
                <button>Buy now</button>
            </div>
        </div>
    `;
});
console.log(productItem);
var itemProductList = productItem.join("");
document.querySelector(".product-container").innerHTML = itemProductList;
    


