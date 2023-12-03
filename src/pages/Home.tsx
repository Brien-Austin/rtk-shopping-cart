import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Product } from "../types/types";
import axios from "axios";
import ProductData from "../components/ProductData";
import { useSelector } from "react-redux";
import { selectCategory } from "../store/features/category/categorySlice";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const selectedCategory: string | null= useSelector(selectCategory);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = response.data;
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

       const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <>
            <NavBar />
            <div className="container mx-auto gap-5 pt-24 flex flex-wrap justify-center">
               
                {filteredProducts.map((data) => (
                    <ProductData
                        key={data.id} // Add a unique key for each product
                        id={data.id}
                        title={data.title}
                        price={data.price}
                        description={data.description}
                        category={data.category}
                        image={data.image}
                        rating={data.rating} // Correct the typo here
                    />
                ))}
            </div>
        </>
    );
}
