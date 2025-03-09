import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <Link to="/" className="text-xl font-bold text-pink-600">SportsShop</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/rentals" className="hover:text-pink-600">Rentals</Link></li>
          <li><Link to="/customization" className="hover:text-pink-600">Customization</Link></li>
          <li><Link to="/cart" className="hover:text-pink-600">Cart</Link></li>
          <li><Link to="/profile" className="hover:text-pink-600">Profile</Link></li>
          {/* Product Categories */}
          <li><Link to="/football" className="hover:text-pink-600">Football</Link></li>
          <li><Link to="/basketball" className="hover:text-pink-600">Basketball</Link></li>
          <li><Link to="/cricket" className="hover:text-pink-600">Cricket</Link></li>
          <li><Link to="/tennis" className="hover:text-pink-600">Tennis</Link></li>
          <li><Link to="/badminton" className="hover:text-pink-600">Badminton</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
