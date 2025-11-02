
// import React, { useState, useMemo } from "react";
// import { DATA } from "../Utils";

// export default function Home() {

//   const categories = useMemo(() => ["All", ...new Set(DATA.map((d) => d.category))], []);
//   const [query, setQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("popular");
//   const [cart, setCart] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   function filteredData() {
//     let items = DATA.filter(
//       (item) =>
//         (selectedCategory === "All" || item.category === selectedCategory) &&
//         (item.name.toLowerCase().includes(query.toLowerCase()) ||
//           item.desc.toLowerCase().includes(query.toLowerCase()))
//     );
//     if (sortBy === "price-asc") items.sort((a, b) => a.price - b.price);
//     if (sortBy === "price-desc") items.sort((a, b) => b.price - a.price);
//     return items;
//   }

//   function addToCart(item) {
//     setCart((c) => {
//       const existing = c.find((ci) => ci.id === item.id);
//       return existing
//         ? c.map((ci) => (ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci))
//         : [...c, { ...item, qty: 1 }];
//     });
//   }

//   function removeFromCart(id) {
//     setCart((c) => c.filter((ci) => ci.id !== id));
//   }

//   const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);

//   return (
//     <div className="container py-4">
//       {/* Header */}
//       <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
//         <div className="d-flex flex-wrap gap-2 align-items-center">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button className="btn btn-outline-secondary" onClick={() => setQuery("")}>
//               Clear
//             </button>
//           </div>

//           <select
//             className="form-select"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="popular">Popular</option>
//             <option value="price-asc">Price: Low → High</option>
//             <option value="price-desc">Price: High → Low</option>
//           </select>

//           <button
//             className="btn btn-outline-primary position-relative"
//             onClick={() => setSelectedItem({ cartView: true })}
//           >
//             Cart
//             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//               {cart.length}
//             </span>
//           </button>
//         </div>
//       </div>

//       Category Buttons
//       <div className="mb-4 d-flex flex-wrap gap-2">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`btn btn-sm ${selectedCategory === cat ? "btn-primary" : "btn-outline-secondary"}`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Items Grid */}
//       <div className="row g-4">
//         {filteredData().map((item) => (
//           <div key={item.id} className="col-12 col-sm-6 col-lg-4">
//             <div className="card h-100 shadow-sm">
//               <img src={item.img} className="card-img-top" alt={item.name} />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="text-muted mb-1">{item.category}</p>
//                 <p className="card-text small">{item.desc}</p>
//                 <div className="mt-auto d-flex justify-content-between align-items-center">
//                   <strong>${item.price.toFixed(2)}</strong>
//                   <div>
//                     <button
//                       className="btn btn-sm btn-outline-secondary me-2"
//                       onClick={() => setSelectedItem(item)}
//                     >
//                       Details
//                     </button>
//                     <button
//                       className="btn btn-sm btn-primary"
//                       onClick={() => addToCart(item)}
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty state */}
//       {filteredData().length === 0 && (
//         <p className="text-center text-muted mt-5">
//           No items match your search or filters.
//         </p>
//       )}

//       {/* Cart Modal */}
//       {selectedItem?.cartView && (
//         <div className="modal fade show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your Cart</h5>
//                 <button className="btn-close" onClick={() => setSelectedItem(null)}></button>
//               </div>
//               <div className="modal-body">
//                 {cart.length === 0 ? (
//                   <p className="text-center text-muted">Your cart is empty.</p>
//                 ) : (
//                   <>
//                     {cart.map((ci) => (
//                       <div key={ci.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
//                         <div className="d-flex align-items-center">
//                           <img src={ci.img} alt={ci.name} className="rounded me-3" width="60" height="60" />
//                           <div>
//                             <div>{ci.name}</div>
//                             <small className="text-muted">${ci.price}</small>
//                           </div>
//                         </div>
//                         <div>
//                           <span className="me-3">Qty: {ci.qty}</span>
//                           <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(ci.id)}>
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                     <div className="d-flex justify-content-between fw-bold mt-3">
//                       <span>Total</span>
//                       <span>${total}</span>
//                     </div>
//                   </>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   className="btn btn-success"
//                   onClick={() => {
//                     alert("Checkout simulated — thank you!");
//                     setCart([]);
//                     setSelectedItem(null);
//                   }}
//                 >
//                   Checkout
//                 </button>
//                 <button className="btn btn-secondary" onClick={() => setSelectedItem(null)}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Item Details Modal */}
//       {selectedItem && !selectedItem.cartView && (
//         <div className="modal fade show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <img src={selectedItem.img} alt={selectedItem.name} className="img-fluid rounded" />
//                   </div>
//                   <div className="col-md-6">
//                     <h4>{selectedItem.name}</h4>
//                     <p className="text-muted">{selectedItem.category}</p>
//                     <p>{selectedItem.desc}</p>
//                     <h5>${selectedItem.price.toFixed(2)}</h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-primary" onClick={() => addToCart(selectedItem)}>
//                   Add to Cart
//                 </button>
//                 <button className="btn btn-secondary" onClick={() => setSelectedItem(null)}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// <Image src="holder.js/171x180" roundedCircle />

//     </div>
//   );
// }


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React from "react";
export default function Home() {

  

 const images = [
    "https://tse1.mm.bing.net/th/id/OIP.DOQzKJr0G-AGHSIoOqhHmwHaEn?pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th/id/OIP.jUfCu2A6ilKJAdybISEMgwHaHa?pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th/id/OIP.mrliajAcK_FESJOmmhv6xwHaEo?pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th/id/OIP.Jpq8v_sA3d_gsBt8RD2K_AHaEK?pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th/id/OIP.kZnxkKKJYSVFE-o7I01opwHaE8?pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th/id/OIP.fRU01CdZXyulMk50F3I_cgHaEK?pid=Api&P=0&h=180",
  ];

  return (
    <>
    <div
        
    className="bg-warning-subtle" 
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        // backgroundColor: "#f8f9fa",

      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="card shadow-sm border-0 text-center p-3"
          style={{
            width: "18rem",
            borderRadius: "15px",
            // transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.transform = "scale(1.05)";
          //   e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.transform = "scale(1)";
          //   e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          // }}
        >
          <img
            src={img}
            alt={`card-${index}`}
            className="card-img-top mx-auto d-block"
            style={{
              mouse:"Pointer",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              marginTop: "10px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Card {index + 1}</h5>
             {/* <p className="card-text text-muted"> */}
              {/* Some description for this item. Clean, simple, and modern. */}
            {/* </p>  */}
            {/* <button className="btn btn-primary px-4 rounded-pill"> */}
              Go somewhere
            {/* </button>  */}
          </div>
        </div>
      ))}
    </div>
 </>
  );
}