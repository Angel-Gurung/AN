import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        console.error(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Order History</h3>
      <div className="grid gap-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-package-icon-png-image_3782962.jpg"
                alt="Order Icon"
                className="w-16 h-16"
              />
              <div className="flex flex-col flex-1">
                <p className="font-medium text-gray-900">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-gray-600">{order.address.street}, {order.address.city}</p>
                <p className="text-gray-600">{order.address.state}, {order.address.country}, {order.address.zipCode}</p>
                <p className="text-gray-800 font-medium mt-1">📞 {order.address.phone}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg text-gray-800">{currency}{order.amount}</p>
                <p className={`mt-1 ${order.payment ? 'text-green-600' : 'text-red-500'}`}>
                  {order.payment ? "✅ Paid" : "❌ Pending"}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <p>📦 Items: <strong>{order.items.length}</strong></p>
              <p>💳 Method: <strong>{order.paymentMethod}</strong></p>
              <p>📅 Date: <strong>{new Date(order.date).toLocaleDateString()}</strong></p>
            </div>

            <div className="mt-4">
              <label className="block text-gray-800 font-semibold mb-1">Order Status</label>
              <select
                className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
              >
                <option value="Order Placed">📥 Order Placed</option>
                <option value="Packing">📦 Packing</option>
                <option value="Order Shipped">🚚 Order Shipped</option>
                <option value="Out for delivery">📍 Out for Delivery</option>
                <option value="Delivered">✅ Delivered</option>
                <option value="Cancelled">❌ Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
