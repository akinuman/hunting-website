import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="TacticalHunter" className="h-12" />
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/gear" className="text-gunmetal hover:text-accent-gold transition-colors">Gear</Link></li>
            <li><Link to="/accessories" className="text-gunmetal hover:text-accent-gold transition-colors">Accessories</Link></li>
            <li><Link to="/tactical" className="text-gunmetal hover:text-accent-gold transition-colors">Tactical</Link></li>
            <li><Link to="/ammunition" className="text-gunmetal hover:text-accent-gold transition-colors">Ammunition</Link></li>
            <li><Link to="/safety" className="text-gunmetal hover:text-accent-gold transition-colors">Safety</Link></li>
            <li><Link to="/contact" className="text-gunmetal hover:text-accent-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}