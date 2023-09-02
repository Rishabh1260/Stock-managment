"use client"

import Header from '/components/Header';
import AddProduct from '/components/addProduct';
import { useState, useEffect } from "react";



export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/product')
  let rjson = await response.json()
  setProducts(rjson.products)
  }
fetchProducts()
}, []);



 
return (
  
  <>
<div className="container w-full mx-auto bg-gray-200 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-zinc-900 shadow-md rounded-md p-8">


  <Header />
  <AddProduct />

        <div className='form-container w-11/12 p-5 shadow-xl  mx-auto mt-5 rounded-md  bg-gray-200 dark:bg-gradient-to-br dark:from-stone-900 dark:to-neutral-900  dark:shadow-inner'>
          <h1 className="text-2xl font-bold mb-2 dark:text-neutral-500">Current Stock</h1>
          
            <table className="w-full">
              <thead>
                <tr className="bg-transparent">
                  <th className="py-2 px-4 dark:text-neutral-500">Product Name</th>
                  <th className="py-2 px-4 dark:text-neutral-500">Quantity</th>
                  <th className="py-2 px-4 dark:text-neutral-500">Price</th>
                  <th className="py-2 px-4 dark:text-neutral-500">Category</th>
                </tr>
              </thead>
              <tbody>
                {products.map(items => {
                  return <tr key={items._id} >
                  <td className="py-2 px-4 dark:text-neutral-500">{items.slug}</td>
                  <td className="py-2 px-4 dark:text-neutral-500">{items.quantity}</td>
                  <td className="py-2 px-4 dark:text-neutral-500">{items.price}</td>
                  <td className="py-2 px-4 dark:text-neutral-500">{items.category}</td>
                </tr>
                })}
              </tbody>
            </table>
          
        </div>
      </div>
    </>
  );
}