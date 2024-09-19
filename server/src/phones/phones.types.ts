export type PriceType =
  | 1499
  | 1399
  | 1600
  | 500
  | 550
  | 799
  | 899
  | 990
  | 1199
  | 1099
  | 1000
  | 449
  | 700
  | 800
  | 349
  | 999
  | 699
  | 1799
  | 1299
  | 399
  | 429
  | 499
  | 299;

export type BrandType = 'Xiaomi' | 'Apple' | 'Samsung';

export type NameType =
  | 'iPhone 14 Pro'
  | 'iPhone 13 Mini'
  | 'iPhone 12 Mini'
  | 'iPhone 12 Pro'
  | 'iPhone 11'
  | 'iPhone 11 Pro Max'
  | 'iPhone SE'
  | 'iPhone 13 Pro Max'
  | 'Samsung Galaxy S23 Ultra'
  | 'Samsung Galaxy A52'
  | 'Samsung Galaxy S21 Ultra'
  | 'Samsung Galaxy A72'
  | 'Samsung Galaxy Note 20 Ultra'
  | 'Samsung Galaxy Z Fold 4'
  | 'Samsung Galaxy Z Fold 3'
  | 'Samsung Galaxy Z Flip 4'
  | 'Xiaomi Redmi Note 11 Pro'
  | 'Xiaomi Poco X4 Pro'
  | 'Xiaomi Poco F3'
  | 'Xiaomi Mi 10T Pro'
  | 'Xiaomi Redmi 10 Pro'
  | 'Xiaomi Mi 11X'
  | 'Xiaomi Mi 11 Lite'
  | 'Xiaomi Redmi Note 10 Pro'
  | 'Xiaomi Mi 11 Ultra';

export type ScreenDiagonalType =
  | '6.1"'
  | '6.3"'
  | '6.2"'
  | '6.5"'
  | '6.7"'
  | '6.67"'
  | '4.7"'
  | '5.4"'
  | '6.9"'
  | '6.4"'
  | '6.6"'
  | '5.5"'
  | '7.2"'
  | '7.6"'
  | '6.8"';

export type ScreenResolutionType =
  | '1080x2400'
  | '1440x3200'
  | '1080x2340'
  | '1440x3120'
  | '1080x2280'
  | '720x1600'
  | '1284x2778'
  | '1440x3088'
  | '1812x2176'
  | '1768x2208'
  | '828x1792'
  | '1242x2688'
  | '750x1334'
  | '2778x1284';

export type ScreenType =
  | 'AMOLED'
  | 'LCD'
  | 'IPS LCD'
  | 'OLED'
  | 'Super AMOLED'
  | 'Dynamic AMOLED'
  | 'Super Retina XDR'
  | 'Liquid Retina HD'
  | 'Retina'
  | 'Liquid Retina'
  | 'Retina HD'
  | 'Infinity-O'
  | 'Infinity-V'
  | 'Infinity-U'
  | 'Super AMOLED Plus';

export type CPUType =
  | 'A16 Bionic'
  | 'A17 Pro'
  | 'A15 Bionic'
  | 'A14 Bionic'
  | 'A13 Bionic'
  | 'A12 Bionic'
  | 'A11 Bionic'
  | 'Snapdragon 8 Gen 2'
  | 'Snapdragon 8 Gen 1'
  | 'Snapdragon 888'
  | 'Snapdragon 870'
  | 'MediaTek Dimensity 1200'
  | 'Snapdragon 765G'
  | 'Exynos 2400'
  | 'Exynos 2200'
  | 'MediaTek Dimensity 920'
  | 'Snapdragon 720G'
  | 'Snapdragon 865'
  | 'Exynos 2100'
  | 'Snapdragon 695'
  | 'Snapdragon 732G'
  | 'Exynos 990'
  | 'Snapdragon 865+';

export type CoreType = 10 | 8 | 6 | 4;

export type ColorsType = (
  | 'White'
  | 'Black'
  | 'Gray'
  | 'Silver'
  | 'Red'
  | 'Yellow'
  | 'Green'
  | 'Purple'
  | 'Gold'
  | 'Blue'
  | 'Phantom Violet'
  | 'Space Black'
  | 'Deep Purple'
  | 'Cream'
  | 'Phantom Black'
  | 'Starlight'
  | 'Midnight'
  | 'Pink'
  | 'Graygreen'
  | 'Burgundy'
  | 'Graphite Gray'
  | 'Polar White'
  | 'Lunar Light'
  | 'Awesome Violet'
  | 'Awesome Black'
  | 'Awesome White'
  | 'Awesome Blue'
  | 'Laser Black'
  | 'Laser Blue'
  | 'Golden Yellow'
  | 'Mystic Bronze'
  | 'Mystic Black'
  | 'Mystic White'
  | 'Sierra Blue'
  | 'Graphite'
  | 'Cosmic Black'
  | 'Onyx Gray'
  | 'Glacier Blue'
  | 'Amber Bronze'
  | 'Lunar Silver'
  | 'Aurora Blue'
  | 'Celestial Silver'
  | 'Horizon Blue'
  | 'Lunar White'
  | 'Phantom Green'
  | 'Midnight Green'
  | 'Arctic White'
  | 'Night Black'
  | 'Deep Ocean Blue'
  | 'Truffle Black'
  | 'Product Red'
  | 'Spectral White'
  | 'Interstellar Gray'
  | 'Starry Blue'
  | 'Bubblegum Blue'
  | 'Peach Pink'
  | 'Space Gray'
  | 'Phantom Silver'
)[];

export type MemoryType = (
  | '16GB'
  | '32GB'
  | '64GB'
  | '128GB'
  | '256GB'
  | '512GB'
  | '1TB'
)[];

export type MainCameraType =
  | '12MP'
  | '16MP'
  | '20MP'
  | '24MP'
  | '30MP'
  | '32MP'
  | '40MP'
  | '48MP'
  | '64MP'
  | '108MP'
  | '200MP'
  | '50MP';

export type ScreenRefreshType = '120Hz' | '90Hz' | '144Hz' | '60Hz';

export type FrontCameraType =
  | '48MP'
  | '20MP'
  | '8MP'
  | '10MP'
  | '12MP'
  | '16MP'
  | '32MP'
  | '40MP'
  | '7MP';

export type CapacityType =
  | '5000mAh'
  | '4000mAh'
  | '4500mAh'
  | '3500mAh'
  | '6000mAh'
  | '3200mAh'
  | '2438mAh'
  | '4400mAh'
  | '4352mAh'
  | '2018mAh';

export type AdditionallyType = (
  | 'Fast Charging'
  | 'NFC'
  | 'Waterproof'
  | 'Wireless Charging'
  | 'Face ID'
  | '5G'
  | 'Dual SIM'
  | 'IP68'
  | 'S Pen'
  | 'IPX8'
  | 'Touch ID'
  | 'S Pen Support'
  | 'Ceramic Shield'
)[];

export type PixelDensityType =
  | '450ppi'
  | '500ppi'
  | '600ppi'
  | '400ppi'
  | '650ppi'
  | '300ppi'
  | '460ppi'
  | '700ppi'
  | '515ppi'
  | '476ppi'
  | '458ppi'
  | '374ppi'
  | '395ppi'
  | '326ppi'
  | '407ppi'
  | '496ppi';
