
const header = $('header.site-header').parent();

header.prepend('<div>Hello this is coming from the public folder</div>').css({ 'background-color': 'orange', 'text-align': 'center' });

const body = $('body')

// body.prepend('<div>This is best sellers</div>').css({ 'position': 'fixed', 'bottom': '5px', 'right': '10px' })

const shop = window.location.host


// fetch(`https://cors-anywhere.herokuapp.com/https://305b659c.ngrok.io/api/products?shop=${shop}`, {
//     method: "GET",
//     headers: {
//         'Content-Type': 'application/json'
//     }
// },
// )
//     .then((res) => res.text())
//     .then(data => console.log('this is data', data))
//     .catch(err => console.log(err))

$.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://305b659c.ngrok.io/api/products?shop=${shop}`,
    type: 'Get',
    success: function (result) {
        console.log(result);
    }
});