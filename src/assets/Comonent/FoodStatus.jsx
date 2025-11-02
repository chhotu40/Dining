import React, { useState, useEffect } from "react";

export default function RestaurantOrderStatus() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  // Food order stages (for dine-in)
  const statuses = [
    { id: 1, label: "Order Placed", icon: "📝" },
    { id: 2, label: "In Kitchen (Cooking)", icon: "👨‍🍳" },
    { id: 3, label: "Ready to Serve", icon: "🍛" },
    { id: 4, label: "Served at Table", icon: "🍽️" },
    { id: 5, label: "Enjoy Your Meal!", icon: "😋" },
  ];

  // Start automatic status progress
  useEffect(() => {
    if (orderPlaced && statusIndex < statuses.length - 1) {
      const timer = setInterval(() => {
        setStatusIndex((prev) => {
          if (prev < statuses.length - 1) return prev + 1;
          clearInterval(timer);
          return prev;
        });
      }, 4000); // every 4 seconds updates status
      return () => clearInterval(timer);
    }
  }, [orderPlaced, statusIndex]);

  // Place order
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setStatusIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">
          🍴 Restaurant Order Tracker
        </h1>
        <p className="text-gray-600 mb-6">
          Track your meal as it’s being prepared and served!
        </p>

        {!orderPlaced ? (
          <button
            onClick={handlePlaceOrder}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
          >
            🛒 Place Dine-In Order
          </button>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4 mb-6">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${((statusIndex + 1) / statuses.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Status Steps */}
            <div className="text-left mb-6">
              {statuses.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`flex items-center mb-3 ${
                    index <= statusIndex ? "text-green-700" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-xl rounded-full ${
                      index <= statusIndex
                        ? "bg-green-100 border-2 border-green-500"
                        : "bg-gray-100 border-2 border-gray-300"
                    }`}
                  >
                    {stage.icon}
                  </div>
                  <span className="ml-3 font-medium text-lg">
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h2 className="text-lg font-semibold text-green-700">
                {statuses[statusIndex].icon} {statuses[statusIndex].label}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {statusIndex < statuses.length - 1
                  ? "Please wait while we move to the next step..."
                  : "Your meal has been served! Enjoy dining with us 🍽️"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
