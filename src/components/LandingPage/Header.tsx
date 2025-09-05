import { Brain, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {

  const navigate = useNavigate();

  function navigateSignin(){
      navigate("/login");
  }
  function navigateSignup(){
      navigate("/signup");
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Brainly
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={navigateSignin} className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Sign In
            </button>
            <button onClick={navigateSignup} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <button onClick={navigateSignin} className="w-full text-center text-gray-600 hover:text-purple-600 transition-colors duration-200 py-2">
                Sign In
              </button>
              <button onClick={navigateSignup} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}