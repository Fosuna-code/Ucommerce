import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import DotSvg from '../../Components/DotSvg';
function ProductDetail() {
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow: ProductDetails,
        currentImageIndex,
        newImageIndex

    } = useContext(ShoppingCartContext);
    console.log(ProductDetails)


    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] top-[68px] min-h-[calc(100vh-80px)]  flex-col border border-black fixed right-0 bg-white rounded-lg overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2>Detail</h2>
                <div
                    className='cursor-pointer hover:text-red-500 hover:font-bold'
                    onClick={() => closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <figure className='px-6 relative'>
                <img
                    className='w-[90%] h-full rounded-lg flex justify-center'
                    src={ProductDetails.images[currentImageIndex]}
                    alt={ProductDetails?.title || ''} />
                <div 
                    className='absolute cursor-pointer top-[40%] right-[13%] colort text-white/90'
                    onClick={() => newImageIndex(1)}>
                        {/* rigth arrow  */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='absolute cursor-pointer top-[40%] left-[5%] colort text-white/90'
                    onClick={() => newImageIndex(0)}>
                        {/* left arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div className='flex mt-1'>
                    {ProductDetails.images.map((_,index) =>{
                        //filled with black if it represent the current image
                        if (currentImageIndex == index){
                            return <DotSvg key={index} fill={"#000000"} width={"24"}/>
                        }else{
                            //non filled
                            return <DotSvg key={index} fill={"none"} width={"24"}/>
                        } 
                    })}
                                        
                </div>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{`$${ProductDetails.price}`}</span>
                <span className='font-medum text-md '>{ProductDetails.title}</span>
                <span className='font-ligth text-sm '>{ProductDetails.description }</span>
            </p>
        </aside>
    );
}

export default ProductDetail;