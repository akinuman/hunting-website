import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-hunting-green text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">TacticalHunter</Link>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/gear" className="hover:text-camo-light transition-colors">Gear</Link></li>
            <li><Link to="/accessories" className="hover:text-camo-light transition-colors">Accessories</Link></li>
            <li><Link to="/tactical" className="hover:text-camo-light transition-colors">Tactical</Link></li>
            <li><Link to="/safety" className="hover:text-camo-light transition-colors">Safety</Link></li>
            <li><Link to="/contact" className="hover:text-camo-light transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}