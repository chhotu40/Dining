

//   import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function ProductPageLayout() {
//   const PRODUCTS = [
//     {
//       id: 1,
//       title: "Margherita Pizza",
//       price: 8.99,
//       desc: "Classic cheese pizza with basil and tomato sauce.",
//       img: "https://images.unsplash.com/photo-1601924582975-9b3f1a5d1d4a?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 2,
//       title: "Cheese Burger",
//       price: 6.49,
//       desc: "Juicy grilled burger with melted cheese and lettuce.",
//       img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 3,
//       title: "Paneer Wrap",
//       price: 5.99,
//       desc: "Spicy paneer roll with tangy sauce and veggies.",
//       img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
//     },
//      {
//       id: 3,
//       title: "Paneer Wrap",
//       price: 5.99,
//       desc: "Spicy paneer roll with tangy sauce and veggies.",
//       img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
//     },
//      {
//       id: 3,
//       title: "Paneer Wrap",
//       price: 5.99,
//       desc: "Spicy paneer roll with tangy sauce and veggies.",
//       img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
//     },
//      {
//       id: 3,
//       title: "Paneer Wrap",
//       price: 5.99,
//       desc: "Spicy paneer roll with tangy sauce and veggies.",
//       img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 4,
//       title: "Cold Coffee",
//       price: 3.5,
//       desc: "Chilled coffee with cream and chocolate drizzle.",
//       img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 5,
//       title: "Pasta Alfredo",
//       price: 7.25,
//       desc: "Creamy Alfredo pasta with cheese and garlic.",
//       img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
//     },
//   ];

//   const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [added, setAdded] = useState(false);
//   const [showAllAsGrid, setShowAllAsGrid] = useState(false); // New state for All Products layout
//   const [showSimilarAsGrid, setShowSimilarAsGrid] = useState(false); // New state for Similar Products layout

//   const handleAddToCart = () => {
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setShowAllAsGrid(true); // Convert to grid when a product is clicked
//     setShowSimilarAsGrid(true); // Convert similar products to grid when a product is clicked
//   };

//   return (
//     <div
//       className="container-fluid min-vh-100 py-5 d-flex flex-column"
//       style={{
//         background: "#f9fafb",
//         overflowX: "hidden",
//       }}
//     >
//       {/* MAIN CONTAINER WITH THREE PARTS */}
//       <div className="row g-4">
//         <div className="col-12">
//           {/* FIRST CONTAINER: Product Image, Description, and Similar Products */}
//           <div className="card p-4 rounded-4 shadow-sm mb-4">
//             <div className="row">
//               {/* Left Side: Image and Description */}
//               <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center gap-4">
//                 {/* Image */}
//                 <div className="flex-shrink-0">
//                   <img
//                     src={selectedProduct.img}
//                     alt={selectedProduct.title}
//                     className="img-fluid rounded-4 shadow"
//                     style={{
//                       width: "100%",
//                       maxWidth: "350px",
//                       height: "350px",
//                       objectFit: "cover",
//                       transform: added ? "scale(1.1)" : "scale(1)", // Scale image when added
//                       transition: "transform 0.3s ease",
//                     }}
//                   />
//                 </div>

//                 {/* Description and Details */}
//                 <div
//                   className="flex-grow-1 text-center"
//                   style={{
//                     transform: added ? "scale(1.05)" : "scale(1)", // Scale description when added
//                     transition: "transform 0.3s ease",
//                   }}
//                 >
//                   <h3 className="fw-bold">{selectedProduct.title}</h3>
//                   <p className="text-muted">{selectedProduct.desc}</p>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Price:</span>
//                     <span className="fw-semibold">
//                       ${selectedProduct.price.toFixed(2)}
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-3">
//                     <span className="fw-semibold">Total:</span>
//                     <span className="fw-bold">
//                       ${(selectedProduct.price * quantity).toFixed(2)}
//                     </span>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="d-flex align-items-center justify-content-center mb-3">
//                     <button
//                       className="btn btn-outline-secondary"
//                       onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
//                     >
//                       -
//                     </button>
//                     <span className="mx-3 fs-5">{quantity}</span>
//                     <button
//                       className="btn btn-outline-secondary"
//                       onClick={() => setQuantity((q) => q + 1)}
//                     >
//                       +
//                     </button>
//                   </div>

//                   {/* Add to Cart Button */}
//                   <button
//                     className="btn btn-warning w-100"
//                     style={{ padding: "0.75rem 0", fontWeight: "600" }}
//                     onClick={handleAddToCart}
//                   >
//                     {added ? "Added ✅" : "Add to Cart"}
//                   </button>
//                 </div>
//               </div>

