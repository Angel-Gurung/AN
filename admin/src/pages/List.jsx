import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Products</h2>
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border-b bg-gray-200 text-sm font-semibold">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>
      
      {/* Product List */}
      <div className="space-y-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <img className="w-16 h-16 object-cover rounded-lg" src={item.image[0]} alt="Product" />
            <p className="text-gray-700 font-medium">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-800 font-semibold">{currency}{item.price}</p>
            <button
              onClick={() => removeProduct(item._id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
