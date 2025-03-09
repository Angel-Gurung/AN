import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const cricketProducts = [
  { id: 1, name: "Cricket Bat", price: 69.99, image: "/assets/cricket-bat.jpg" },
  { id: 2, name: "Cricket Ball", price: 12.99, image: "/assets/cricket-ball.jpg" },
  { id: 3, name: "Cricket Gloves", price: 29.99, image: "/assets/cricket-gloves.jpg" }
];

const CricketProduct = () => {
  return (
    <div>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Cricket Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cricketProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CricketProduct;
