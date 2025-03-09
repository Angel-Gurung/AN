import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import CategoryPage from "./components/CategoryCard.jsx";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Orders = lazy(() => import("./pages/Orders.jsx"));
const Rentals = lazy(() => import("./pages/Rentals.jsx"));
const Customization = lazy(() => import("./pages/Customization.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const FootballProduct = lazy(() => import("./pages/FootballProduct"));
const BasketballProduct = lazy(() => import("./pages/BasketballProduct.jsx"));
const CricketProduct = lazy(() => import("./pages/CricketProduct.jsx"));
const TennisProduct = lazy(() => import("./pages/TennisProduct.jsx"));
const BadmintonProduct = lazy(() => import("./pages/BadmintonProduct.jsx"));

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/football" element={<FootballProduct />} />
          <Route path="/basketball" element={<BasketballProduct />} />
          <Route path="/cricket" element={<CricketProduct />} />
          <Route path="/tennis" element={<TennisProduct />} />
          <Route path="/badminton" element={<BadmintonProduct />} />
        </Routes>
      </Suspense>
    </div>  
  );
}

export default App;
