import React from "react";
import { useEffect, useState } from "react";

const AddProductForm = (theme) => {
  const [productform, setProductForm] = useState();
  const [alert, setAlert] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState([])
  
  const onDropDownEdit = async (e) => {
    setQuery(e.target.value)
    if(!loading){
      setLoading(true)
      const response = await fetch('/api/search?query=' +query)
      let rjson = await response.json()
      setDropdown(rjson.products)
      setLoading(false)
    }
  }; 

  const handleChange = (e) => {
    setProductForm({ ...productform, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    // e.preventDefault();

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productform),
      });

      if (response.ok) {
        setAlert("Your Product is Added Successfully! 🎉");

        setProductForm({
          name: "",
          price: 0,
          quantity: 0,
          category: "",
        });
      } else {
        console.error("Failed to add product.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="form-container w-11/12 p-5  mx-auto bg-gradient-to-br from-gray-200 to-neutral-300 rounded-xl shadow dark:bg-gradient-to-br dark:from-zinc-800 dark:to-neutral-700 dark:shadow-inner">
      
      <div className="w-full flex justify-center items-center space-x-4 mb-6">
  <input
    className="w-full p-2 bg-zinc-100 focus:outline-none dark:bg-gradient-to-br dark:from-stone-900 dark:to-neutral-900 rounded-lg dark:shadow-inner text-gray-800 dark:text-neutral-500"
    type="text"
    onChange={onDropDownEdit}
    onBlur={()=>{setDropdown([])}}
    id="searchInput"
    placeholder="Search products..."
    />
    {loading && (
    <svg
      style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
      width="35px"
      height="35px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M10 50A40 40 0 0 0 90 50A40 44.3 0 0 1 10 50" fill="#5bafe1" stroke="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 52.15;360 50 52.15"
        ></animateTransform>
      </path>
    </svg>
    
  )}
  

  <select className="w-1/6 p-2  rounded-md dark:bg-gradient-to-br dark:from-zinc-800 dark:to-neutral-700 dark:shadow-inner dark:text-neutral-500" id="category">
    <option value="">All</option>
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
    <option value="books">Books</option>
    <option value="home-garden">Home & Garden</option>
    <option value="sports">Sports</option>
  </select>
  <button
    className="w-1/6 px-4 py-2 bg-blue-500 text-white dark:text-neutral-500 dark:bg-neutral-900 rounded-xl dark:shadow-inner "
    id="searchButton"
    >
    Search
  </button>
</div>




<div className="container absolute h-100 w-100  bg-gradient-to-r  to-transparent bg-opacity-70 backdrop-blur-md max-w-screen-sm pl-2 rounded-md">
  {dropdown.map(item => {
    return (
      <div key={item._id} className="container px-2 py-2 my-2 bg-violet-200 rounded-bl rounded-br w-[65vw] flex justify-between items-center">
        <div className="flex">
          <span className="slug">{item.slug}</span>
        </div>
        <div className="flex">
          <span className="price">{item.price}</span>
        </div>
        <div className="flex">
          <span className="quantity">
            <button className="px-2 mx-1 bg-blue-500 hover:bg-blue-700 rounded">-</button>
            <button className="px-2 mx-1 bg-blue-500 hover:bg-blue-700 rounded">+</button>
          </span>
        </div>
      </div>
    );
  })}
</div>





      <div className="text-green-600 text-center">{alert}</div>
      <h1 className="text-2xl font-bold mb-4 dark:text-neutral-500">Add a Product</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="slug" className="block font-medium mb-1 rounded-xl dark:text-neutral-500 ">
            Product Name:
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            onChange={handleChange}
            required
            value={productform?.slug || ""}
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring  focus:border-blue-300 dark:bg-gradient-to-br dark:focus:border-black dark:from-stone-900 dark:to-neutral-900 dark:shadow-inner"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1 dark:text-neutral-500">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            value={productform?.price || ""}
            required
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gradient-to-br dark:from-stone-900 dark:to-neutral-900 dark:shadow-inner"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium mb-1 dark:text-neutral-500">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={handleChange}
            value={productform?.quantity || ""}
            required
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gradient-to-br dark:from-stone-900 dark:to-neutral-900 dark:shadow-inner"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1 dark:text-neutral-500">
            Category:
          </label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            value={productform?.category || ""}
            required
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gradient-to-br dark:from-stone-900 dark:to-neutral-900 dark:shadow-inner dark:text-neutral-500"
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Home & Garden">Home & Garden</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={addProduct}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
