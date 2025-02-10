

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch, FaQuestionCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-dark-700 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Liens à gauche */}
        <div className="flex space-x-6">
          <Link href="/" className="text-yellow-500 hover:text-white font-medium">Accueil</Link>
          <Link href="/produits" className="text-yellow-500 hover:text-white font-medium">Produits</Link>
          <Link href="/about" className="text-yellow-500 hover:text-white font-medium">About</Link>
          <Link href="/contact" className="text-yellow-500 hover:text-white font-medium">Contact</Link>
        </div>

        {/* Logo centré */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover cursor-pointer"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Icônes à droite */}
        <div className="flex space-x-5">
          <Link href="/help">
            <FaQuestionCircle className="text-yellow-500 hover:text-white text-2xl cursor-pointer" />
          </Link>
          <Link href="/auth">
            <FaUser className="text-yellow-500 hover:text-white text-2xl cursor-pointer"/>
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="text-yellow-500 hover:text-white text-2xl cursor-pointer"/>
          </Link>
          <Link href="/search">
            <FaSearch className="text-yellow-500 hover:text-white text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;