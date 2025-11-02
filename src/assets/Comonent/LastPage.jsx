import React, { useState } from "react";

export default function ProductList() {
  // Product list
  const [products] = useState([
    { id: 1, name: "Margherita Pizza", price: 200 },
    { id: 2, name: "Veg Burger", price: 150 },
    { id: 3, name: "Pasta Alfredo", price: 180 },
    { id: 4, name: "Cold Coffee", price: 120 },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const GST_RATE = 0.18;

  const subtotal = products.reduce((sum, item) => sum + item.price, 0);

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(0.1 * subtotal);
    } else if (coupon === "SAVE20") {
      setDiscount(0.2 * subtotal);
    } else {
      setDiscount(0);
      alert("❌ Invalid coupon code!");
    }
  };

  const gstAmount = subtotal * GST_RATE;
  const total = subtotal + gstAmount - discount;

  const handleBuyOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto p-6 flex flex-row gap-6 justify-center items-start flex-wrap">
      {/* LEFT SIDE — PRODUCT SUMMARY */}
      <div className="bg-white rounded-2xl shadow-lg p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">🛍️ Product Summary</h2>

        <ul className="divide-y divide-gray-200 mb-4">
          {products.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="border-t pt-3 text-sm">
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>GST (18%):</span> <span>₹{gstAmount.toFixed(2)}</span>
          </p>
          {discount > 0 && (
            <p className="flex justify-between text-green-600">
              <span>Coupon Discount:</span> <span>-₹{discount.toFixed(2)}</span>
            </p>
          )}
          <hr className="my-2" />
          <p className="flex justify-between font-semibold text-lg">
            <span>Total:</span> <span>₹{total.toFixed(2)}</span>
          </p>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Coupon (SAVE10 / SAVE20)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />
          <button
            onClick={applyCoupon}
            className="w-full mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Apply Coupon
          </button>
        </div>

        <div className="mt-5">
          <button
            onClick={handleBuyOrder}
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            🛒 Buy Order
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — ORDER CONFIRMATION */}
      <div className="bg-gray-100 rounded-2xl shadow-inner p-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center">
        {!orderPlaced ? (
          <>
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              🧾 Order Details
            </h2>
            <p className="text-gray-500 text-center">
              Your order summary will appear here after clicking <b>Buy Order</b>.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              ✅ Order Placed Successfully!
            </h2>
            <div className="bg-white p-4 rounded-lg w-full text-sm shadow">
              <p className="flex justify-between">
                <span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>GST (18%):</span> <span>₹{gstAmount.toFixed(2)}</span>
              </p>
              {discount > 0 && (
                <p className="flex justify-between text-green-600">
                  <span>Coupon Discount:</span> <span>-₹{discount.toFixed(2)}</span>
                </p>
              )}
              <hr className="my-2" />
              <p className="flex justify-between font-semibold text-lg">
                <span>Total Paid:</span> <span>₹{total.toFixed(2)}</span>
              </p>
            </div>
            <p className="mt-3 text-gray-500 text-center">
              Thank you for ordering! 🍕<br />
              Your delicious meal will arrive soon.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
