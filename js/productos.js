const products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        image: "https://m.media-amazon.com/images/I/71F-Wcriq4L.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        description: "acer Nitro V Laptop para juegos | Procesador Intel Core i9-13900H | GPU NVIDIA GeForce RTX 4060 para portátil | Pantalla FHD IPS de 15.6 pulgadas de 144 Hz | DDR5 de 16 GB | SSD de 512 GB Gen 4 | WiFi"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 499.99,
        image: "https://m.media-amazon.com/images/I/61cwMOVn17L.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        description: "SAMSUNG Teléfono celular Galaxy A25 5G Serie A, teléfono inteligente Android desbloqueado de 128 GB, pantalla AMOLED, sistema avanzado de triple cámara, almacenamiento ampliable, altavoces estéreo."
    },
    {
        id: 3,
        name: "Audifonos",
        price: 99.99,
        image: "https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_SX466_.jpg",
        description: "BERIBES Auriculares Bluetooth sobre la oreja, tiempo de reproducción de 65 horas y 3 modos de música ecualizador, auriculares inalámbricos con micrófono, auriculares estéreo de alta fidelidad plegables ligeros, graves profundos para el hogar, oficina, teléfono celular, PC y TV"
    },
    {
        id: 4,
        name: "Cámara",
        price: 39.99,
        image: "https://m.media-amazon.com/images/I/61-K2lXmHQL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        description: "EMEET C960 - Cámara USB de 1080p de transmisión, con 2 micrófonos, FOV de 90°, plug and play, para llavamas/conferencias en línea, Zoom/Skype/Facetime/YouTube, para laptop/PC"
    },
    {
        id: 5,
        name: "Puntos Inalámbricos de Acceso",
        price: 63.99,
        image: "https://m.media-amazon.com/images/I/512mK2OqxgL._AC_SX466_.jpg",
        description: "Paquete de 2 puentes inalámbricos de 900 Mbps, 5.8G CPE para exteriores punto a punto de acceso de largo alcance de 3 a 3.1 mi con antena de alta ganancia de 14 DBi, 2 puertos Ethernet LAN"
    },
    {
        id: 6,
        name: "smartwtach",
        price: 169.99,
        image: "https://m.media-amazon.com/images/I/711f6KLsMaL._AC_UY218_.jpg",
        description: "Samsung Galaxy Watch 6 - Reloj inteligente Bluetooth de 1.732 in, rastreador de fitness, zonas de recursos humanos personalizadas, entrenamiento avanzado del sueño, monitor cardíaco, sensor BIA,"
    },
    {
        id: 7,
        name: "Marco de Fotos",
        price: 69.99,
        image: "https://m.media-amazon.com/images/I/61O+aorCp0L._AC_UY218_.jpg",
        description: "Frameo - Marco de fotos digital WiFi de 10.1 pulgadas, 1280 x 800 HD IPS, marco de fotos electrónico, 32 GB de memoria, rotación automática, montaje en pared, comparte fotos/videos al instante "
    },
    {
        id: 8,
        name: "Meta Quest",
        price: 125.99,
        image: "https://m.media-amazon.com/images/I/71W5GcQ8-JL._SX522_.jpg",
        description: "Meta Quest 3S 128GB — Get Batman: Arkham Shadow and a 3-Month Trial of Meta Quest+ Included — All-in-One Headset"
    },
    {
        id: 9,
        name: "Cargador",
        price: 16.99,
        image: "https://m.media-amazon.com/images/I/71R6ka8Os4L._AC_UY218_.jpg",
        description: "LISEN - Cargador retráctil para automóvil, adaptador de cargador de automóvil USB C de 69 W, carga rápida para iPhone 16, 15, 14, 13, 12, Samsung, gris"
    },
    {
        id: 10,
        name: "Sceptre Monitor curvo",
        price: 129.97,
        image: "https://m.media-amazon.com/images/I/71P1MZ8ztDL._AC_UL320_.jpg",
        description: "Sceptre Monitor curvo para juegos de 24.5 pulgadas hasta 240Hz 1080p R1500 1ms DisplayPort x2 HDMI x2 altavoces integrados con cambio de luz azul, negro máquina 2023 (C255B-FWT240)"
    },
    {
        id: 11,
        name: "Xbox Core Wireless Gaming Controller",
        price: 129.97,
        image: "https://m.media-amazon.com/images/I/61B4klaWctL._SX522_.jpg",
        description: "Xbox Core Wireless Gaming Controller – Astral Purple Series X|S, One, Windows PC, Android, and iOS"
    },
    {
        id: 12,
        name: "Razer Basilisk V3 - Mouse ergonómico",
        price: 129.97,
        image: "https://m.media-amazon.com/images/I/61AcT0ZuO3L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        description: "Razer Basilisk V3 - Mouse ergonómico personalizable para juegos: el interruptor de mouse para juegos más rápido - Iluminación Chroma RGB - Sensor óptico de 26K DPI - 11 botones programables - Rueda de"
    },
    {
        id: 13,
        name: "ROG STRIX B550-F",
        price: 149.99,
        image: "https://m.media-amazon.com/images/I/81S9D7bqEzL._AC_SX466_.jpg",
        description: "ROG STRIX B550-F GAMING WIFI II - Tarjeta madre para AMD AM4 (3ra Gen Ryzen) y ATX, PCIe 4.0,WiFi 6E, LAN 2.5Gb, BIOS Flashback, HDMI 2.1, iluminación Aura Sync RGB direccionable de 2nda generación"
    },
    {
        id: 14,
        name: "XVX Womier S-K80 - Teclado",
        price: 55.99,
        image: "https://m.media-amazon.com/images/I/71duf0rTDqL._AC_SX466_.jpg",
        description: "XVX Womier S-K80 - Teclado 75% con pantalla multimedia a color, teclado mecánico para juegos, montaje en junta intercambiable en caliente con cable, teclado personalizado RGB, estabilizador"
    },
    {
        id: 15,
        name: "XVX Womier S-K80 - Teclado",
        price: 15.99,
        image: "https://m.media-amazon.com/images/I/71HnS4gBdhL._AC_SX466_.jpg",
        description: "Alfombrilla de mouse grande japonesa de ola marina, juegos negros anime, alfombrilla de escritorio extendida Kanagawa, 0.118 in de grosor, base de goma antideslizante, 31.5 x 11.8 pulgadas"
    },
    {
        id: 16,
        name: "MillSO Micrófono USB para PC",
        price: 15.99,
        image: "https://m.media-amazon.com/images/I/51Kqme0tInL._AC_SY879_.jpg",
        description: "MillSO Micrófono USB para PC, Plug & Play, micrófono de solapa USB omnidireccional externo con clip mini USB para computadora, laptop, YouTube, grabación, podcasting, juegos, 2M/6.5 pies"
    },
    // Add more products as needed
];