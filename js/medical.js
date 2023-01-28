const product = [{
        id: 0,
        image: 'images/Konica_minolta_Regius_Model_110HQ.jpg',
        title: 'Konica minolta Regius Model 110HQ',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 895000.00,
    },
    {
        id: 1,
        image: 'images/Mindray_DC-70_Ultrasound_System.jpg',
        title: 'Mindray DC-70 Ultrasound System',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 2950000.00,
    },
    {
        id: 2,
        image: 'images/philips-epiq-elite-ultrasound-machine-500x500.png',
        title: 'Philips Epiq Elite Ultrasound Machine',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 1590000.00,
    },
    {
        id: 3,
        image: 'images/ge_logic_p5_ultrasound_machine.jpg',
        title: 'GE Logic P5 Ultrasound Machine',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 785000.00,
    },
    {
        id: 4,
        image: 'images/SONOSCAPE_P10_ULTRA_MACHINE.jpg',
        title: 'SONOSCAPE P10 ULTRA MACHINE',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 1675000.00,
    },
    {
        id: 5,
        image: 'images/Toshiba_Xario_100_Ultrasound_Machine,_Color_Doppler.jpg',
        title: 'Toshiba Xario 100 Ultrasound Machine, Color Doppler',
        // description: 'Dell Vostro 3400 14" FHD Display Laptop (i3-1115G4 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win10 + MSO / Dune Color) D552164WIN9DE + Dell D3100 USB 3.0 Ultra HD 
        // ';
        price: 975000.00,
    },
    {
        id: 6,
        image: 'images/icu-bed-hf3100-removebg-preview.png',
        title: 'ICU BED',
        // description: 'Dell G15-5520 Gaming Laptop, Intel i5-12500H, 8GB & 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6" (39.62Cms) FHD WVA AG 120Hz 250 nits, Backlit KB, Dark Shadow Grey (245510C0R31O0MC1IN, 2.81 KGs)
        // ';
        price: 175000.00,
    },
    {
        id: 7,
        image: 'images/ge_logic_c5_premium_ultrasound_machine.jpg',
        title: 'GE Logic C5 Premium Ultrasound Machine',
        // description: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 256 GB SSD/ 1 TB HDD/ Windows 11 Home/ 1.7kg/ Black/ Elevated Hinge Design) EX215-54 with 39.6 cm (15.6 inches) FHD Display
        // ';
        price: 870000.00,
    },
    {
        id: 8,
        image: 'images/curvilinear-probe-removebg-preview1.png',
        title: 'Curvilinear PROBE',
        // description: 'ASUS VivoBook 15, Intel Core i5-1135G7 11th Gen, 15.6" (39.62 cms) FHD, Thin and Light Laptop (8GB/512 SSD/2GB NVIDIA GeForce MX330/Windows 10/FP Sensor/Silver/1.8 kg), K513EP-BQ1093T
        // ';
        price: 335000.00,
    },
    {
        id: 9,
        image: 'images/defibrillator-removebg-preview1.png',
        title: 'Defibrillator',
        // description: 'ASUS ROG Zephyrus G14 (2022), AMD Ryzen 9 6900HS, 14" (35.56 cm) QHD+ 120Hz/3ms, 8GB RX 6800S Graphics, Gaming Laptop (32GB/1TB SSD/Windows 11/Office 2021/Gray/AniMe Matrix/1.72 Kg), GA402RK-L8148WS
        // ';
        price: 178000.00,
    },

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