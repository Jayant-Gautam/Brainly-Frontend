import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Brainly</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your AI-powered second brain for capturing, organizing, and connecting ideas into actionable insights.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Github className="h-5 w-5 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-5 w-5 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Mail className="h-5 w-5 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Tutorials</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Status</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 Brainly. All rights reserved. Built with intelligence in mind.</p>
        </div>
      </div>
    </footer>
  );
}