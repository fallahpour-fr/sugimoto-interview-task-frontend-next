'use client'
import Link from "next/link";
import { use } from 'react';
import OptionsSelector from "../../components/OptionsSelectors";
import Reviews from "../../components/Reviews";

export default function ProductDetails({params}) {
    const id = Number(use(params).id);
    let products=[
        {
            id:1,
            img:"/images/1.webp",
            title:"Porsche",
            rate:4,
            sizes: ["Small", "Medium", "Large", "Extra Large"],
            colors: ["red", "blue", "green", "black"]
        },
        {
            id:2,
            img:"/images/2.webp",
            title:"Lamborghini",
            rate:5,
            sizes: ["Small", "Medium", "Large", "Extra Large"],
            colors: ["red", "blue", "green", "black"]
        },
        {
            id:3,
            img:"/images/3.webp",
            title:"Maserati",
            rate:3,
            sizes: ["Small", "Medium", "Large", "Extra Large"],
            colors: ["red", "blue", "green", "black"]
        },
        {
            id:4,
            img:"/images/4.webp",
            title:"Hyundai",
            rate:5,
            sizes: ["Small", "Medium", "Large", "Extra Large"],
            colors: ["red", "blue", "green", "black"]
        },
    ]
   
    return (
        <div className="product_container">
               <div>
                <div>Product Details {id.id}</div>
                <Link href="/products" >Go To Products</Link>
            </div>
            <div className="product_item product_item_img">
            <img src={products[id].img} alt={products[id].title} />
            </div>
         
            <div className="product_item">
                <div className="product_item product_info">
                    <p className="product_item product_item_title">{products[id].title}</p>
                    <p className="product_item product_item_description">{products[id].description || "No description available."}</p>
                    <p className="product_item product_item_rate">Rating: {products[id].rate} ★</p>
                </div>
          <OptionsSelector sizes={products[id].sizes} colors={products[id].colors}/>
           </div>
        <Reviews />
      </div>
    );

  }