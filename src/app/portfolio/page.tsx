import Link from "next/link";
import React from "react";

function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Hero Section */}
      <div className="grid lg:grid-cols-3 gap-6 font-mono">
        <div className="lg:col-span-2 bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HELLO, I AM AHMED!
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              I love coding and working with computers. I&apos;ve always been interested in robots, engineering and tons more. 
              I work well with others and have good communication skills. I also am very good at problem-solving. 
              I enjoy programming and working with computers in general. I am always eager to learn new things and 
              I tend to be a fast learner. I am always willing to do projects, if you are interested feel free to 
              contact me via email, phone, or discord.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-3 inline-block">
                My Info
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-3 text-base">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Name:</strong> Ahmed Sekak</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span><strong>Age:</strong> 23</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span><strong>Location:</strong> Beni Mellal, Morocco</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span><strong>Email:</strong> ahmadesekak@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <span><strong>Phone:</strong> (212) 620492072</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                <div className="flex justify-center space-x-6">
                  <Link href="/" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </Link>
                  <Link href="/" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </Link>
                  <Link href="/" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors duration-200">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests and Projects Section */}
      <div className="grid lg:grid-cols-3 gap-6 font-mono">
        <div className="bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-3 inline-block">
                My Interests
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['Computers', 'Web applications', 'Coding', 'Video games', 'Gym', 'Traveling'].map((interest, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-third rounded-xl hover:bg-opacity-80 transition-all duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-base font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                My Current Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-third rounded-2xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  🚀 Salmon Hosting (Main Focus)
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Feature 1: Description
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Feature 2: Description
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Feature 3: Description
                  </li>
                </ul>
              </div>
              
              <div className="bg-third rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  💼 Side Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Custom Minecraft Cape Client Cloaks+',
                    'Trello Webhook Discord Bot',
                    'Nft project Super-U NFT',
                    'Java Minecraft Plugin Development',
                    'Freelancing (Web Development & System Administrator) for Senior Studios'
                  ].map((project, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span className="text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 font-mono">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              My Goals
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-4"></div>
            <p className="text-lg text-foreground">
              In 2025 I want to learn more and expand my skills. I hope to learn some of these things.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {['Storybook', 'GraphQL', 'TypeScript Advanced'].map((goal, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl text-white hover:scale-105 transition-transform duration-200 shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="font-semibold text-lg">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Knowledge Section */}
      <div className="bg-secondary text-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 font-mono">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              My Knowledge
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4"></div>
            <p className="text-lg text-foreground">
              These are the skills and technologies that I use regularly in my development work.
            </p>
          </div>

          <div className="space-y-8">
            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-600 flex items-center gap-2">
                <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
                {['TypeScript', 'JavaScript', 'PHP', 'Java', 'HTML5', 'CSS3', 'Python'].map((lang, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl text-white text-center font-medium hover:scale-105 transition-transform duration-200 shadow-md">
                      {lang}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {['Node.js', 'Laravel', 'React', 'Next.js', 'Sass', 'Bootstrap', 'Tailwind CSS', 'Vue.js', 'Blade'].map((framework, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-white text-center font-medium hover:scale-105 transition-transform duration-200 shadow-md">
                      {framework}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {[
                  'Windows', 'Linux', 'Ubuntu', 'Github', 'Visual Studio Code', 'IntelliJ IDEA',
                  'Docker', 'Discord', 'MySQL', 'MongoDB', 'Kubernetes', 'Nginx',
                  'Apache', 'Adobe Photoshop', 'Figma', 'Amazon Web Services', 'Pterodactyl Panel'
                ].map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white text-center font-medium hover:scale-105 transition-transform duration-200 shadow-md text-sm">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
