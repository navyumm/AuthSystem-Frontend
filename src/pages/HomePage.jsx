import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/authSlice"; 

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

function HomePage() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle logout
  const handleLogout = () => {
    dispatch(userLogout()); 
    navigate("/"); 
  };
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      return {
        ...prevCart,
        [product.id]: { ...product, quantity: currentQuantity + 1 },
      };
    });
  };

  // Function to handle removing products from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      if (currentQuantity > 1) {
        return {
          ...prevCart,
          [product.id]: { ...product, quantity: currentQuantity - 1 },
        };
      } else {
        const updatedCart = { ...prevCart };
        delete updatedCart[product.id];
        return updatedCart;
      }
    });
  };

  // Function to display total cart item count
  const getCartItemCount = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };


  // Function to check if the product is in the cart
  const getProductQuantity = (productId) => {
    return cart[productId]?.quantity || 0;
  };

  
  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Cart ({getCartItemCount()})
        </button>

        {/* Change Password and Logout Buttons */}
        <div className="space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Change Password
          </button>
          <button
            onClick={handleLogout} // Correctly passing a function reference
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="mt-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-5">Products</h2>

        {/* Static Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 shadow-md rounded-lg flex flex-col items-center"
            >
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500 mb-4">₹{product.price}</p>

              {/* Button Container */}
              <div className="flex space-x-2">
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Add to Cart
                </button>

                {/* Remove from Cart Button - Show if product is in the cart */}
                {getProductQuantity(product.id) > 0 && (
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Show product quantity if it has been added */}
              {getProductQuantity(product.id) > 0 && (
                <p className="mt-2 text-sm">
                  Quantity: {getProductQuantity(product.id)}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="w-full max-w-2xl mt-10">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          {getCartItemCount() > 0 ? (
            <div>
              <ul className="space-y-3">
                {Object.values(cart).map((item, index) => (
                  <li
                    key={index}
                    className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <span className="font-medium">{item.name}</span> -{" "}
                      <span className="text-gray-500">₹{item.price}</span>
                    </div>
                    <span>Quantity: {item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xl font-semibold">
                Total Price: ₹{getTotalPrice().toFixed(2)}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;