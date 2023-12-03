import React from 'react';

import { useDispatch } from 'react-redux';
import { addProduct  } from '../store/features/cart/cartSlice';


interface Rating {
  rate: number;
  count: number;
}

interface ProductDataProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}






const ProductData: React.FC<ProductDataProps> = ({
  id, title, price, description, image, 
}) => {

  const dispatch = useDispatch();

  const addCart = (id: number) => {
    dispatch(addProduct(id));
   
    
  }





  return (
    <div className='border-2  rounded-md h-96 w-80 p-4 flex flex-col justify-between'>
      <img src={image} alt={title} className='w-36 mx-auto h-36 object-fit mb-3 rounded-md' />
      <div className='text-slate-800 px-3'>
        <p className='font-bold text-lg mb-1'>${price}</p>
        <p className='font-semibold text-md mb-2'>{title}</p>
        <p className='text-sm text-slate-600 truncate mb-3'>{description}</p>
      </div>
      <div className='flex justify-center'>
        <button onClick={()=>{addCart(id)} } className='transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-101 hover:bg-slate-900 duration-300  text-white rounded-md w-full px-6 py-2'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductData;
