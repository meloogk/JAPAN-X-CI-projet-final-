import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-yellow-600 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/produits" className="hover:text-white">Produits</Link></li>
              <li><Link href="/Promotions" className="hover:text-white">Promotions</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/shonen" className="hover:text-white">Shonen</Link></li>
              <li><Link href="/categories/shojo" className="hover:text-white">Shojo</Link></li>
              <li><Link href="/categories/seinen" className="hover:text-white">Seinen</Link></li>
              <li><Link href="/merchandising" className="hover:text-white">Merchandising</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">À propos</Link></li>
              <li><Link href="/conditions" className="hover:text-white">Conditions générales</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer ">
            <FaFacebook className="text-2xl hover:text-blue-400 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-500 cursor-pointer" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-gray-400 cursor-pointer" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MangaShop - Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
