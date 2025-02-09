import { useState } from "react";

const categories = {
  Mangas: ["Seinen", "Shonen", "Shojo", "Divers"],
  Figurines: ["Figurines Pop", "Figurines", "Autres Figurines"],
  Goodies: [],
};

const CategoryFilter: React.FC<{ onSelectCategory: (category: string) => void }> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Catégories</h2>
      <ul>
        {Object.entries(categories).map(([category, subcategories]) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => {
                setSelectedCategory(category);
                onSelectCategory(category);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-yellow-500 text-white" : "bg-white text-gray-800 hover:bg-gray-200"}`}
            >
              {category}
            </button>
            {selectedCategory === category && subcategories.length > 0 && (
              <ul className="ml-4 mt-2">
                {subcategories.map((sub) => (
                  <li key={sub}>
                    <button onClick={() => onSelectCategory(sub)} className="text-gray-600 hover:text-blue-500">
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
