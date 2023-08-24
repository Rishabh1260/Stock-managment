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
<div className="container w-11/12 mx-auto bg-gray-200 mt-7 shadow-md rounded-md p-8">


  <Header />
  <AddProduct />

  
        <div className='form-container w-11/12 p-5 shadow-lg  mx-auto mt-5 rounded-md  bg-gray-200'>
          <h1 className="text-2xl font-bold mb-2">Current Stock</h1>
          
            <table className="w-full">
              <thead>
                <tr className="bg-gray-300">
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Category</th>
                </tr>
              </thead>
              <tbody>
                {products.map(items => {
                  return <tr key={items._id} >
                  <td className="py-2 px-4">{items.slug}</td>
                  <td className="py-2 px-4">{items.quantity}</td>
                  <td className="py-2 px-4">{items.price}</td>
                  <td className="py-2 px-4">{items.category}</td>
                </tr>
                })}
              </tbody>
            </table>
          
        </div>
      </div>
    </>
  );
}