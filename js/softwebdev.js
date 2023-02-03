const product = [{
    id: 0,
        image: 'images/soft_webdev/Website-Design-Solution.png',
        title: 'Website Development',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 2000.00,
    },
    {
        id: 1,
        image: 'images/soft_webdev/Web-Application-Development.jpg',
        title: 'Application Development',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 5000.00,
    },
    {
        id: 2,
        image: 'images/soft_webdev/ERP.png',
        title: 'ERP Software Development',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 5000,
    },
    {
        id: 3,
        image: 'images/soft_webdev/quickheal_internet_total_pro_security.jpg',
        title: 'Quick Antivirus Pro/ Internet Security/ Total Security',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 500.00,
    },
    {
        id: 4,
        image: 'images/soft_webdev/k7_total_securityy.jpg',
        title: 'K7 Antivirus Pro/ Internet Security/ Total Security',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 500.00,
    },
    {
        id: 5,
        image: 'images/soft_webdev/npav.jpg',
        title: 'NP Antivirus Pro/ Internet Security/ Total Security',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 500.00,
    },
    {
        id: 6,
        image: 'images/soft_webdev/microsoft_windows_os.jpg',
        title: 'Operating System',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 500.00,
    },
    {
        id: 7,
        image: 'images/soft_webdev/microsoft_office_2022.png',
        title: 'MicroSoft Application',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 500.00,
    },
    {
        id: 8,
        image: 'images/soft_webdev/tally_prime.png',
        title: 'Accounting Software',
        // description: 'Dell Vostro 3400 14" FHD Display Laptop (i3-1115G4 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win10 + MSO / Dune Color) D552164WIN9DE + Dell D3100 USB 3.0 Ultra HD 
        // ';
        price: 500.00,
    },
    {
        id: 9,
        image: 'images/soft_webdev/tally_erp9.png',
        title: 'Tally',
        // description: 'Dell G15-5520 Gaming Laptop, Intel i5-12500H, 8GB & 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6" (39.62Cms) FHD WVA AG 120Hz 250 nits, Backlit KB, Dark Shadow Grey (245510C0R31O0MC1IN, 2.81 KGs)
        // ';
        price: 500.00,
    },
    {
        id: 10,
        image: 'images/soft_webdev/domain-1.png',
        title: 'Domain',
        // description: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 256 GB SSD/ 1 TB HDD/ Windows 11 Home/ 1.7kg/ Black/ Elevated Hinge Design) EX215-54 with 39.6 cm (15.6 inches) FHD Display
        // ';
        price: 500.00,
    },
    {
        id: 11,
        image: 'images/soft_webdev/web_hosting.png',
        title: 'Hosting',
        // description: 'ASUS VivoBook 15, Intel Core i5-1135G7 11th Gen, 15.6" (39.62 cms) FHD, Thin and Light Laptop (8GB/512 SSD/2GB NVIDIA GeForce MX330/Windows 10/FP Sensor/Silver/1.8 kg), K513EP-BQ1093T
        // ';
        price: 2000.00,
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
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
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