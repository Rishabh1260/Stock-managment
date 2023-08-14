"use client"

import Header from '/components/Header';
import AddProduct from '/components/addProduct';
import { useState, useEffect } from "react";


export default function Home() {
 const [productForm, setProductForm] = useState({});
 const [products, setProduct] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 
console.log(products);
 const fetchProduct = async () =>{
  const response = await fetch('/api/product')
  
  setProduct(await response.json());
  // let rjson = await response.json()
  // console.log(rjson);
  // setProduct(rjson.product)
 }
 
useEffect( () => {
  
  fetchProduct();
  
}, [])



//  const addProduct =  async(e)=> { 
//     e.prventDefault();
//  }

//  try{
//   const response = await fetch('/api/product', {
//     method : 'POST', 
//     headers: {
//       'Content-type' : 'application/json'
//     },
//     body: JSON.stringify(productForm)
//   });

//   if(response.ok){

//   }
//  }

//  const currentStock = [
//   { id: 1, productName: "Product 1", price: 50, quantity: 10 },
//   { id: 2, productName: "Product 2", price: 25, quantity: 20 },
//   { id: 3, productName: "Product 3", price: 15, quantity: 15 },
// ];

// const handleChange = (e)=> {
//    setProductForm({...productForm, [e.target.name]: e.target.value})
//  }
 
  return (
    <>
      {/* <Header />
      <AddProduct /> */}

      <div className="container w-11/12 mx-auto bg-gray-200 mt-7 shadow-md rounded-md p-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Current Stock</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-300">
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Quantity</th>
                </tr>
              </thead>
              <tbody>
              {products.map(product => (
  <tr key={product._id}>
    <td className="py-2 px-4">{product.item}</td>
    <td className="py-2 px-4">{product.qty}</td>
    <td className="py-2 px-4">{product.size}</td>
  </tr>
))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}