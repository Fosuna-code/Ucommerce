import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout'
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
function Home() {
  // items state
  const [items, setItems] = useState([]);
  // API call
  useEffect(() =>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => response.json())
    .then((data) => setItems(data));  
  },[]);
  // Component
  return ( 
    <Layout>
      Home 
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          items?.map((data) => (
            <Card key={data.id} data={data}/>
          ))
        }  
      </div>     
      <ProductDetail/>
    </Layout>
  )
}

export default Home;
