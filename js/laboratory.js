const product = [{
        id: 0,
        image: 'images/lab_img/AUTOCLAVE4.jpg',
        title: 'Autoclave',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 67880,
    },
    {
        id: 1,
        image: 'images/lab_img/Blood_Bank_Refrigerators_Specification.jpg',
        title: 'Blood Bank Refrigerators 18" X 18" Inch',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 218240.00,
    },
    {
        id: 2,
        image: 'images/lab_img/BOD_INCUBATORS1.jpg',
        title: 'BOD Incubator 18" X 18" Inch',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 210280.00,
    },
    {
        id: 3,
        image: 'images/lab_img/Clean_Air_Shower_CLEAN_ROOM_BOOTH.jpg',
        title: 'Clean Air Shower CLEAN ROOM BOOTH',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 189893,
    },
    {
        id: 4,
        image: 'images/lab_img/CLEAN_ROOM_EQUIPMENTS.jpg',
        title: 'CLEAN ROOM EQUIPMENTS',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 74999,
    },
    {
        id: 5,
        image: 'images/lab_img/CLEAN_STORAGE_CABINET.jpg',
        title: 'CLEAN STORAGE CABINET',
        // description: 'Dell Vostro 3400 14" FHD Display Laptop (i3-1115G4 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win10 + MSO / Dune Color) D552164WIN9DE + Dell D3100 USB 3.0 Ultra HD 
        // ';
        price: 75565,
    },
    {
        id: 6,
        image: 'images/lab_img/CO2_INCUBATOR1.jpg',
        title: 'CO2 INCUBATOR 18x18x18inch',
        // description: 'Dell G15-5520 Gaming Laptop, Intel i5-12500H, 8GB & 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6" (39.62Cms) FHD WVA AG 120Hz 250 nits, Backlit KB, Dark Shadow Grey (245510C0R31O0MC1IN, 2.81 KGs)
        // ';
        price: 979040,
    },
    {
        id: 7,
        image: 'images/lab_img/Deep_Freezer_vertical1.jpg',
        title: 'Deep Freezer 20deg C 100-115liter',
        // description: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 256 GB SSD/ 1 TB HDD/ Windows 11 Home/ 1.7kg/ Black/ Elevated Hinge Design) EX215-54 with 39.6 cm (15.6 inches) FHD Display
        // ';
        price: 232000,
    },
    {
        id: 8,
        image: 'images/lab_img/Deep_Freezer_vertical4.jpg',
        title: 'Deep Freezer 86deg C',
        // description: 'ASUS VivoBook 15, Intel Core i5-1135G7 11th Gen, 15.6" (39.62 cms) FHD, Thin and Light Laptop (8GB/512 SSD/2GB NVIDIA GeForce MX330/Windows 10/FP Sensor/Silver/1.8 kg), K513EP-BQ1093T
        // ';
        price: 748950,
    },
    {
        id: 9,
        image: 'images/lab_img/FREEZ_DRYER_LYPHOLYZER_TABLE_TOP_HIGH_CAPACITY1.jpg',
        title: 'LYPHOLYZER with HMI 6x4inch  temp. -86°C ',
        // description: 'ASUS ROG Zephyrus G14 (2022), AMD Ryzen 9 6900HS, 14" (35.56 cm) QHD+ 120Hz/3ms, 8GB RX 6800S Graphics, Gaming Laptop (32GB/1TB SSD/Windows 11/Office 2021/Gray/AniMe Matrix/1.72 Kg), GA402RK-L8148WS
        // ';
        price: 1630400,
    },
    {
        id: 10,
        image: 'images/lab_img/FUME_HOODS_CHEMICAL_HOODS.jpg',
        title: 'FUME HOOD 2x2.5x2ft',
        // description: 'ASUS ROG Zephyrus G15, AMD Ryzen 9 6900HS, 15.6" (39.62 cm) WQHD 165Hz/3ms, 8GB RTX 3080 Graphics, Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/90WHr Battery/Gray/1.9 kg), GA503RSZ-HQ061WS
        // ';
        price: 572800,
    },
    {
        id: 11,
        image: 'images/lab_img/germination_chamber.jpg',
        title: 'Germination Chamber 2x2.5x2ft.',
        // description: 'ASUS VivoBook K15 OLED (2022) Ryzen 5 Hexa Core AMD R5-5500U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L511WS Thin and Light Laptop (15.6 inch, Hearty Gold, 1.80 kg, with MS Office)
        // ';
        price: 378000,
    },
    {
        id: 12,
        image: 'images/lab_img/INCUBATOR_SHAKER2.jpg',
        title: 'INCUBATOR SHAKER 8x250ml flask',
        // description: 'HP Windows 11 All-in-One 12th Gen Intel Core i3-23.8 inches(60.5 cm) 8GB RAM/512GB SSD/FHD, Micro-Edge, Anti-Glare Display/Wireless Keyboard & Mouse/Intel UHD Graphics/Win 11/5.37 Kg, 24-cb1901in
        // ';
        price: 199260,
    },
    {
        id: 13,
        image: 'images/lab_img/INCUBATOR_SHAKER1.jpg',
        title: 'INCUBATOR SHAKER ',
        // description: 'HP Laserjet 138fnw Monochrome Compact Wi-Fi Printer with Network Support for Reliable, Fast Printing (Print, Copy, Scan, Fax)
        // ';
        price: 22298,
    },
    {
        id: 14,
        image: 'images/lab_img/LAB_INCUBATORS2.jpg',
        title: 'LAB INCUBATORS',
        // description: 'Canon imageCLASS LBP6030B Single-Function Laser Monochrome Printer (Black), Standard
        // ';
        price: 12650,
    },
    {
        id: 15,
        image: 'images/lab_img/LABORATORIES_REFRIGERATOR1.jpg',
        title: 'LABORATORIES REFRIGERATOR ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 16,
        image: 'images/lab_img/MODULAR_CLEAN_ROOMS_SOFTWALL_HARD_WALL1.jpg',
        title: 'MODULAR CLEAN ROOMS SOFTWALL or HARD WALL ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 17,
        image: 'images/lab_img/MUFFLE_FURNACE_UPTO.jpg',
        title: 'MUFFLE FURNACE UPTO 1800°C ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 18,
        image: 'images/lab_img/OVENS3.jpg',
        title: 'OVENS ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 19,
        image: 'images/lab_img/PASS_BOX_STATIC_DYNAMIC.jpg',
        title: 'PASS BOX STATIC DYNAMIC ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 20,
        image: 'images/lab_img/photostability_chamber2.jpg',
        title: 'Photostability Chamber ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 21,
        image: 'images/lab_img/plant_growth_chamber.jpg',
        title: 'Plant Growth Chamber ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 22,
        image: 'images/lab_img/SALT_SPRAY_TEST_CHAMBER1.jpg',
        title: 'SALT SPRAY TEST CHAMBER ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 23,
        image: 'images/lab_img/SHAKERS.jpg',
        title: 'SHAKERS ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 24,
        image: 'images/lab_img/TISSUE_CULTURE_RACKS4.jpg',
        title: 'TISSUE CULTURE RACKS ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 25,
        image: 'images/lab_img/VACUUM_OVEN_ROUND_RECTANGULAR.jpg',
        title: 'VACUUM OVEN ROUND RECTANGULAR ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 26,
        image: 'images/lab_img/WALK_IN_INCUBATOR.jpg',
        title: 'WALK IN INCUBATOR ',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 26500,
    },
    {
        id: 27,
        image: 'images/lab_img/WALK_IN_COLD_ROOM_CHAMBER2.jpg',
        title: 'WALK IN COLD ROOM CHAMBER ',
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