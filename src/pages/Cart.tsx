import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types/types';
import { useSelector } from 'react-redux';
import { cartProducts } from '../store/features/cart/cartSlice';

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
    // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching products:', error);
   // Set loading to false on error
    }
    };
    
    const cartProductId = useSelector(cartProducts)
     const filteredProducts = products.filter((product) =>
    cartProductId.includes(product.id)
    );
    const totalCost = filteredProducts.reduce((accumulator, product) => {
  return accumulator + product.price; // Assuming each product has a 'price' property
    }, 0);
    
    console.log(totalCost)

  useEffect(() => {
    fetchProducts();
  }, []);
  
    

  return (
      <>
          <div className='fixed p-5 z-50 w-full bg-slate-900 '>
           <Link to={"/"}>   <h1 className='text-white text-2xl font-bold '>
        Shopcart
      </h1></Link>
          </div>
          <div className='fixed bottom-0 h-20 bg-slate-900 left-0 w-full'>
               <h1 className='text-white right-8 fixed bottom-7'>Total Cost : ${totalCost}</h1>
             
          </div>
      
      <div className='pt-20 gap-10 flex-wrap flex-col px-10 flex justify-center mb-24'>
        {filteredProducts.map((data, index) => (
          <div key={index} className='border-2 rounded shadow-sm '>
                <div className='flex '>
                    <img className='w-32 h-32 p-2 object-fit' src={data.image}/>
                     <div className='p-2 '>
                    <h1 className='text-slate-800 font-semibold'>{data.title}</h1>
                    <h1 className='mt-3 text-sm  text-gray-700'>{data.description}</h1>
                </div>
                    <button className='w-full'>
                       

                    </button>
               </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
