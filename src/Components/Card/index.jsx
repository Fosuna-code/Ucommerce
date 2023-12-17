import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
function Card({data}) {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productToShow)=>{
      context.openProductDetail();
      context.setProductToShow(productToShow);
      context.setCurrentImageIndex(0);
    }

    return (
        <div 
        className='w-56 h-60 bg-white cursor-pointer rounded-lg'
        onClick={() => showProduct(data)}>
        <figure className='h-4/5 relative mb-2'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
          <img src={data.images[0]} alt={data.title} 
          className='rounded-lg w-full h-full object-cover'/>
          <div className='bg-white w-6 h-6 absolute top-0 right-0 rounded-full flex font-semibold justify-center items-center m-2 p-1'
          onClick={(e) => {
            e.stopPropagation();
            context.setCount(++context.count)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </figure>
        <p className='flex justify-between'>
          <span className='text-sm font-ligth text'>{data.title}</span>
          <span className='text-lg font-medium'>${data.price}</span>
        </p>
      </div>
    );
}

export default Card;