const body = $('body');

body.css({
    'position': 'relative'
})

const shop = Shopify.shop;


const makeApp = products => {

    const bestSellerContainer = $(
        `<div style="overflow-y: scroll;">
            <h3>Our Best Sellers</h3>
            ${products.map(item => {
                return `
                <a href="/products/${item.handle}" style="display: flex; align-items: center; padding: 20px 10px; border-top: 1px solid black;">
                    <img src=${item.images[0].originalSrc} style="width: 75px;" />
                    <div style="display: flex; justify-content: space-between; align-items: start; width: 100%;">
                        <p style="padding: 0 10px;">${item.title}</p>
                        <p>${item.variants[0].price}</p>
                    </div>
                </a>
                `
            }).join('')
        }
        </div>`
    )
    .css({
        'position': 'fixed',
        'background-color': '#ffffff',
        'padding': '10px',
        'border': '1px solid black',
        'bottom': '80px',
        'right': '25px',
        'height': '400px',
        'width': '350px',
        'display': 'none'
    })

    const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png?v=1584741923')
        .css({
            'position': 'fixed',
            'width': '150px',
            'bottom': '20px',
            'right': '20px',
            'cursor': 'pointer'
        })

        body.append(bestSellerButton);
        body.append(bestSellerContainer);

        bestSellerButton.click(() => {
            bestSellerContainer.slideToggle();
        })
}


fetch('https://cors-anywhere.herokuapp.com/https://d733e9bf.ngrok.io/api/products?shop=shop=sample-udemy-app-store.myshopify.com')
    .then(res => res.json())
    .then(data => {
        makeApp(data.data)
        console.log(data)
    })
    .catch(error => console.log(error))