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
              I love coding and working with computers. I&apos;ve always been interested in development, engineering and tons more.
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
                  <span><strong>Location:</strong> Kenitra, Morocco</span>
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
                  <Link
                    href="https://github.com/sekak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ahmed-sekak-57b055267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.197.36-.42.84-.575 1.223a18.27 18.27 0 0 0-7.966 0A12.3 12.3 0 0 0 7.442 3 19.736 19.736 0 0 0 3.68 4.369C1.207 8.072.523 11.66.77 15.206a19.97 19.97 0 0 0 6.03 3.06c.489-.67.926-1.38 1.302-2.122a12.84 12.84 0 0 1-1.995-.77c.167-.121.33-.248.487-.38a13.4 13.4 0 0 0 10.615 0c.158.132.321.26.488.38-.653.312-1.33.565-2.006.77.376.742.813 1.452 1.302 2.122a19.97 19.97 0 0 0 6.03-3.06c.263-3.694-.483-7.256-2.173-10.837zM9.318 13.63c-.988 0-1.793-.92-1.793-2.053 0-1.132.8-2.053 1.793-2.053.993 0 1.798.921 1.793 2.053 0 1.132-.8 2.053-1.793 2.053zm5.364 0c-.988 0-1.793-.92-1.793-2.053 0-1.132.8-2.053 1.793-2.053.993 0 1.798.921 1.793 2.053 0 1.132-.8 2.053-1.793 2.053z" />
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
                  🚀 X-Clone (Main Focus)
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <span className="font-semibold">Authentication & Profiles:</span> Secure sign-in (email/OAuth), profile pages with avatar, bio, and account settings.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <span className="font-semibold">Posts & Media:</span> Create posts (280 chars), upload images/GIFs, parse hashtags and mentions, and show link previews.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <div>
                      <span className="font-semibold">Real‑time Feed & Interactions:</span> Live timeline updates, like/repost/reply actions, and in‑app notifications.
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="bg-third rounded-2xl p-6 border-l-4 border-blue-500">
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
              </div> */}
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
            {['Rust', 'VueJs', 'Kubernetes', 'GraphQL', 'TypeScript Advanced'].map((goal, index) => (
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
                {['TypeScript', 'JavaScript', 'C', 'HTML5', 'CSS3'].map((lang, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl text-white text-center font-medium hover:scale-105 transition-transform duration-200 shadow-md">
                      {lang}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Unit testing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-500 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Unit Testing
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {['Jest', 'Vitest'].map((testingTool, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 p-3 rounded-xl text-white text-center font-medium hover:scale-105 transition-transform duration-200 shadow-md">
                      {testingTool}
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
                {['Node.js', 'React', 'Next.js', 'Express.js', 'Sass', 'Bootstrap', 'Tailwind CSS'].map((framework, index) => (
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
                  'Docker', 'Discord', 'MySQL', 'MongoDB', 'Shell CMD', 'Nginx',
                  'Nginx', 'Figma', 'Postman', 'Insomnia', 'Heroku', 'Vercel',  'Shadcn UI'
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
