"use client"

import Image from "next/image";
import { useState } from "react";


const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  // Gestion du changement d'input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation basique du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    console.log(isLogin ? "Connexion" : "Inscription", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-100">
      <div className="bg-yellow-500 shadow-lg rounded-lg overflow-hidden w-[900px] flex">
        
        {/* Image à gauche (Login) */}
        {isLogin && (
          <div className="w-1/2 hidden md:block">
            <Image
              src="/login-image.jpg" 
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Formulaire */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Connexion" : "Créer un compte"}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Nom d'utilisateur (Inscription seulement) */}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-black font-medium mb-2">Nom</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                  required 
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-black font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-black font-medium mb-2">Mot de passe</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                required 
              />
            </div>

            <button type="submit" className={`w-full py-2 rounded-lg text-white font-semibold transition 
              ${isLogin ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}>
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>
          </form>

          {/* Switch entre Connexion et Inscription */}
          <div className="mt-4 text-center">
            {isLogin ? (
              <p className="text-black">
                Pas encore de compte ?  
                <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(false)}> S'inscrire</span>
              </p>
            ) : (
              <p className="text-black">
                Déjà un compte ?  
                <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}> Se connecter</span>
              </p>
            )}
          </div>
        </div>

        {/* Image à droite (Inscription) */}
        {!isLogin && (
          <div className="w-1/2 hidden md:block">
            <Image
              src="/register-image.jpg" 
              alt="Register"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
