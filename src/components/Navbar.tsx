
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Circle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-publicnext-blue flex items-center">
            <img 
	      src={`${import.meta.env.BASE_URL}assets/images/logo.png`}
              alt="ElectReps Logo" 
              className="h-8 mr-2"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/120x40?text=ElectReps';
              }} 
            />
            ElectReps
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-publicnext-blue hover:text-publicnext-purple transition-colors font-medium">
            About
          </a>
          <a href="#team" className="text-publicnext-blue hover:text-publicnext-purple transition-colors font-medium">
            Team
          </a>
          <a href="#services" className="text-publicnext-blue hover:text-publicnext-purple transition-colors font-medium">
            Services
          </a>
          <a href="#featured" className="text-publicnext-blue hover:text-publicnext-purple transition-colors font-medium">
            Featured In
          </a>
          <a href="#work" className="text-publicnext-blue hover:text-publicnext-purple transition-colors font-medium">
            Work
          </a>
          <Button 
            className="bg-publicnext-purple hover:bg-publicnext-lightpurple text-white"
            onClick={() => {
              document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? 
              <X className="h-6 w-6 text-publicnext-blue" /> : 
              <Menu className="h-6 w-6 text-publicnext-blue" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-publicnext-blue hover:text-publicnext-purple transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#team" 
              className="text-publicnext-blue hover:text-publicnext-purple transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a 
              href="#services" 
              className="text-publicnext-blue hover:text-publicnext-purple transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#featured" 
              className="text-publicnext-blue hover:text-publicnext-purple transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Featured In
            </a>
            <a 
              href="#work" 
              className="text-publicnext-blue hover:text-publicnext-purple transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Work
            </a>
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-publicnext-purple hover:bg-publicnext-lightpurple text-white"
                onClick={() => {
                  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  toggleMenu();
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
