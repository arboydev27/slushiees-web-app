import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">2456123456</td>
            <td className="py-6 px-1">31.04.2025</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block py-6 px-1">
              Hawaiian Burger (2), French Fries (3), Sprite 2L (1)
            </td>
            <td className="py-6 px-1">On the way (approx. 15min)... </td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">2456123456</td>
            <td className="py-6 px-1">31.04.2025</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block py-6 px-1">
              Hawaiian Burger (2), French Fries (3), Sprite 2L (1)
            </td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">2456123456</td>
            <td className="py-6 px-1">31.04.2025</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block py-6 px-1">
              Hawaiian Burger (2), French Fries (3), Sprite 2L (1)
            </td>
            <td className="py-6 px-1">Delivered </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
