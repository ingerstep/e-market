import { Phone } from 'src/phones/phone.entity';
import { arrayToString } from 'src/utils';

const phonesData: Omit<Phone, 'id'>[] = [
  {
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    price: 1199,
    screenDiagonal: '6.1"',
    screenResolution: '1284x2778',
    screenRefreshRate: '120Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A16 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone14pro1.webp',
      'http://localhost:3000/static/phones/apple/iphone14pro2.webp',
      'http://localhost:3000/static/phones/apple/iphone14pro3.webp',
    ],
    colors: ['Silver', 'Space Black', 'Deep Purple'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '48MP',
    frontCamera: '12MP',
    details: 'Latest iPhone with A16 chip and ProMotion display',
    capacity: '3200mAh',
    additionally: ['5G', 'Face ID', 'Wireless Charging'],
    pixelDensity: '460ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 1499,
    screenDiagonal: '6.8"',
    screenResolution: '1440x3088',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Snapdragon 8 Gen 2',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxys23ultra1.png',
      'http://localhost:3000/static/phones/samsung/samsunggalaxys23ultra2.png',
      'http://localhost:3000/static/phones/samsung/samsunggalaxys23ultra3.png',
    ],
    colors: ['Phantom Black', 'Cream', 'Green'],
    memory: ['256GB', '512GB', '1TB'],
    mainCamera: '200MP',
    frontCamera: '40MP',
    details: 'Flagship Samsung phone with high-end specs and camera',
    capacity: '5000mAh',
    additionally: ['5G', 'S Pen', 'IP68', 'Wireless Charging'],
    pixelDensity: '500ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Mi 11 Ultra',
    brand: 'Xiaomi',
    price: 999,
    screenDiagonal: '6.8"',
    screenResolution: '1440x3200',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 888',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomimi11ultra1.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra2.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra3.webp',
    ],
    colors: ['Black', 'White', 'Blue'],
    memory: ['256GB', '512GB'],
    mainCamera: '50MP',
    frontCamera: '20MP',
    details: 'Premium Xiaomi phone with a high-resolution camera system',
    capacity: '5000mAh',
    additionally: ['5G', 'Wireless Charging', 'NFC'],
    pixelDensity: '515ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'iPhone 13 Mini',
    brand: 'Apple',
    price: 699,
    screenDiagonal: '5.4"',
    screenResolution: '1080x2340',
    screenRefreshRate: '60Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A15 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone13mini1.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini2.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini3.webp',
    ],
    colors: ['Starlight', 'Midnight', 'Pink'],
    memory: ['128GB', '256GB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'Compact iPhone with the A15 chip and excellent performance',
    capacity: '2438mAh',
    additionally: ['5G', 'Face ID'],
    pixelDensity: '476ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy Z Fold 4',
    brand: 'Samsung',
    price: 1799,
    screenDiagonal: '7.6"',
    screenResolution: '1812x2176',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Snapdragon 8 Gen 1',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold41.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold42.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold43.webp',
    ],
    colors: ['Graygreen', 'Burgundy', 'Phantom Black'],
    memory: ['512GB', '1TB'],
    mainCamera: '50MP',
    frontCamera: '10MP',
    details: 'Innovative foldable phone with a large internal display',
    capacity: '4400mAh',
    additionally: ['5G', 'Wireless Charging', 'IPX8'],
    pixelDensity: '374ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Redmi Note 11 Pro',
    brand: 'Xiaomi',
    price: 399,
    screenDiagonal: '6.6"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'MediaTek Dimensity 920',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro1.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro2.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro3.webp',
    ],
    colors: ['Graphite Gray', 'Polar White', 'Lunar Light'],
    memory: ['128GB'],
    mainCamera: '108MP',
    frontCamera: '16MP',
    details:
      'Affordable phone with a high-resolution camera and fast refresh rate',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone SE',
    brand: 'Apple',
    price: 429,
    screenDiagonal: '4.7"',
    screenResolution: '750x1334',
    screenRefreshRate: '60Hz',
    screenType: 'Retina HD',
    cpu: 'A15 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphonese1.jpg',
      'http://localhost:3000/static/phones/apple/iphonese2.webp',
      'http://localhost:3000/static/phones/apple/iphonese3.webp',
    ],
    colors: ['Midnight', 'Starlight'],
    memory: ['64GB', '128GB', '256GB'],
    mainCamera: '12MP',
    frontCamera: '7MP',
    details: 'Compact iPhone with the powerful A15 chip at an affordable price',
    capacity: '2018mAh',
    additionally: ['5G', 'Touch ID'],
    pixelDensity: '326ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'Samsung Galaxy A52',
    brand: 'Samsung',
    price: 499,
    screenDiagonal: '6.5"',
    screenResolution: '1080x2400',
    screenRefreshRate: '90Hz',
    screenType: 'Super AMOLED',
    cpu: 'Snapdragon 720G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxya521.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya522.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya523.webp',
    ],
    colors: ['Awesome Violet', 'Awesome Black', 'Awesome White'],
    memory: ['128GB'],
    mainCamera: '64MP',
    frontCamera: '32MP',
    details:
      'Mid-range phone with a high-refresh-rate display and good performance',
    capacity: '4500mAh',
    additionally: ['5G', 'NFC', 'Waterproof'],
    pixelDensity: '407ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Poco X4 Pro',
    brand: 'Xiaomi',
    price: 299,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 695',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro1.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro2.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro3.png',
    ],
    colors: ['Laser Black', 'Laser Blue', 'Golden Yellow'],
    memory: ['128GB', '256GB'],
    mainCamera: '108MP',
    frontCamera: '16MP',
    details:
      'Performance-oriented phone with a high-refresh-rate screen at a budget price',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy Note 20 Ultra',
    brand: 'Samsung',
    price: 1299,
    screenDiagonal: '6.9"',
    screenResolution: '1440x3088',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Snapdragon 865+',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxynote20ultra1.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxynote20ultra2.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxynote20ultra3.webp',
    ],
    colors: ['Mystic Bronze', 'Mystic Black', 'Mystic White'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '108MP',
    frontCamera: '10MP',
    details: 'High-end phone with a large display and S Pen support',
    capacity: '4500mAh',
    additionally: ['5G', 'S Pen', 'Wireless Charging'],
    pixelDensity: '496ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    price: 1099,
    screenDiagonal: '6.7"',
    screenResolution: '2778x1284',
    screenRefreshRate: '120Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A15 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone13mini1.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini2.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini3.webp',
    ],
    colors: ['Sierra Blue', 'Graphite', 'Gold'],
    memory: ['128GB', '256GB', '512GB', '1TB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'Large iPhone with excellent camera and display technology',
    capacity: '4352mAh',
    additionally: ['5G', 'Face ID', 'Wireless Charging'],
    pixelDensity: '458ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'Xiaomi Mi 11 Lite',
    brand: 'Xiaomi',
    price: 349,
    screenDiagonal: '6.5"',
    screenResolution: '1080x2400',
    screenRefreshRate: '90Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 865',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomimi11lite1.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomimi11lite2.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomimi11lite3.png',
    ],
    colors: ['Truffle Black', 'Bubblegum Blue', 'Peach Pink'],
    memory: ['64GB', '128GB'],
    mainCamera: '64MP',
    frontCamera: '16MP',
    details: 'Slim and light phone with a good camera and refresh rate',
    capacity: '4352mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '407ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy Z Flip 4',
    brand: 'Samsung',
    price: 999,
    screenDiagonal: '6.7"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Snapdragon 8 Gen 1',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzflip41.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzflip42.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzflip43.webp',
    ],
    colors: ['Laser Blue', 'Graphite', 'Silver'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '12MP',
    frontCamera: '10MP',
    details:
      'Stylish foldable phone with a compact design and high refresh rate',
    capacity: '3500mAh',
    additionally: ['5G', 'Wireless Charging', 'IPX8'],
    pixelDensity: '450ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Redmi Note 10 Pro',
    brand: 'Xiaomi',
    price: 399,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 732G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro1.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro2.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro3.webp',
    ],
    colors: ['Onyx Gray', 'Glacier Blue', 'Amber Bronze'],
    memory: ['64GB', '128GB'],
    mainCamera: '108MP',
    frontCamera: '16MP',
    details: 'Mid-range phone with high refresh rate and large camera sensor',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone 12 Pro',
    brand: 'Apple',
    price: 999,
    screenDiagonal: '6.1"',
    screenResolution: '1080x2400',
    screenRefreshRate: '60Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A14 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone12mini1.webp',
      'http://localhost:3000/static/phones/apple/iphone12mini2.webp',
      'http://localhost:3000/static/phones/apple/iphone12mini3.webp',
    ],
    colors: ['Graphite', 'Silver', 'Gold'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'iPhone with advanced camera system and solid performance',
    capacity: '3200mAh',
    additionally: ['5G', 'Face ID', 'Ceramic Shield'],
    pixelDensity: '460ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'Samsung Galaxy A72',
    brand: 'Samsung',
    price: 429,
    screenDiagonal: '6.7"',
    screenResolution: '1080x2400',
    screenRefreshRate: '90Hz',
    screenType: 'Super AMOLED',
    cpu: 'Snapdragon 720G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxya521.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya522.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya523.webp',
    ],
    colors: ['Awesome Blue', 'Awesome Black', 'Awesome Violet'],
    memory: ['128GB', '256GB'],
    mainCamera: '64MP',
    frontCamera: '32MP',
    details: 'Mid-range phone with good display and camera features',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Poco F3',
    brand: 'Xiaomi',
    price: 349,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 870',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro1.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro2.png',
      'http://localhost:3000/static/phones/xiaomi/xiaomipocox4pro3.png',
    ],
    colors: ['Arctic White', 'Night Black', 'Deep Ocean Blue'],
    memory: ['128GB', '256GB'],
    mainCamera: '48MP',
    frontCamera: '20MP',
    details: 'Affordable performance phone with high refresh rate',
    capacity: '4500mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone 11 Pro Max',
    brand: 'Apple',
    price: 1099,
    screenDiagonal: '6.5"',
    screenResolution: '1242x2688',
    screenRefreshRate: '60Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A13 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone11pro1.webp',
      'http://localhost:3000/static/phones/apple/iphone11pro2.webp',
      'http://localhost:3000/static/phones/apple/iphone11pro3.webp',
    ],
    colors: ['Midnight Green', 'Space Gray', 'Silver', 'Gold'],
    memory: ['64GB', '256GB', '512GB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'Flagship iPhone with triple-camera system and large display',
    capacity: '4000mAh',
    additionally: ['5G', 'Face ID', 'Ceramic Shield'],
    pixelDensity: '458ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy S21 Ultra',
    brand: 'Samsung',
    price: 1199,
    screenDiagonal: '6.8"',
    screenResolution: '1440x3200',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Exynos 2100',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxya521.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya522.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya523.webp',
    ],
    colors: ['Phantom Black', 'Phantom Silver', 'Phantom Violet'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '108MP',
    frontCamera: '40MP',
    details: 'High-end phone with an excellent camera and large display',
    capacity: '5000mAh',
    additionally: ['5G', 'S Pen Support', 'Wireless Charging'],
    pixelDensity: '515ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'Xiaomi Redmi Note 10 Pro',
    brand: 'Xiaomi',
    price: 349,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 732G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro1.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro2.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro3.webp',
    ],
    colors: ['Onyx Gray', 'Glacier Blue', 'Amber Bronze'],
    memory: ['64GB', '128GB'],
    mainCamera: '108MP',
    frontCamera: '16MP',
    details:
      'Value-for-money phone with high-resolution camera and good refresh rate',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'iPhone 12 Mini',
    brand: 'Apple',
    price: 699,
    screenDiagonal: '5.4"',
    screenResolution: '1080x2340',
    screenRefreshRate: '60Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A14 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone12mini1.webp',
      'http://localhost:3000/static/phones/apple/iphone12mini2.webp',
      'http://localhost:3000/static/phones/apple/iphone12mini3.webp',
    ],
    colors: ['Blue', 'Green', 'Red'],
    memory: ['64GB', '128GB', '256GB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'Compact and powerful iPhone with A14 chip and great performance',
    capacity: '2438mAh',
    additionally: ['5G', 'Face ID'],
    pixelDensity: '476ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy Z Fold 3',
    brand: 'Samsung',
    price: 1799,
    screenDiagonal: '7.6"',
    screenResolution: '1768x2208',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Snapdragon 888',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold41.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold42.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxyzfold43.webp',
    ],
    colors: ['Phantom Black', 'Phantom Green', 'Phantom Silver'],
    memory: ['256GB', '512GB'],
    mainCamera: '12MP',
    frontCamera: '10MP',
    details:
      'Foldable phone with a large internal screen and multitasking capabilities',
    capacity: '4400mAh',
    additionally: ['5G', 'S Pen Support', 'Wireless Charging'],
    pixelDensity: '374ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Mi 11X',
    brand: 'Xiaomi',
    price: 399,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 888',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomimi11ultra1.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra2.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra3.webp',
    ],
    colors: ['Celestial Silver', 'Horizon Blue', 'Lunar White'],
    memory: ['128GB', '256GB'],
    mainCamera: '48MP',
    frontCamera: '20MP',
    details: 'High-performance phone with a fast processor and AMOLED screen',
    capacity: '4400mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    price: 1199,
    screenDiagonal: '6.7"',
    screenResolution: '1284x2778',
    screenRefreshRate: '120Hz',
    screenType: 'Super Retina XDR',
    cpu: 'A15 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone13mini1.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini2.webp',
      'http://localhost:3000/static/phones/apple/iphone13mini3.webp',
    ],
    colors: ['Sierra Blue', 'Graphite', 'Gold', 'Silver'],
    memory: ['128GB', '256GB', '512GB', '1TB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details:
      'Flagship iPhone with top-notch performance and camera capabilities',
    capacity: '4352mAh',
    additionally: ['5G', 'Face ID', 'Ceramic Shield'],
    pixelDensity: '458ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Samsung Galaxy Note 20 Ultra',
    brand: 'Samsung',
    price: 1299,
    screenDiagonal: '6.9"',
    screenResolution: '1440x3088',
    screenRefreshRate: '120Hz',
    screenType: 'Dynamic AMOLED',
    cpu: 'Exynos 990',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxya521.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya522.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya523.webp',
    ],
    colors: ['Mystic Bronze', 'Mystic Black', 'Mystic White'],
    memory: ['128GB', '256GB', '512GB'],
    mainCamera: '108MP',
    frontCamera: '10MP',
    details: 'Premium phone with high-end specs and S Pen support',
    capacity: '4500mAh',
    additionally: ['5G', 'S Pen Support', 'Wireless Charging'],
    pixelDensity: '496ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Mi 10T Pro',
    brand: 'Xiaomi',
    price: 499,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '144Hz',
    screenType: 'LCD',
    cpu: 'Snapdragon 865',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomimi11ultra1.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra2.webp',
      'http://localhost:3000/static/phones/xiaomimi11ultra3.webp',
    ],
    colors: ['Cosmic Black', 'Lunar Silver', 'Aurora Blue'],
    memory: ['128GB', '256GB'],
    mainCamera: '108MP',
    frontCamera: '20MP',
    details:
      'High-refresh-rate phone with strong performance and large camera sensor',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone 11',
    brand: 'Apple',
    price: 699,
    screenDiagonal: '6.1"',
    screenResolution: '828x1792',
    screenRefreshRate: '60Hz',
    screenType: 'Liquid Retina HD',
    cpu: 'A13 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphone11pro1.webp',
      'http://localhost:3000/static/phones/apple/iphone11pro2.webp',
      'http://localhost:3000/static/phones/apple/iphone11pro3.webp',
    ],
    colors: ['Black', 'White', 'Red', 'Green', 'Yellow', 'Purple'],
    memory: ['64GB', '128GB', '256GB'],
    mainCamera: '12MP',
    frontCamera: '12MP',
    details: 'Affordable iPhone with good performance and camera quality',
    capacity: '3200mAh',
    additionally: ['5G', 'Face ID'],
    pixelDensity: '326ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: true,
  },
  {
    name: 'Samsung Galaxy A52',
    brand: 'Samsung',
    price: 449,
    screenDiagonal: '6.5"',
    screenResolution: '1080x2400',
    screenRefreshRate: '90Hz',
    screenType: 'Super AMOLED',
    cpu: 'Snapdragon 720G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/samsung/samsunggalaxya521.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya522.webp',
      'http://localhost:3000/static/phones/samsung/samsunggalaxya523.webp',
    ],
    colors: ['Awesome Violet', 'Awesome Blue', 'Awesome Black'],
    memory: ['128GB', '256GB'],
    mainCamera: '64MP',
    frontCamera: '32MP',
    details: 'Mid-range phone with good display quality and camera features',
    capacity: '4500mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '407ppi',
    isBestseller: false,
    isNewArrival: false,
    isFeatured: true,
    isDiscounted: false,
  },
  {
    name: 'Xiaomi Redmi 10 Pro',
    brand: 'Xiaomi',
    price: 349,
    screenDiagonal: '6.67"',
    screenResolution: '1080x2400',
    screenRefreshRate: '120Hz',
    screenType: 'AMOLED',
    cpu: 'Snapdragon 732G',
    cores: 8,
    imgPath: [
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro1.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro2.webp',
      'http://localhost:3000/static/phones/xiaomi/xiaomiredminote11pro3.webp',
    ],
    colors: ['Spectral White', 'Interstellar Gray', 'Starry Blue'],
    memory: ['64GB', '128GB'],
    mainCamera: '108MP',
    frontCamera: '16MP',
    details:
      'Good performance phone with a high-resolution camera and smooth display',
    capacity: '5000mAh',
    additionally: ['5G', 'NFC'],
    pixelDensity: '395ppi',
    isBestseller: false,
    isNewArrival: true,
    isFeatured: false,
    isDiscounted: false,
  },
  {
    name: 'iPhone SE',
    brand: 'Apple',
    price: 429,
    screenDiagonal: '4.7"',
    screenResolution: '750x1334',
    screenRefreshRate: '60Hz',
    screenType: 'Retina HD',
    cpu: 'A15 Bionic',
    cores: 6,
    imgPath: [
      'http://localhost:3000/static/phones/apple/iphonese1.jpg',
      'http://localhost:3000/static/phones/apple/iphonese2.webp',
      'http://localhost:3000/static/phones/apple/iphonese3.webp',
    ],
    colors: ['Midnight', 'Starlight', 'Product Red'],
    memory: ['64GB', '128GB', '256GB'],
    mainCamera: '12MP',
    frontCamera: '7MP',
    details: 'Compact and affordable iPhone with excellent performance',
    capacity: '2018mAh',
    additionally: ['5G'],
    pixelDensity: '326ppi',
    isBestseller: true,
    isNewArrival: false,
    isFeatured: false,
    isDiscounted: false,
  },
];

export const parsedPhoneData = phonesData.map((phone) => ({
  ...phone,
  imgPath: arrayToString(phone.imgPath),
  colors: arrayToString(phone.colors),
  memory: arrayToString(phone.memory),
  additionally: arrayToString(phone.additionally),
}));
