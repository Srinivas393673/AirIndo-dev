import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-card">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-air rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">✈</span>
            </div>
            <span className="text-2xl font-display font-bold text-primary-900">Air Indo</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Flights</a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Hotels</a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Trains</a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Bus</a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">Support</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="btn-outline text-sm">Login</button>
            <button className="btn-accent text-sm">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
