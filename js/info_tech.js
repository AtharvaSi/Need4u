const product = [{
        id: 0,
        image: 'images/product-01.jpg',
        title: 'HP 14 10th Gen Intel Core i5 Laptop',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 67880,
    },
    {
        id: 1,
        image: 'images/product-02.jpg',
        title: 'HP 15s, 11th Gen  Intel Core i5-1155G7',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 54598.00,
    },
    {
        id: 2,
        image: 'images/product-03.jpg',
        title: 'HP 245 G8  Business Laptop',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 39800,
    },
    {
        id: 3,
        image: 'images/product-04.jpg',
        title: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 189893,
    },
    {
        id: 4,
        image: 'images/Lenovo_Ideapad_Slim_5.jpg',
        title: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 74999,
    },
    {
        id: 5,
        image: 'images/dell_vostro_3400.jpg',
        title: 'Dell Vostro 3400 14" FHD Display Laptop',
        // description: 'Dell Vostro 3400 14" FHD Display Laptop (i3-1115G4 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win10 + MSO / Dune Color) D552164WIN9DE + Dell D3100 USB 3.0 Ultra HD 
        // ';
        price: 75565,
    },
    {
        id: 6,
        image: 'images/Dell_G15_5520.jpg',
        title: 'Dell G15-5520 Gaming Laptop',
        // description: 'Dell G15-5520 Gaming Laptop, Intel i5-12500H, 8GB & 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6" (39.62Cms) FHD WVA AG 120Hz 250 nits, Backlit KB, Dark Shadow Grey (245510C0R31O0MC1IN, 2.81 KGs)
        // ';
        price: 93450,
    },
    {
        id: 7,
        image: 'images/Acer_extensa_15.jpg',
        title: 'Acer Extensa 15 Lightweight Laptop',
        // description: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 256 GB SSD/ 1 TB HDD/ Windows 11 Home/ 1.7kg/ Black/ Elevated Hinge Design) EX215-54 with 39.6 cm (15.6 inches) FHD Display
        // ';
        price: 42690,
    },
    {
        id: 8,
        image: 'images/asus_vivobook_15.jpg',
        title: 'ASUS VivoBook 15',
        // description: 'ASUS VivoBook 15, Intel Core i5-1135G7 11th Gen, 15.6" (39.62 cms) FHD, Thin and Light Laptop (8GB/512 SSD/2GB NVIDIA GeForce MX330/Windows 10/FP Sensor/Silver/1.8 kg), K513EP-BQ1093T
        // ';
        price: 43990,
    },
    {
        id: 9,
        image: 'images/Asus_Rog_Zephyrus_G14.jpg',
        title: 'ASUS ROG Zephyrus G14 (2022)',
        // description: 'ASUS ROG Zephyrus G14 (2022), AMD Ryzen 9 6900HS, 14" (35.56 cm) QHD+ 120Hz/3ms, 8GB RX 6800S Graphics, Gaming Laptop (32GB/1TB SSD/Windows 11/Office 2021/Gray/AniMe Matrix/1.72 Kg), GA402RK-L8148WS
        // ';
        price: 230000,
    },
    {
        id: 10,
        image: 'images/Asus_Rog_Zephyrus_G15.jpg',
        title: 'ASUS ROG Zephyrus G15',
        // description: 'ASUS ROG Zephyrus G15, AMD Ryzen 9 6900HS, 15.6" (39.62 cm) WQHD 165Hz/3ms, 8GB RTX 3080 Graphics, Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/90WHr Battery/Gray/1.9 kg), GA503RSZ-HQ061WS
        // ';
        price: 233290,
    },
    {
        id: 11,
        image: 'images/Asus_vivobook_k15_oled.jpg',
        title: 'ASUS VivoBook K15 OLED (2022)',
        // description: 'ASUS VivoBook K15 OLED (2022) Ryzen 5 Hexa Core AMD R5-5500U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L511WS Thin and Light Laptop (15.6 inch, Hearty Gold, 1.80 kg, with MS Office)
        // ';
        price: 72990,
    },
    {
        id: 12,
        image: 'images/HP_Windows_11_All_in_One_12th_Gen.jpg',
        title: 'HP Windows 11 All-in-One 12th Gen Intel Core i3',
        // description: 'HP Windows 11 All-in-One 12th Gen Intel Core i3-23.8 inches(60.5 cm) 8GB RAM/512GB SSD/FHD, Micro-Edge, Anti-Glare Display/Wireless Keyboard & Mouse/Intel UHD Graphics/Win 11/5.37 Kg, 24-cb1901in
        // ';
        price: 58900,
    },
    {
        id: 13,
        image: 'images/HP_Laserjet_138fnw_Monochrome_Compact_Wi_Fi_Printer.jpg',
        title: 'HP Windows 11 All-in-One 12th Gen Intel Core i3',
        // description: 'HP Laserjet 138fnw Monochrome Compact Wi-Fi Printer with Network Support for Reliable, Fast Printing (Print, Copy, Scan, Fax)
        // ';
        price: 22298,
    },
    {
        id: 14,
        image: 'images/Canon_manageCLASS_LBP6030B.jpg',
        title: 'Canon imageCLASS LBP6030B',
        // description: 'Canon imageCLASS LBP6030B Single-Function Laser Monochrome Printer (Black), Standard
        // ';
        price: 12650,
    },
    {
        id: 15,
        image: 'images/LG_ultrawide_29wl50s.jpg',
        title: 'LG Ultrawide 29Wl50S 29 Inches',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
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