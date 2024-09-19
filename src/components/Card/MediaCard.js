import * as React from "react";
import Item from "./Item";

// const products = [
//    {
//       id: 1,
//       name: "Wireless Headphones",
//       price: 59.99,
//       category: "Electronics",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Wireless+Headphones"
//    },
//    {
//       id: 2,
//       name: "Bluetooth Speaker",
//       price: 39.99,
//       category: "Electronics",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Bluetooth+Speaker"
//    },
//    {
//       id: 3,
//       name: "Smartphone Stand",
//       price: 15.99,
//       category: "Accessories",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Smartphone+Stand"
//    },
//    {
//       id: 4,
//       name: "Laptop Backpack",
//       price: 49.99,
//       category: "Bags",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Laptop+Backpack"
//    },
//    {
//       id: 5,
//       name: "LED Desk Lamp",
//       price: 25.99,
//       category: "Home",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=LED+Desk+Lamp"
//    },
//    {
//       id: 6,
//       name: "Gaming Mouse",
//       price: 29.99,
//       category: "Gaming",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Gaming+Mouse"
//    },
//    {
//       id: 7,
//       name: "Mechanical Keyboard",
//       price: 89.99,
//       category: "Gaming",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=Mechanical+Keyboard"
//    },
//    {
//       id: 8,
//       name: "4K Monitor",
//       price: 299.99,
//       category: "Electronics",
//       imageUrl: "https://dummyimage.com/600x400/000/fff&text=4K+Monitor"
//    }
// ];

export default function MediaCard() {
  const localProducts = JSON.parse(localStorage.getItem("products")) || [];

  return localProducts.map((product) => (
    <Item product={product} key={product.id} />
  ));
}
