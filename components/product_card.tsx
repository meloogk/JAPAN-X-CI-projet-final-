import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const addToCart = () => {
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <Image src={product.image} alt={product.name} className="w-full h-64 object-cover"  width={100} height={100}/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}€</p>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition"
          >
            <FaShoppingCart className="mr-2" /> Ajouter au panier
          </button>

          <button onClick={handleLike} className="text-red-500 text-2xl">
            <FaHeart className={isLiked ? "text-red-600" : "text-gray-400"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
