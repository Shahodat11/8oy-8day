import React from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home = () => {
    const {data} = useGetProductsQuery({limit:50})
    console.log(data);
  return (
    <div>
        <div>
            {
                data?.data?.products?.map((product)=>(
                    <div className="card" key={product.id}>
                        <img src={product.urls[0]} width={200} alt="" />
                        <h3>{product.title}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home
