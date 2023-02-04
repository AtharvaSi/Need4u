const product = [{
        id: 0,
        image: 'images/air_conditioners/ac.png',
        title: 'IFB',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 00000,
    },
    {
        id: 1,
        image: 'images/air_conditioners/airconditioners.png',
        title: 'LG',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 00000,
    },
    {
        id: 2,
        image: 'images/air_conditioners/ac.png',
        title: 'Samsung',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 00000,
    },
    {
        id: 3,
        image: 'images/air_conditioners/airconditioners.png',
        title: 'Panasonic',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 00000,
    },
    {
        id: 4,
        image: 'images/air_conditioners/ac.png',
        title: 'Blue Star',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 00000,
    }
    
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs. ${price}.00</h2>` +
        // "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        // `</div>

        "<button onclick='addtocart(" + (i++) + ")'>Call for Enquiry</button>" +
        `</div>


        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0,
        total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "Rs. " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }


}