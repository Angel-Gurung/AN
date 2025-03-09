import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
const badmintonProducts = [
  { id: 1, name: "Badminton Racket", price: 59.99, image: "/assets/badminton-racket.jpg" },
  { id: 2, name: "Shuttlecock", price: 14.99, image: "/assets/shuttlecock.jpg" },
  { id: 3, name: "Badminton Shoes", price: 69.99, image: "/assets/badminton-shoes.jpg" }
];

const BadmintonProduct = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Badminton Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {badmintonProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default BadmintonProduct;
