import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Jersey");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>

        {/* Upload Image Section */}
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Upload Images</p>
          <div className="grid grid-cols-4 gap-3">
            {[setImage1, setImage2, setImage3, setImage4].map(
              (setImage, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg hover:border-gray-500">
                    {[
                      image1,
                      image2,
                      image3,
                      image4,
                    ][index] ? (
                      <img
                        src={URL.createObjectURL(
                          [image1, image2, image3, image4][index]
                        )}
                        alt="Upload Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">+</span>
                    )}
                  </div>
                </label>
              )
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <label className="text-gray-600">Product Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            type="text"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Category and Price Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-gray-600">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">Subcategory</label>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            >
              <option value="Jersey">Jersey</option>
              <option value="Boot">Boot</option>
              <option value="Shorts">Shorts</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Price ($)</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 mt-1"
            type="number"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="text-gray-600">Available Sizes</label>
          <div className="flex gap-3 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((item) => item !== size)
                      : [...prev, size]
                  )
                }
                className={`px-3 py-1 cursor-pointer rounded-lg ${
                  sizes.includes(size)
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input
            checked={bestseller}
            onChange={() => setBestSeller((prev) => !prev)}
            type="checkbox"
            id="bestseller"
            className="w-4 h-4"
          />
          <label htmlFor="bestseller" className="text-gray-600 cursor-pointer">
            Add to Bestseller
          </label>
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
