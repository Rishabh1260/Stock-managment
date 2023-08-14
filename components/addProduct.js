import React from 'react';

const AddProductForm = () => {
  return (
    <div className="form-container w-11/12 p-5 shadow-md mx-auto rounded-md bg-white">
      <h1 className="text-2xl font-bold mb-4">Add a Product</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="slug" className="block font-medium mb-1">
            Product Name:
          </label>
          <input
            type="text"
            id="slug"
            name="productName"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1">
            Category:
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
