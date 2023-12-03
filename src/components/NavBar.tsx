import { ShoppingBag } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategory } from '../store/features/category/categorySlice';
import { cartProducts } from '../store/features/cart/cartSlice';

const NavBar: React.FC = () => {

    const [isClicked, setIsClicked] = useState<string | null>(null);
    const clickedClass = "bg-slate-800";
    const dispatch = useDispatch();
    
    const cart = useSelector(cartProducts)

    const handleProductClick = (category: string) => {
        setIsClicked(category);
        dispatch(setCategory(category))
    };



    

    return (
        <div className='w-full bg-gray-900 h-20 mt-0 flex justify-between fixed top-0 items-center z-50'>
            <Link to={"/"}><h1 className='font-semibold text-white px-10 text-2xl'>ShopCart</h1></Link>
            <div className='flex items-center mx-10'>
                <h1
                    className={`transition ease-in-out delay-150 font-md text-white mx-10 text-md cursor-pointer ${isClicked === "men's clothing" ? clickedClass : ""} hover:bg-slate-800 px-2 py-1 rounded`}
                    onClick={() => handleProductClick("men's clothing")}
                >
                    Men's Clothing
                </h1>
                <h1
                    className={`transition ease-in-out delay-150 font-md text-white mx-10 text-md cursor-pointer ${isClicked === "women's clothing" ? clickedClass : ""} hover:bg-slate-800 px-2 py-1 rounded`}
                    onClick={() => handleProductClick("women's clothing")}
                >
                    Women's Clothing
                </h1>
                <h1
                    className={`transition ease-in-out delay-150 font-md text-white mx-10 text-md cursor-pointer ${isClicked === "electronics" ? clickedClass : ""} hover:bg-slate-800 px-2 py-1 rounded`}
                    onClick={() => handleProductClick("electronics")}
                >
                    Electronics
                </h1>
                <h1
                    className={`transition ease-in-out delay-150 font-md text-white mx-10 text-md cursor-pointer ${isClicked === "jewelery" ? clickedClass : ""} hover:bg-slate-800 px-2 py-1 rounded`}
                    onClick={() => handleProductClick("jewelery")}
                >
                    Jewelry
                </h1>
                <Link
                    to={"/cart"}
                    className='font-md flex gap-2 text-white mx-10 text-md bg-slate-800 px-3 py-2 rounded-full'
                >
                    <ShoppingBag /> {cart.length}
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