//               {/* Right Side: Similar Products */}
//               <div className="col-lg-6 col-md-12"   style={{border: " 2px solid black " , borderRadius: " 10px "}}>
//                 <h5 className="mb-3 text-center">Similar Products</h5>
//                 {showSimilarAsGrid ? (
//                   // Show as grid of cards with description when a product is clicked
//                   <div className="row g-3">
//                     {PRODUCTS.filter((p) => p.id !== selectedProduct.id).map((p) => (
//                       <div key={p.id} className="col-md-6 col-sm-12">
//                         <div
//                           className="card shadow-sm"
//                           style={{
//                             cursor: "pointer",
//                             transition: "transform 0.3s ease",
//                           }}
//                           onClick={() => handleProductClick(p)}
//                           onMouseEnter={(e) =>
//                             (e.currentTarget.style.transform = "scale(1.05)")
//                           }
//                           onMouseLeave={(e) =>
//                             (e.currentTarget.style.transform = "scale(1)")
//                           }
//                         >
//                           <img
//                             src={p.img}
//                             alt={p.title}
//                             className="card-img-top"
//                             style={{
//                               height: "120px",
//                               objectFit: "cover",
//                             }}
//                           />
//                           <div className="card-body text-center p-2">
//                             <h6 className="fw-semibold">{p.title}</h6>
//                             <p className="text-muted small mb-1">{p.desc}</p>
//                             <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   // Show as carousel initially
//                   <div
//                     className="d-flex overflow-auto gap-3 pb-2 px-2"
//                     style={{ scrollSnapType: "x mandatory" }}
//                   >
//                     {PRODUCTS.filter((p) => p.id !== selectedProduct.id).map((p) => (
//                       <div
//                         key={p.id}
//                         className="card shadow-sm flex-shrink-0"
//                         style={{
//                           width: "180px",
//                           scrollSnapAlign: "start",
//                           cursor: "pointer",
//                           transition: "transform 0.3s ease",
//                         }}
//                         onClick={() => handleProductClick(p)}
//                         onMouseEnter={(e) =>
//                           (e.currentTarget.style.transform = "scale(1.05)")
//                         }
//                         onMouseLeave={(e) =>
//                           (e.currentTarget.style.transform = "scale(1)")
//                         }
//                       >
//                         <img
//                           src={p.img}
//                           alt={p.title}
//                           className="card-img-top"
//                           style={{
//                             height: "120px",
//                             objectFit: "cover",
//                           }}
//                         />
//                         <div className="card-body text-center p-2">
//                           <h6 className="fw-semibold">{p.title}</h6>
//                           <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* SECOND CONTAINER: All Products */}
//           <div className="card p-4 rounded-4 shadow-sm">
//             <h5 className="mb-3 text-center">All Products</h5>
//             {showAllAsGrid ? (
//               // Show as grid of cards when a product is clicked
//               <div className="row g-3">
//                 {PRODUCTS.map((p) => (
//                   <div key={p.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
//                     <div
//                       className="card shadow-sm"
//                       style={{
//                         cursor: "pointer",
//                         transition: "transform 0.3s ease",
//                       }}
//                       onClick={() => handleProductClick(p)}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.transform = "scale(1.05)")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.transform = "scale(1)")
//                       }
//                     >
//                       <img
//                         src={p.img}
//                         alt={p.title}
//                         className="card-img-top"
//                         style={{
//                           height: "120px",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <div className="card-body text-center p-2">
//                         <h6 className="fw-semibold">{p.title}</h6>
//                         <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               // Show as carousel initially
//               <div
//                 className="d-flex overflow-auto gap-3 pb-2 px-2"
//                 style={{ scrollSnapType: "x mandatory" }}
//               >
//                 {PRODUCTS.map((p) => (
//                   <div
//                     key={p.id}
//                     className="card shadow-sm flex-shrink-0"
//                     style={{
//                       width: "180px",
//                       scrollSnapAlign: "start",
//                       cursor: "pointer",
//                       transition: "transform 0.3s ease",
//                     }}
//                     onClick={() => handleProductClick(p)}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.transform = "scale(1.05)")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.transform = "scale(1)")
//                     }
//                   >
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="card-img-top"
//                       style={{
//                         height: "120px",
//                         objectFit: "cover",
//                       }}
//                     />
//                     <div className="card-body text-center p-2">
//                       <h6 className="fw-semibold">{p.title}</h6>
//                       <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPageLayout() {
  const PRODUCTS = [
    {
      id: 1,
      title: "Margherita Pizza",
      price: 8.99,
      desc: "Classic cheese pizza with basil and tomato sauce.",
      img: "https://images.unsplash.com/photo-1601924582975-9b3f1a5d1d4a?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Cheese Burger",
      price: 6.49,
      desc: "Juicy grilled burger with melted cheese and lettuce.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Paneer Wrap",
      price: 5.99,
      desc: "Spicy paneer roll with tangy sauce and veggies.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Cold Coffee",
      price: 3.5,
      desc: "Chilled coffee with cream and chocolate drizzle.",
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: "Pasta Alfredo",
      price: 7.25,
      desc: "Creamy Alfredo pasta with cheese and garlic.",
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showAllAsGrid, setShowAllAsGrid] = useState(false);
  const [showSimilarAsGrid, setShowSimilarAsGrid] = useState(false);
  const [cart, setCart] = useState([]); // Cart state: array of {product, quantity}

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === selectedProduct.id);
      if (existingItem) {
        // Increase quantity if already in cart
        return prevCart.map((item) =>
          item.product.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [...prevCart, { product: selectedProduct, quantity }];
      }
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setQuantity(1); // Reset quantity after adding
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowAllAsGrid(true);
    setShowSimilarAsGrid(true);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div
      className="container-fluid min-vh-100 py-5 d-flex flex-column"
      style={{
        background: "#f9fafb",
        overflowX: "hidden",
      }}
    >
      {/* CART SUMMARY */}
      {cart.length > 0 && (
        <div className="row g-4 mb-4">
          <div className="col-12">
            <div className="card p-4 rounded-4 shadow-sm">
              <h5 className="mb-3">Cart ({cart.length} items)</h5>
              <div className="row g-3">
                {cart.map((item) => (
                  <div key={item.product.id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card shadow-sm">
                      <div className="card-body d-flex align-items-center">
                        <img
                          src={item.product.img}
                          alt={item.product.title}
                          className="img-fluid rounded me-3"
                          style={{ width: "60px", height: "60px", objectFit: "cover" }}
                        />
                        <div className="flex-grow-1">
                          <h6 className="fw-semibold">{item.product.title}</h6>
                          <p className="text-muted small mb-1">${item.product.price.toFixed(2)} each</p>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-sm btn-outline-secondary me-2"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary ms-2"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                            <button
                              className="btn btn-sm btn-danger ms-3"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-end">
                <h5>Total: ${totalCartPrice.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTAINER WITH THREE PARTS */}
      <div className="row g-4">
        <div className="col-12">
          {/* FIRST CONTAINER: Product Image, Description, and Similar Products */}
          <div className="card p-4 rounded-4 shadow-sm mb-4">
            <div className="row">
              {/* Left Side: Image and Description */}
              <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center gap-4">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.title}
                    className="img-fluid rounded-4 shadow"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "350px",
                      objectFit: "cover",
                      transform: added ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Description and Details */}
                <div
                  className="flex-grow-1 text-center"
                  style={{
                    transform: added ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <h3 className="fw-bold">{selectedProduct.title}</h3>
                  <p className="text-muted">{selectedProduct.desc}</p>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Price:</span>
                    <span className="fw-semibold">
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className="fw-semibold">Total:</span>
                    <span className="fw-bold">
                      ${(selectedProduct.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                    >
                      -
                    </button>
                    <span className="mx-3 fs-5">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="btn btn-warning w-100"
                    style={{ padding: "0.75rem 0", fontWeight: "600" }}
                    onClick={handleAddToCart}
                  >
                    {added ? "Added ✅" : "Add to Cart"}
                  </button>
                </div>
              </div>

              {/* Right Side: Similar Products */}
              <div className="col-lg-6 col-md-12">
                <h5 className="mb-3 text-center">Similar Products</h5>
                {showSimilarAsGrid ? (
                  <div className="row g-3">
                    {PRODUCTS.filter((p) => p.id !== selectedProduct.id).map((p) => (
                      <div key={p.id} className="col-md-6 col-sm-12">
                        <div
                          className="card shadow-sm"
                          style={{
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                          }}
                          onClick={() => handleProductClick(p)}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        >
                          <img
                            src={p.img}
                            alt={p.title}
                            className="card-img-top"
                            style={{
                              height: "120px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="card-body text-center p-2">
                            <h6 className="fw-semibold">{p.title}</h6>
                            <p className="text-muted small mb-1">{p.desc}</p>
                            <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="d-flex overflow-auto gap-3 pb-2 px-2"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {PRODUCTS.filter((p) => p.id !== selectedProduct.id).map((p) => (
                      <div
                        key={p.id}
                        className="card shadow-sm flex-shrink-0"
                        style={{
                          width: "180px",
                          scrollSnapAlign: "start",
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                        }}
                        onClick={() => handleProductClick(p)}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <img
                          src={p.img}
                          alt={p.title}
                          className="card-img-top"
                          style={{
                            height: "120px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-body text-center p-2">
                          <h6 className="fw-semibold">{p.title}</h6>
                          <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECOND CONTAINER: All Products */}
          <div className="card p-4 rounded-4 shadow-sm">
            <h5 className="mb-3 text-center">All Products</h5>
            {showAllAsGrid ? (
              <div className="row g-3">
                {PRODUCTS.map((p) => (
                  <div key={p.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div
                      className="card shadow-sm"
                      style={{
                        cursor: "pointer",
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => handleProductClick(p)}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="card-img-top"
                        style={{
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body text-center p-2">
                        <h6 className="fw-semibold">{p.title}</h6>
                        <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="d-flex overflow-auto gap-3 pb-2 px-2"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {PRODUCTS.map((p) => (
                  <div
                    key={p.id}
                    className="card shadow-sm flex-shrink-0"
                    style={{
                      width: "180px",
                      scrollSnapAlign: "start",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                    onClick={() => handleProductClick(p)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="card-img-top"
                      style={{
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body text-center p-2">
                      <h6 className="fw-semibold">{p.title}</h6>
                      <p className="text-muted small mb-0">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
