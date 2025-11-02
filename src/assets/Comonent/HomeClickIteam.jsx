import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { lastDummy } from "../Utils";

export default function HomeClickIteam() {
  const [items, setItems] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 15]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setItems(lastDummy);
  }, []);

  // 🧮 Filter logic
  const filteredItems = items.filter((item) => {
    const inCategory =
      categoryFilter === "All" || item.category === categoryFilter;
    const inPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    return inCategory && inPrice;
  });

  // ⭐ Trending items logic (same category)
  const trendingItems = items
    .filter(
      (item) =>
        item.isTrending && // optional flag in your dummy data
        (categoryFilter === "All" || item.category === categoryFilter)
    )
    .slice(0, 3); // show only 3 trending

  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* 🧭 Sidebar */}
      <div
        className="bg-warning-subtle p-3 border-end border-dark"
        style={{ width: "250px" }}
      >
        <h4 className="text-center mb-4 text-dark">Filters</h4>

        {/* 🥗 Dropdown Menu Section */}
        <div className="mb-4">
          <button
            className="btn btn-outline-dark w-100 d-flex justify-content-between align-items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            🍽 Menu Categories
            <span>{showDropdown ? "▲" : "▼"}</span>
          </button>

          {showDropdown && (
            <ul className="list-group mt-2">
              {["All", "Pizza", "Burger", "Beverage"].map((cat) => (
                <li
                  key={cat}
                  className={`list-group-item list-group-item-action ${
                    categoryFilter === cat
                      ? "active bg-danger text-white"
                      : "text-dark"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 💰 Price Range Filter */}
        <h6 className="text-uppercase text-black mb-2">Price Range</h6>
        <div className="mb-4">
          <input
            type="range"
            className="form-range"
            min="0"
            max="15"
            step="0.5"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([0, parseFloat(e.target.value)])
            }
          />
          <p className="small text-center text-black">
            Up to ${priceRange[1]}
          </p>
        </div>

        <p className="text-center small text-black mt-auto mb-0">
          © 2025 My Restaurant
        </p>
      </div>

      {/* 🍕 Menu Grid */}
      <div className="flex-grow-1 p-4">
        <div className="container">
          <h2 className="text-center mb-4 fw-semibold">Our Menu</h2>

          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-sm border-black border-2 rounded-4">
                  <div className="position-relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-3 py-2 fw-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title mb-2">{item.title}</h5>
                      <p className="card-text text-muted small mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-outline-warning btn-sm"
                        onClick={() =>
                          alert(`${item.title} added to cart`)
                        }
                      >
                        Add
                      </button>
                      <small className="text-muted">{item.category}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-muted mt-4">
              No items found in this range.
            </p>
          )}

          {/* 🔥 Trending Items Section */}
          {trendingItems.length > 0 && (
            <div className="mt-5">
              <h3 className="fw-bold mb-3 text-danger text-center">
                🔥 Trending {categoryFilter === "All" ? "Items" : categoryFilter}
              </h3>
              <div className="row g-4">
                {trendingItems.map((item) => (
                  <div
                    key={item.id}
                    className="col-12 col-sm-6 col-lg-4"
                  >
                    <div className="card border-0 shadow-sm bg-light h-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="card-img-top"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <div className="card-body text-center">
                        <h6 className="fw-semibold mb-2">{item.title}</h6>
                        <p className="small text-muted mb-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            alert(`${item.title} added to cart`)
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
