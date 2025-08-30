import React from 'react';
import { Brain, Zap, Network, Shield, Search, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Organization',
    description: 'Smart categorization and tagging that learns from your patterns to keep your knowledge perfectly organized.',
  },
  {
    icon: Network,
    title: 'Connected Thinking',
    description: 'Discover hidden connections between your notes and ideas with our intelligent linking system.',
  },
  {
    icon: Search,
    title: 'Instant Search',
    description: 'Find any piece of information in seconds with our powerful semantic search engine.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Insights',
    description: 'Get AI-generated insights and suggestions based on your knowledge patterns and goals.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Capture thoughts instantly with our blazing-fast interface and real-time synchronization.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your thoughts are encrypted and protected with enterprise-grade security measures.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Supercharge Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Thinking
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Brainly the ultimate companion for your intellectual journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}