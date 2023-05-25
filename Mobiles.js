const Mobiles = [
    {ctg:"smartphone", id:1, img:'https://m.media-amazon.com/images/I/71qjUzUt+ML._SL1500_.jpg', name:'OnePlus 11R 5G', description:'Sonic Black, 8GB RAM, 128GB Storage', rating:4.5, price:39999, ctgrating:'4.0-4.5', brand:'oneplus', qty:1},
    {ctg:"smartphone", id:2, img:'https://m.media-amazon.com/images/I/716uVx3Wr5L._SX569_.jpg', name:'OnePlus 10R 5G', description:'Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC', rating:4.3, price:31999, ctgrating:'4.0-4.5', brand:'oneplus', qty:1},

    {ctg:"smartphone", id:3, img:'https://m.media-amazon.com/images/I/81-fFXQdPTL._SX569_.jpg', name:'Samsung Galaxy M13', description:'Aqua Green, 4GB, 64GB Storage | 6000mAh Battery | Upto 8GB RAM with RAM Plus', rating:4.1, ctgrating:'4.0-4.5', price:9699, brand:'samsung', qty:1},
    {ctg:"smartphone", id: 4, img:'https://m.media-amazon.com/images/I/81t6Av5DvXL._SX569_.jpg', name:'Samsung Galaxy M04', description:'Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery', rating:3.9, ctgrating:'3.0-3.9', price:7499, brand:'samsung', qty:1},
    {ctg:"smartphone", id:5, img:'https://m.media-amazon.com/images/I/81I3w4J6yjL._SX522_.jpg', name:'Samsung Galaxy M33 5G', description:'Mystique Green, 6GB, 128GB Storage | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately', rating:4.1, ctgrating:'4.0-4.5', price:17999, brand:'samsung', qty:1},
    {ctg:"smartphone", id:6, img:'https://m.media-amazon.com/images/I/817wzcDRQAL._SX569_.jpg',name:'Samsung Galaxy S21 FE 5G', description:'Olive, 8GB, 128GB Storage', rating:4.1, ctgrating:'4.0-4.5', price:35200, brand:'samsung', qty:1},

    {ctg:"smartphone", id:7, img:'https://m.media-amazon.com/images/I/81eM15lVcJL._SX569_.jpg', name:'Redmi 10 Power', description:'Power Black, 8GB RAM, 128GB Storage', rating:4.1, ctgrating:'4.0-4.5', price:10999, brand:'Xiaomi', qty:1},
    {ctg:"smartphone", id:8, img:'https://m.media-amazon.com/images/I/71t7mcs1VoL._SX569_.jpg', name:'Redmi 10A Sport', description:'Slate Grey, 6GB RAM, 128GB Storage | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster', rating:3.7, ctgrating:'3.0-3.9', price:10499, brand:'Xiaomi', qty:1},
    {ctg:"smartphone", id:9, img:'https://m.media-amazon.com/images/I/71q297sVv3L._SX569_.jpg', name:'Redmi 10 Prime', description:'Astral White 4GB RAM 64GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)', rating:4.1, ctgrating:'4.0-4.5', price:12999, brand:'Xiaomi', qty:1},
    {ctg:"smartphone", id:10, img:'https://m.media-amazon.com/images/I/71XmlboxNZL._SX569_.jpg', name:'Xiaomi 11 Lite NE 5G', description:'Jazz Blue 8GB RAM 128 GB Storage | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision | SD 778 with 12 5G Bands', rating:4, ctgrating:'4.0-4.5', price:25999, brand:'Xiaomi', qty:1},
    {ctg:"smartphone", id:11, img:'https://m.media-amazon.com/images/I/61RvCwjI7dL._SX569_.jpg', name:'Xiaomi 13 Pro', description:'Ceramic Black, 12GB RAM 256GB Storage | Leica Professional 50MP Triple Camera | Biggest Camera Sensor 1" IMX989 | SD 8 Gen 2', rating:4.5, ctgrating:'above 4.5', price:79999, brand:'Xiaomi', qty:1},

    {ctg:"smartphone", id:12, img:'https://m.media-amazon.com/images/I/51a+haCOeJL._SY300_SX300_.jpg', name:'realme narzo 50 5G', description:'Hyper Blue, 4GB RAM+128GB Storage Dimensity 810 5G Processor | 48MP Ultra HD Camera', rating:4.2, ctgrating:'4.0-4.5', price:15999, brand:'realme', qty:1},
    {ctg:"smartphone", id:13, img:'https://m.media-amazon.com/images/I/81IPrkMDqVL._SX569_.jpg', name:'realme narzo 50A Prime', description:'Flash Black, 4GB RAM+128GB Storage FHD+ Display | 50MP AI Triple Camera (No Charger Variant)', rating:4, ctgrating:'4.0-4.5', price:10249, brand:'realme', qty:1},
    {ctg:"smartphone", id:14, img:'https://m.media-amazon.com/images/I/81HJ4pkOsiL._SX569_.jpg', name:'realme narzo 50i', description:'Carbon Black, 2GB RAM+32GB Storage Octa Core Processor | 6.5" inch Large Display', rating:4, ctgrating:'4.0-4.5', price:7499, brand:'realme', qty:1},
    {ctg:"smartphone", id:15, img:'https://m.media-amazon.com/images/I/8129V02wQuL._SX569_.jpg', name:'realme Narzo 50 Pro 5G', description:'Hyper Black 6GB RAM+128GB Storage Super AMOLED | Advanced Dimensity 920 5G Gaming Processor | 50% Charge in 31 min', rating:4.2, ctgrating:'4.0-4.5', price:16999, brand:'realme', qty:1},

    {ctg:'accessories', id:16, img:'https://m.media-amazon.com/images/I/51UJe6EbuOL._AC._SR360,460.jpg', name:'pTron Volta Charger', desc:'FC17 25W Type-C to Type-C PD Superfast Charger', price:599, rating:4.2, ctgrating:'4.0-4.5', amount:1},
    {ctg:'accessories', id:17, img:'https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg', name:'OnePlus Earphones', desc:'Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic', rating:4.2, ctgrating:'4.0-4.5', price:1799, amount:1},
    {ctg:'accessories', id:18, img:'https://m.media-amazon.com/images/I/71ojkmsYe8L._SX679_.jpg', name:'Wayona Nylon Braided USB Cable', desc:'to Lightning Fast Charging and Data Sync Cable Compatible', rating:4.1, ctgrating:'4.0-4.5', price:379, amount:1},
    {ctg:'accessories', id:19, img:'https://m.media-amazon.com/images/I/81dEqF9gHiL._SX679_.jpg', name:'Sandstone Artemis Series Back Cover', desc:'Back Cover for Samsung Galaxy S23 Case with Stand & Slide Camera Cover Military Grade Drop Protection Case for Samsung Galaxy S23 (Black)', rating:4.0, ctgrating:'4.0-4.5', price:999, amount:1},
    {ctg:'accessories', id:20, img:'https://m.media-amazon.com/images/I/71aMYvWX5UL._SX522_.jpg', name:'Boult Earbuds', desc:'Audio Z25 True Wireless in Ear Earbuds with 32H Playtime, 45ms Low Latency, Type-C Fast Charging', rating:3.8, ctgrating:'3.0-3.9', price:1299, amount:1}



]




export default Mobiles