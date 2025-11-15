import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, 'orders'));
      // Filter out completed orders
      const pendingOrders = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(order => !order.isCompleted);
      setOrders(pendingOrders);
    };
    fetchOrders();
  }, []);

  // Function to mark an order as completed
  const markAsComplete = async (orderId) => {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, { isCompleted: true });
    // Remove the completed order from the current state
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center text-orange-500">Admin Panel - Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="py-3 px-4 border-b">User Email</th>
              <th className="py-3 px-4 border-b">Total Quantity</th>
              <th className="py-3 px-4 border-b">Total Price</th>
              <th className="py-3 px-4 border-b">Items</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <td className="py-3 px-4 border-b text-center">{order.userEmail}</td>
                <td className="py-3 px-4 border-b text-center">{order.totalQty}</td>
                <td className="py-3 px-4 border-b text-center">₹{order.totalPrice}</td>
                <td className="py-3 px-4 border-b text-center">
                  <ul className="list-disc list-inside space-y-1">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {item.name} (x{item.qty}) - ₹{item.price}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => markAsComplete(order.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                  >
                    Mark as Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
