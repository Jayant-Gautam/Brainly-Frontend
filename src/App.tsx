import './App.css'
import Background from './components/Background_login_signup'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'
import Home from './Home'
import AddCard from './AddCard'
import SharedBrain from './SharedBrain'

function App() {
  return(
    
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/signup" element={Background({children: <Signup />})} />
      <Route path="/login" element={Background({children: <Login />})} />
      <Route path="/addCard" element={<AddCard/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/share/:hash" element={<SharedBrain/>} />
    </Routes>
  ) 
}

export default App


// import React from 'react';
// import Logo from './components/Logo';

// function App() {
//   return (
//     <div className="min-h-screen">
//       {/* Dark Theme Section */}
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-8">
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative z-10 text-center space-y-12">
//           <div className="space-y-8">
//             <h2 className="text-4xl font-light text-white/90 mb-8">
//               Dark Theme Logos
//             </h2>
            
//             {/* Full Logo - Different Sizes */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white/80">Full Logo</h3>
//               <div className="flex flex-col items-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <Logo size="xl" theme="dark" />
//                 <Logo size="lg" theme="dark" />
//                 <Logo size="md" theme="dark" />
//                 <Logo size="sm" theme="dark" />
//               </div>
//             </div>
            
//             {/* Icon Only */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white/80">Icon Only</h3>
//               <div className="flex items-center justify-center space-x-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <Logo variant="icon" size="xl" theme="dark" />
//                 <Logo variant="icon" size="lg" theme="dark" />
//                 <Logo variant="icon" size="md" theme="dark" />
//                 <Logo variant="icon" size="sm" theme="dark" />
//               </div>
//             </div>
            
//             {/* Text Only */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white/80">Text Only</h3>
//               <div className="flex flex-col items-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <Logo variant="text" size="xl" theme="dark" />
//                 <Logo variant="text" size="lg" theme="dark" />
//                 <Logo variant="text" size="md" theme="dark" />
//                 <Logo variant="text" size="sm" theme="dark" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Light Theme Section */}
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-8">
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative z-10 text-center space-y-12">
//           <div className="space-y-8">
//             <h2 className="text-4xl font-light text-gray-800 mb-8">
//               Light Theme Logos
//             </h2>
            
//             {/* Full Logo - Different Sizes */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-700">Full Logo</h3>
//               <div className="flex flex-col items-center space-y-4 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//                 <Logo size="xl" theme="light" />
//                 <Logo size="lg" theme="light" />
//                 <Logo size="md" theme="light" />
//                 <Logo size="sm" theme="light" />
//               </div>
//             </div>
            
//             {/* Icon Only */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-700">Icon Only</h3>
//               <div className="flex items-center justify-center space-x-6 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//                 <Logo variant="icon" size="xl" theme="light" />
//                 <Logo variant="icon" size="lg" theme="light" />
//                 <Logo variant="icon" size="md" theme="light" />
//                 <Logo variant="icon" size="sm" theme="light" />
//               </div>
//             </div>
            
//             {/* Text Only */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-700">Text Only</h3>
//               <div className="flex flex-col items-center space-y-4 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//                 <Logo variant="text" size="xl" theme="light" />
//                 <Logo variant="text" size="lg" theme="light" />
//                 <Logo variant="text" size="md" theme="light" />
//                 <Logo variant="text" size="sm" theme="light" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Usage Examples Section */}
//       <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 flex flex-col items-center justify-center p-8">
//         <div className="space-y-6">
//           <h2 className="text-4xl font-light text-gray-800 mb-8 text-center">
//             Usage Examples
//           </h2>
          
//           {/* Header Example - Dark */}
//           <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//             <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
//               <Logo size="sm" theme="dark" />
//               <nav className="flex space-x-6">
//                 <a href="#" className="text-white/70 hover:text-white transition-colors">Dashboard</a>
//                 <a href="#" className="text-white/70 hover:text-white transition-colors">Content</a>
//                 <a href="#" className="text-white/70 hover:text-white transition-colors">Share</a>
//               </nav>
//             </div>
//             <p className="text-gray-600 text-sm mt-4 text-center">Dark Header Navigation</p>
//           </div>
          
//           {/* Header Example - Light */}
//           <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//             <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//               <Logo size="sm" theme="light" />
//               <nav className="flex space-x-6">
//                 <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Content</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Share</a>
//               </nav>
//             </div>
//             <p className="text-gray-600 text-sm mt-4 text-center">Light Header Navigation</p>
//           </div>
          
//           {/* Loading Screen Example */}
//           <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//             <div className="flex flex-col items-center justify-center p-8 bg-gray-900/50 rounded-lg">
//               <Logo size="lg" theme="dark" />
//               <div className="mt-6 w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
//                 <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse w-3/4"></div>
//               </div>
//               <p className="text-white/60 text-sm mt-4">Loading your digital brain...</p>
//             </div>
//             <p className="text-gray-600 text-sm mt-4 text-center">Loading Screen</p>
//           </div>
          
//           {/* Favicon Example */}
//           <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
//             <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
//               <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
//                 <Logo variant="icon" size="sm" theme="dark" className="scale-75" />
//               </div>
//               <span className="text-gray-800">Second Brain - Organize Your Digital Content</span>
//             </div>
//             <p className="text-gray-600 text-sm mt-4 text-center">Browser Tab/Favicon</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;