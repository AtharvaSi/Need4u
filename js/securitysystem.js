const product = [{
        id: 0,
        image: 'images/security_system/CP_Plus_HD_24MP_TC24PL2_1050.png',
        title: 'CP Plus HD 2.4MP Bullet CCTV (CP-URC-TC24PL2)',
        // description: 'HP 14 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg & 680 Original Ink Advantage 
        // ';
        price: 1150.00,
    },
    {
        id: 1,
        image: 'images/security_system/CP_Plus_HD_2.4MP_Guard_Dome_CCTV_(CP-GPC-D24L2-S)1400.png',
        title: 'CP Plus HD 2.4MP Guard Dome CCTV (CP-GPC-D24L2-S)',
        // description: 'HP 15s, 11th Gen  Intel Core i5-1155G7, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/Intel Iris Xe Graphics/Win 11/Dual Speakers/Backlit KeyboardAlexa Built-in/MSO 2021) 15s-fr4000TU
        // ';
        price: 1550.00,
    },
    {
        id: 2,
        image: 'images/security_system/CP_Plus_2.4MP_HQIS_Pro_Image_Sensor.png',
        title: 'CP Plus 2.4MP HQIS Pro Image Sensor',
        // description: 'HP 245 G8  Business Laptop PC with AMD Ryzen™ 3 3250U/8 GB DDR4 RAM/512 GB PCIe® NVMe™ SSD /AMD Radeon™ Graphics/35.6 cm (14" inch)/Windows 11/Matte Black/1.5 KG/1 Year Onsite Warranty
        // ';
        price: 1500.00,
    },
    {
        id: 3,
        image: 'images/security_system/Dahua_16_Channel_H.265_Embedded_NVR_(DH-NVR2116-4KS2)5750.png',
        title: 'Dahua 16 Channel H.265 Embedded NVR (DH-NVR2116-4KS2)',
        // description: 'Lenovo Legion 5 Pro AMD Ryzen 7 6800H 16" (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Glacier White/2.5Kg), 82RG00ELIN
        // ';
        price: 5950.00,
    },
    {
        id: 4,
        image: 'images/security_system/D-Link_16_PortMetal_CCTV_Power_Supply1350.png',
        title: 'LD-Link 16 Port Metal CCTV Power Supply',
        // description: 'Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg),82FG01B3IN
        // ';
        price: 1450.00,
    },
    {
        id: 5,
        image: 'images/security_system/D-Link_90m_Standard_Pure_Copper-CCTV_(DCC-CAL-90)1350.png',
        title: 'D-Link 90m Standard Pure Copper CCTV (DCC-CAL-90)',
        // description: 'Dell Vostro 3400 14" FHD Display Laptop (i3-1115G4 / 4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Win10 + MSO / Dune Color) D552164WIN9DE + Dell D3100 USB 3.0 Ultra HD 
        // ';
        price: 1450.00,
    },
    {
        id: 6,
        image: 'images/security_system/CPPlus5Amp12VMetalPowerSupply550.png',
        title: 'CP Plus 5Amp 12V Metal Power Supply',
        // description: 'Dell G15-5520 Gaming Laptop, Intel i5-12500H, 8GB & 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6" (39.62Cms) FHD WVA AG 120Hz 250 nits, Backlit KB, Dark Shadow Grey (245510C0R31O0MC1IN, 2.81 KGs)
        // ';
        price: 650.00,
    },
    {
        id: 7,
        image: 'images/security_system/CPPlus10Amp12VMetalBodyPowerSupply(CP-DPS-MD100)750.png',
        title: 'CP Plus 10Amp 12V Metal Body Power Supply (CP-DPS-MD100)',
        // description: 'Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 256 GB SSD/ 1 TB HDD/ Windows 11 Home/ 1.7kg/ Black/ Elevated Hinge Design) EX215-54 with 39.6 cm (15.6 inches) FHD Display
        // ';
        price: 850.00,
    },
    {
        id: 8,
        image: 'images/security_system/CPPlus20Amp12VMetalBodyPowerSupply(CP-DPS-MD200)1350.png',
        title: 'CP Plus 20Amp 12V Metal Body Power Supply (CP-DPS-MD200)',
        // description: 'ASUS VivoBook 15, Intel Core i5-1135G7 11th Gen, 15.6" (39.62 cms) FHD, Thin and Light Laptop (8GB/512 SSD/2GB NVIDIA GeForce MX330/Windows 10/FP Sensor/Silver/1.8 kg), K513EP-BQ1093T
        // ';
        price: 1450.00,
    },
    {
        id: 9,
        image: 'images/security_system/D-Link4PortCCTVPowerSupply(DPS-F1C04)550.png',
        title: 'D-Link 4 Port CCTV Power Supply (DPS-F1C04)',
        // description: 'ASUS ROG Zephyrus G14 (2022), AMD Ryzen 9 6900HS, 14" (35.56 cm) QHD+ 120Hz/3ms, 8GB RX 6800S Graphics, Gaming Laptop (32GB/1TB SSD/Windows 11/Office 2021/Gray/AniMe Matrix/1.72 Kg), GA402RK-L8148WS
        // ';
        price: 650.00,
    },
    {
        id: 10,
        image: 'images/security_system/D-Link8PortCCTVPowerSupply(DPS-F1C08)750.png',
        title: 'D-Link 8 Port CCTV Power Supply (DPS-F1C08)',
        // description: 'ASUS ROG Zephyrus G15, AMD Ryzen 9 6900HS, 15.6" (39.62 cm) WQHD 165Hz/3ms, 8GB RTX 3080 Graphics, Gaming Laptop (16GB/1TB SSD/Win 11/Office 2021/90WHr Battery/Gray/1.9 kg), GA503RSZ-HQ061WS
        // ';
        price: 850.00,
    },
    {
        id: 11,
        image: 'images/security_system/ZVisionWi-Fi1.3MPPanoramic360°FishEyeWirelessIPCCTVCamera1500.png',
        title: 'ZVision Wi-Fi 1.3MP Panoramic 360° Fish Eye Wireless IP CCTV Camera',
        // description: 'ASUS VivoBook K15 OLED (2022) Ryzen 5 Hexa Core AMD R5-5500U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L511WS Thin and Light Laptop (15.6 inch, Hearty Gold, 1.80 kg, with MS Office)
        // ';
        price: 2200.00,
    },
    {
        id: 12,
        image: 'images/security_system/ZVisionWi-Fi2MP1080pWirelessIPCCTVCamera1150.png',
        title: 'ZVision Wi-Fi 2MP 1080p Wireless IP CCTV Camera',
        // description: 'HP Windows 11 All-in-One 12th Gen Intel Core i3-23.8 inches(60.5 cm) 8GB RAM/512GB SSD/FHD, Micro-Edge, Anti-Glare Display/Wireless Keyboard & Mouse/Intel UHD Graphics/Win 11/5.37 Kg, 24-cb1901in
        // ';
        price: 1450.00,
    },
    {
        id: 13,
        image: 'images/security_system/ZVisionWi-Fi2MP1080pWirelessPanTiltIPCCTVCamera2150.png',
        title: 'ZVision Wi-Fi 2MP 1080p Wireless Pan Tilt IP CCTV Camera',
        // description: 'HP Laserjet 138fnw Monochrome Compact Wi-Fi Printer with Network Support for Reliable, Fast Printing (Print, Copy, Scan, Fax)
        // ';
        price: 2450,
    },
    {
        id: 14,
        image: 'images/security_system/ZVisionWiFi2MPIP1080pWirelessBulletCCTVCamera1850.png',
        title: 'CZVision WiFi 2MP IP 1080p Wireless Bullet CCTV Camera',
        // description: 'Canon imageCLASS LBP6030B Single-Function Laser Monochrome Printer (Black), Standard
        // ';
        price: 2050.00,
    },
    {
        id: 15,
        image: 'images/security_system/DahuaHD2MPBulletCCTV(DH-HAC-B1A21P)1050.png',
        title: 'Dahua HD 2MP Bullet CCTV (DH-HAC-B1A21P)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 1150.00,
    },
    {
        id: 16,
        image: 'images/security_system/DahuaIP2MPBulletFull-TimeColorNetworkCCTV(IPC-HFW1239S1P-LED-S4)3250.png',
        title: 'Dahua IP 2MP Bullet Full-Time Color Network CCTV (IPC-HFW1239S1P-LED-S4)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3550.00,
    },
    {
        id: 17,
        image: 'images/security_system/DahuaHD2MPBulletCCTV(DH-HAC-B1A21P)1050.png',
        title: 'Dahua HD 2MP Bullet CCTV (DH-HAC-B1A21P)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 1150.00,
    },
    {
        id: 18,
        image: 'images/security_system/HIKVISIONIP2MP2.0MPIP25x100mtrsSpeedDomePTZ(DS-2DE4225IW-DE)29500.png',
        title: 'HIKVISION IP 2MP 2.0MP IP 25x 100mtrs Speed Dome PTZ (DS-2DE4225IW-DE)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 31500.00,
    },
    {
        id: 19,
        image: 'images/security_system/HIKVISIONIP2MPBulletH.265NetworkCCTV(DS-2CD1023G0E-I)2975.png',
        title: 'HIKVISION IP 2MP Bullet H.265+ Network CCTV (DS-2CD1023G0E-I)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3175.00,
    },
    {
        id: 20,
        image: 'images/security_system/HIKVISIONIP2MPDomeH.265NetworkCCTV(DS2CD1323G0E-I)2900.png',
        title: 'HIKVISION IP 2MP Dome H.265+ Network CCTV (DS-2CD1323G0E-I)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3150.00,
    },
    {
        id: 21,
        image: 'images/security_system/HIKVISIONIP2MPDomeIn-BuiltNetworkCCTV(DS-2CD1323G0-IUF)3950.png',
        title: 'HIKVISION IP 2MP Dome In-Built Network CCTV (DS-2CD1323G0-IUF)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4150.00,
    },
    {
        id: 22,
        image: 'images/security_system/HIKVISIONIP4MPColorVuBulletH.265NetworkCCTV(DS-2CD1047G0-L)6150.png',
        title: 'HIKVISION IP 4MP ColorVu Bullet H.265+ Network CCTV (DS-2CD1047G0-L)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 6350.00,
    },
    {
        id: 23,
        image: 'images/security_system/HIKVISIONIP4MPDomeColorVuH.265NetworkCCTV(DS-2CD1347G0-L)5950.png',
        title: 'HIKVISION IP 4MP Dome ColorVu H.265+ Network CCTV (DS-2CD1347G0-L)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 6250.00,
    },
    
    {
        id: 24,
        image: 'images/security_system/HIKVISIONProIP2MPDomeH.265NetworkCCTV(DS-2CD2123G2-IU)4595.png',
        title: 'HIKVISION Pro IP 2MP Dome H.265+ Network CCTV (DS-2CD2123G2-IU)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4795.00,
    },
    {
        id: 25,
        image: 'images/security_system/EZVIZWi-Fi2MPPanTilt1080pWirelessBabyMonitorCamera(TY1)2650.png',
        title: 'EZVIZ Wi-Fi 2MP Pan Tilt 1080p Wireless Baby Monitor Camera (TY1)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 2850.00,
    },
    {
        id: 26,
        image: 'images/security_system/EZVIZWi-Fi2MPWireless1080PIPColorNightVisionCCTVCamera(C3N)3950.png',
        title: 'EZVIZ Wi-Fi 2MP Wireless 1080P IP Color Night Vision CCTV Camera (C3N)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4150.00,
    },
    {
        id: 27,
        image: 'images/security_system/eSSLF22Wi-FiFingerprintBiometricTimeAttendanceMachine9750.png',
        title: 'eSSL F22 Wi-Fi Fingerprint Biometric Time Attendance Machine',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 10250.00,
    },
    {
        id: 28,
        image: 'images/security_system/eSSLK30ProIdentixFingerprintTimeAttendancewithAccessControl5250.png',
        title: 'eSSL K30 Pro Identix Fingerprint Time Attendance with Access Control',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 6250.00,
    },
    {
        id: 29,
        image: 'images/security_system/eSSLK90ProIdentixFingerprintTime&AttendancewithAccessControl4750.png',
        title: 'eSSL K90 Pro Identix Fingerprint Time & Attendance with Access Control',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 5350.00,
    },
    {
        id: 30,
        image: 'images/security_system/eSSLMB-160FaceTimeAttendancewithAccessControlMachine10500.png',
        title: 'eSSL MB-160 Face Time Attendance with Access Control Machine',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 11550.00,
    },
    {
        id: 31,
        image: 'images/security_system/eSSLx990FingerprintBiometricTimeAttendancewithAccessControl11750.png',
        title: 'eSSL x990 Fingerprint Biometric Time Attendance with Access Control',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 12850.00,
    },
    {
        id: 32,
        image: 'images/security_system/MASTELWiFi4GDeviceDongle,Hotspot,SupportAllsimCards,SpeedUpto300Mbps2250.png',
        title: 'MASTEL WiFi 4G Device Dongle, Hotspot, Support All sim Cards, Speed Upto 300Mbps',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 2650.00,
    },
    {
        id: 33,
        image: 'images/security_system/PVCRackforMiniDVRandPoESwitch(IndoorOutdoor)650.png',
        title: 'PVC Rack for Mini DVR and PoE Switch (Indoor Outdoor)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 750.00,
    },
    {
        id: 34,
        image: 'images/security_system/RealtimeC101WWiFiBiometricAttendanceMachine4250.png',
        title: 'Realtime C101W Wi-Fi Biometric Attendance Machine',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4450.00,
    },
    {
        id: 35,
        image: 'images/security_system/RealtimeRS9WWi-FiBiometricAttendanceMachinewithAccessControl4750.png',
        title: 'Realtime RS9W Wi-Fi Biometric Attendance Machine with Access Control',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 5150.00,
    },
    {
        id: 36,
        image: 'images/security_system/Trueview4GSIMSupport3MPBulletAllTIMEColorWirelessCCTVCamera(T180751)3750.png',
        title: 'Trueview 4G SIM Support 3MP Bullet All TIME Color Wireless CCTV Camera (T180751)',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3950.00,
    },
    {
        id: 37,
        image: 'images/security_system/SeagateSkyhawk1TBSurveillanceHardDrive3500.png',
        title: 'Seagate Skyhawk 1TB Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3900.00,
    },
    {
        id: 38,
        image: 'images/security_system/SeagateSkyhawk2TBSurveillanceHardDrive4500.png',
        title: 'Seagate Skyhawk 2TB Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4850.00,
    },
    {
        id: 39,
        image: 'images/security_system/SeagateSkyhawk4TBSurveillanceHardDrive7950.png',
        title: 'Seagate Skyhawk 4TB Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 8350.00,
    },
    {
        id: 40,
        image: 'images/security_system/SeagateSkyHawk6TBSurveillanceardDrive12750.png',
        title: 'Seagate SkyHawk 6TB Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 13850.00,
    },
    {
        id: 41,
        image: 'images/security_system/SeagateSkyhawk8TBSurveillanceInternalHardDrive18500.png',
        title: 'Seagate Skyhawk 8TB Surveillance Internal Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 19750.00,
    },
    {
        id: 42,
        image: 'images/security_system/WDPurple1TBSATASurveillanceHardDrive3500.png',
        title: 'WD Purple 1TB SATA Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 3950.00,
    },
    {
        id: 43,
        image: 'images/security_system/WDPurple2TBSATASurveillanceHardDrive4500.png',
        title: 'WD Purple 2TB SATA Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 4950.00,
    },
    {
        id: 44,
        image: 'images/security_system/WDPurple4TBSATASurveillanceHardDrive7950.png',
        title: 'WD Purple 4TB SATA Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 8300.00,
    },
    {
        id: 45,
        image: 'images/security_system/WDPurple6TBSATASurveillanceHardDrive12750.png',
        title: 'WD Purple 6TB SATA Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 13850.00,
    },
    {
        id: 46,
        image: 'images/security_system/WDPurple8TBSATASurveillanceHardDrive18500.png',
        title: 'WD Purple 8TB SATA Surveillance Hard Drive',
        // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
        // ';
        price: 19500.00,
    },
    // {
    //     id: 37,
    //     image: 'images/security_system/SeagateSkyhawk1TBSurveillanceHardDrive3500.png',
    //     title: 'Seagate Skyhawk 1TB Surveillance Hard Drive',
    //     // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
    //     // ';
    //     price: 3900.00,
    // },
    // {
    //     id: 38,
    //     image: 'images/security_system/SeagateSkyhawk2TBSurveillanceHardDrive4500.png',
    //     title: 'Seagate Skyhawk 2TB Surveillance Hard Drive',
    //     // description: 'LG Ultrawide 29Wl50S 29 Inches (73 Cm) Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, Srgb 99%, Multi Tasking Monitor, Hdmi X 2 (Black)
    //     // ';
    //     price: 4850.00,
    // }
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