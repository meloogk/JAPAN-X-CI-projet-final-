"use client"
import { useState } from "react";
import ProductCard from "@/components/product_card";
import CategoryFilter from "@/components/filtre";

const products = [
  { id: 1, name: "One Piece - Tome 1", price: 6.99, image: "/onepiece.jpg", category: "Shonen" },
  { id: 2, name: "Attack on Titan - Tome 1", price: 7.50, image: "/aot.jpg", category: "Seinen" },
  { id: 3, name: "Figurine Luffy", price: 29.99, image: "/luffy-figurine.jpg", category: "Figurines Pop" },
  { id: 4, name: "Porte-clé Naruto", price: 5.99, image: "/naruto-keychain.jpg", category: "Goodies" },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    
  
    <div className="container mx-auto p-6 flex">
      {/* Sidebar des catégories */}
      <CategoryFilter onSelectCategory={setSelectedCategory} />

      {/* Liste des produits */}
      <div className="w-3/4 grid grid-cols-3 gap-6 ml-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-gray-500">Aucun produit trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
