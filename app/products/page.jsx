// app/products/page.jsx
"use client"
import { useRouter } from 'next/navigation';

export default function Products() {
    const router = useRouter();
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

    function navigateTo() {
        router.push('/'); 
    }

    const handleProductClick = (product) => {
        router.push(`/products/${product.id}`);
        console.log("hi")
    };

    return (
        <div>
            <h1>Products</h1>
            <button onClick={navigateTo}>Go Home</button>
            {
            products.map((item)=>
            <div key={item.title} onClick={() => handleProductClick(item)}>
                <img className="product_container_img" src={item.img} />
                <div className="product_container_title">{item.title}</div>
                <div className="product_container_rate">Rate: {item.rate}</div>
            </div>
            )
        }
        </div>
    );
}