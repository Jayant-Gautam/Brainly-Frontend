import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  function navigateSignup(){
    navigate('/signup');
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 border border-purple-200 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Your AI-Powered Knowledge Companion
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Second Brain
              </span>{' '}
              for Everything
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Capture, organize, and connect your thoughts with AI-powered intelligence. 
              Transform scattered ideas into actionable insights with Brainly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={navigateSignup} className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-bold text-purple-600 text-lg mr-1">50K+</span>
                <span>Users</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-purple-600 text-lg mr-1">1M+</span>
                <span>Notes Created</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-purple-600 text-lg mr-1">99.9%</span>
                <span>Uptime</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-12 lg:mt-0">
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  {/* Mock interface */}
                  <div className="flex items-center space-x-2 pb-4 border-b border-gray-100">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded w-1/2 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded w-2/3 animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="h-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-100 animate-pulse"></div>
                    <div className="h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}