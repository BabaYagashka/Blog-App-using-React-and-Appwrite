// import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-100 to-gray-300">
      {/* App Wrapper */}
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main Content */}
        <main className="flex-1 w-full px-4 py-6 md:px-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center text-black">
      Loading...
    </div>
  );
}

export default App;
