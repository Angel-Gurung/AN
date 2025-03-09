import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const productsData = {
  football: [
    { id: 1, name: "Football", description: "Premium quality football.", price: 25, image: "/images/football.jpg" },
    { id: 2, name: "Football Shoes", description: "Durable and comfortable.", price: 45, image: "/images/football-shoes.jpg" },
  ],
  basketball: [
    { id: 3, name: "Basketball", description: "Official size and weight.", price: 30, image: "/images/basketball.jpg" },
    { id: 4, name: "Basketball Jersey", description: "Breathable fabric.", price: 40, image: "/images/basketball-jersey.jpg" },
  ],
  cricket: [
    { id: 5, name: "Cricket Bat", description: "Wooden professional bat.", price: 50, image: "/images/cricket-bat.jpg" },
    { id: 6, name: "Cricket Pads", description: "High protection pads.", price: 35, image: "/images/cricket-pads.jpg" },
  ],
};

function CategoryPage() {
  const { category } = useParams();
  const normalizedCategory = category?.toLowerCase();
  const products = productsData[normalizedCategory] || [];

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Category Title */}
      <h2 className="text-3xl font-bold text-center mb-6 capitalize text-pink-600">
        {normalizedCategory} Products
      </h2>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">No products available in this category.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
