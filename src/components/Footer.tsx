
import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-publicnext-blue text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ElectReps</h3>
            <p className="text-gray-300 mb-4">
              A leading technology platform specializing in web and app development, cloud solutions, 
              and high-performance enterprise software.
            </p>
           </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><HashLink smooth to="#work" className="hover:text-publicnext-purple transition-colors">Web Development</HashLink></li>
              <li><HashLink smooth to="#work" className="hover:text-publicnext-purple transition-colors">Mobile App Development</HashLink></li>
              <li><HashLink smooth to="#work" className="hover:text-publicnext-purple transition-colors">Cloud Solutions</HashLink></li>
              <li><HashLink smooth to="#work" className="hover:text-publicnext-purple transition-colors">Enterprise Software</HashLink></li>
              <li><HashLink smooth to="#work" className="hover:text-publicnext-purple transition-colors">AI/ML Solutions</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><HashLink smooth to="#about" className="hover:text-publicnext-purple transition-colors">About Us</HashLink></li>
              <li><HashLink smooth to="#team" className="hover:text-publicnext-purple transition-colors">Our Team</HashLink></li>
              <li><HashLink smooth to="#footer" className="hover:text-publicnext-purple transition-colors">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-publicnext-purple" />
                <span>help@electreps.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-publicnext-purple" />
                <span>+91 99019 84062</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ElectReps. All rights reserved.
            </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
