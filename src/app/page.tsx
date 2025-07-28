import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.png";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-116px)] relative overflow-hidden">
      {/* Background decorative elements */}
    
      <div className="relative z-10 flex items-center flex-col-reverse laptop:flex-row justify-center min-h-[calc(100vh-116px)] gap-12 px-4 py-8">
        {/* Text Content */}
        <div className="flex-1 flex flex-col font-mono laptop:text-[90px] tablet:text-[70px] mobile:text-[50px] text-center laptop:text-left space-y-4">
          <div className="space-y-2">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-bold drop-shadow-sm">
              FRONT-END
            </span>
            <span className="block text-gray-900 dark:text-white font-bold drop-shadow-sm">
              AHMED
            </span>
            <span className="block bg-gradient-to-r from-red-600 to-red-400 dark:from-red-400 dark:to-red-300 bg-clip-text text-transparent font-bold drop-shadow-sm">
              DEVELOPER
            </span>
          </div>
          
          <div className="space-y-4 mt-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-lg">
              Hi there! I&apos;m Ahmed, a 23-year-old Front-end Developer passionate about creating beautiful and functional web experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center laptop:justify-start">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Image and Social Icons */}
        <div className="flex-1 flex justify-center laptop:justify-end items-center relative">
          <div className="flex laptop:flex-row flex-col items-center gap-6 justify-center">
            {/* Profile Image */}
            <div className="relative w-[300px] h-[300px] laptop:w-[400px] laptop:h-[400px] tablet:w-[350px] tablet:h-[350px] mobile:w-[250px] mobile:h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-75 animate-pulse"></div>
              <Image 
                src={profile} 
                alt="Ahmed" 
                fill 
                className="relative rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex laptop:flex-col flex-row gap-20">
              <Link 
                href="https://github.com" 
                target="_blank"
                className="group w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-600"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="group w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-600"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="group w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-600"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
