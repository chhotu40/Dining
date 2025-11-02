import React, { useEffect, useState } from "react";

export default function Login({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [storeOtp, setStoreOtp] = useState("");
  const [showNewUser, setShowNewUser] = useState(false);
  const [allData, setAllData] = useState([]);
  const [newUser, setNewUser] = useState({ Name: "", Email: "", PhoneNo: "" });

  const DummyData = [
    { id: 1, Name: "Shivam", Email: "Shivam121@gmail.com", PhoneNo: 7712323451 },
    { id: 2, Name: "Monika", Email: "monika131@gmail.com", PhoneNo: 7112323451 },
    { id: 3, Name: "Aman", Email: "man221@gmail.com", PhoneNo: 7122323451 },
    { id: 4, Name: "Shiv", Email: "Shiv134@gmail.com", PhoneNo: 7902323451 },
    { id: 5, Name: "Shiva", Email: "Shiva221@gmail.com", PhoneNo: 771232344 },
    { id: 6, Name: "Shikumar", Email: "Shivam121@gmail.com", PhoneNo: 912323451 },
    { id: 7, Name: "Shivam", Email: "Shivam121@gmail.com", PhoneNo: 752323451 },
  ];

  useEffect(() => {
    setAllData(DummyData);
  }, []);

  // ✅ Generate OTP
  const generateOtpFn = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("❌ Please enter a valid 10-digit Indian phone number!");
      return;
    }
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", randomNumber);
    setGeneratedOtp(randomNumber);
    setIsLogin(true);
  };

  // ✅ Submit OTP
  const submitOtp = () => {
    if (generatedOtp !== Number(storeOtp)) {
      alert("❌ OTP does not match!");
      return;
    }

    const foundUser = allData.find(
      (user) => user.PhoneNo === Number(phoneNumber)
    );

    if (foundUser) {
      alert(`✅ Welcome back, ${foundUser.Name}!`);
      onLogin(foundUser); // ✅ Notify App.jsx of successful login
    } else {
      setShowNewUser(true);
    }
  };

  // ✅ Register new user
  const registerNewUser = () => {
    if (!newUser.Name || !newUser.Email || !newUser.PhoneNo) {
      alert("All fields are required!");
      return;
    }

    const userObj = {
      id: allData.length + 1,
      Name: newUser.Name,
      Email: newUser.Email,
      PhoneNo: Number(newUser.PhoneNo),
    };

    setAllData((prev) => [...prev, userObj]);
    alert("✅ User registered successfully!");
    setShowNewUser(false);
    setIsLogin(false);
    setPhoneNumber("");
    setStoreOtp("");
    setNewUser({ Name: "", Email: "", PhoneNo: "" });

    onLogin(userObj); // ✅ Directly login after registration
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && !showNewUser) {
      generateOtpFn();
    } else if (isLogin && !showNewUser) {
      submitOtp();
    } else if (showNewUser) {
      registerNewUser();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 bg-warning-subtle" style={{ width: "24rem" }}>
        <h3 className="text-center mb-3">
          {!isLogin && !showNewUser
            ? "Login"
            : isLogin && !showNewUser
            ? "Submit OTP"
            : "Register New User"}
        </h3>

        <form onSubmit={handleSubmit}>
          {!isLogin && !showNewUser && (
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control mb-3"
              required
            />
          )}

          {isLogin && !showNewUser && (
            <input
              type="number"
              placeholder="Enter OTP"
              value={storeOtp}
              onChange={(e) => setStoreOtp(e.target.value)}
              className="form-control mb-3"
              required
            />
          )}

          {showNewUser && (
            <>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control mb-2"
                value={newUser.Name}
                onChange={(e) =>
                  setNewUser({ ...newUser, Name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control mb-2"
                value={newUser.Email}
                onChange={(e) =>
                  setNewUser({ ...newUser, Email: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="form-control mb-2"
                value={newUser.PhoneNo}
                onChange={(e) =>
                  setNewUser({ ...newUser, PhoneNo: e.target.value })
                }
                required
              />
            </>
          )}

          <button className="btn btn-warning w-100" type="submit">
            {!isLogin && !showNewUser
              ? "Get OTP"
              : isLogin && !showNewUser
              ? "Submit OTP"
              : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
