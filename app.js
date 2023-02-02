const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const products = [
  {
    id: 1,
    title: "Apple W1 Headphone",
    category: "Beats",
    price: 254.0,
    description:
      "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)",
    images: [
      "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/61zCi3GMH4L._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/81LV3RWv43L._AC_SX522_.jpg",
    ],
  },

  {
    id: 2,
    title: "Oppo W1 Wireless Headphones",
    category: "WATAHATIC",
    price: 16.0,
    description:
      "Wireless Headphones,Bluetooth 5.2 Wireless Headphones with Charging Case,IPX8 Waterproof Stereo Headphones,Built-in Microphone,Bluetooth Headphones for iPhone/Samsung/Android/iOS,Wireless Earbuds",
    images: [
      "https://m.media-amazon.com/images/I/51q5UtWt5YL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61BJ02o8+hL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71QhbewO9kL._AC_SX466_.jpg",
    ],
  },

  {
    id: 3,
    title: "RORSOU R10 Headphones",
    category: "RORSOU",
    price: 18.0,
    description:
      "RORSOU R10 On-Ear Headphones with Microphone, Lightweight Folding Stereo Bass Headphones with 1.5M No-Tangle Cord, Portable Wired Headphones for Smartphone Tablet Computer MP3 / 4 (Black)",
    images: [
      "https://m.media-amazon.com/images/I/61z-rTknwVS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61nQc7FTG2S._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/71mqpST5+7S._AC_SY355_.jpg",
    ],
  },

  {
    id: 4,
    title: "CAPOXO Wireless Earbuds",
    category: "CAPOXO",
    price: 29.8,
    description:
      "CAPOXO Wireless Earbuds Bluetooth 5.3 Headphones 120Hrs Playtime IPX7 Waterproof Sports Earphones Over-Ear Earhooks Headset with 2600mAh Power Display Wireless Charging Case Mics for Workout Black",
    images: [
      "https://m.media-amazon.com/images/I/61nBiY39BdL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/713Gp5LXMFL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/71+hNz+QdAL._AC_SY355_.jpg",
    ],
  },

  {
    id: 5,
    title: "Boean Bluetooth Headphones",
    category: "Boean",
    price: 19.0,
    description:
      "Boean Bluetooth Headphones, Running Wireless Earbuds with 15 Hours Playtime, HD Deep Bass Stereo IPX7 Waterproof Earphones for Workout and Sports, Bluetooth 5.3 CVC 8.0 Sound Isolation Headsets",
    images: [
      "https://m.media-amazon.com/images/I/618sOXqdTXL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61DN1uQv7uL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/71L9MRCBphL._AC_SY355_.jpg",
    ],
  },
];

app.get("/products", (req, res) => {
  res.send(JSON.stringify(products));
});

app.get("/products/:id", (req, res) => {
  const {id} = req.params
  if (id) {
    const foundedProduct = products.find((product) => product.id == id);
    res.send(JSON.stringify(foundedProduct));
  } else {
    res.send(`Can not find product with id of: ${id}`)
  }
  
});

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
