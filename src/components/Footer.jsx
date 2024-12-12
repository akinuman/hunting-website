import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hunting-green text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TacticalHunter</h3>
            <p>Your premier destination for hunting and tactical gear.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/gear" className="hover:text-camo-light">Hunting Gear</Link></li>
              <li><Link to="/tactical" className="hover:text-camo-light">Tactical Equipment</Link></li>
              <li><Link to="/safety" className="hover:text-camo-light">Safety Guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@tacticalhunter.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-green-700">
          <p>&copy; {currentYear} TacticalHunter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}