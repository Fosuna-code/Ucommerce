import { createContext, useState } from 'react'

export  const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  //Shopping cart * Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail * Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = ()=> setIsProductDetailOpen(false);

  // Product Detail * Product to show 
  const [productToShow, setProductToShow] = useState({
    "id": "undefined",
    "title": "undefined",
    "price": 0,
    "description": "undefined",
    "category": {
      "id": "undefined",
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "undefined",
    ]
  });
  // Product Detail carrousel * Hadling image index 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //if direction is 1 the index increase if direction is 0 it decreases 
  const newImageIndex = (direction)=> {  
    const lastIndex =  productToShow.images.length - 1;
    if(direction == 1){
        setCurrentImageIndex((prevIndex) => prevIndex < lastIndex ? prevIndex + 1 : 0)
    }               
    if (direction == 0){
      setCurrentImageIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : lastIndex)
    }
}

    
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      currentImageIndex,
      setCurrentImageIndex,
      newImageIndex
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}