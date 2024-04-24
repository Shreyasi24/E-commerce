import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({products}) => {
    console.log(products,"products")
  return (
    <>
    <div className="flex flex-col text-center w-full">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
    </div>
     <section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap -m-4">
        {
            products?.length>0 ? (products.map((ele,i)=>{
                return(
                    
                    <div className="lg:w-1/4 md:w-1/2 p-4 mb-4 w-full shadow-sm border border-opacity-50 cursor-pointer" key={i}>
                        <Link to={`/products/${ele.id}`}>
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt={ele?.title} className="object-contain object-center w-full h-full block" src={ele?.image}/>
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ele?.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{ele?.title}</h2>
                      <p className="mt-1">${ele?.price}</p>
                    </div>
                    </Link>
                  </div>
                )
            })): <h2 classNameName='text-2xl'>Product Loading...</h2>
        }
      </div>
    </div>
  </section>
  </>
  )
}

export default Product