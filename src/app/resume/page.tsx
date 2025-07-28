import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen py-8 px-4">
      {/* Background decorative elements */}
      <div className="absolute "></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              Ahmed Mohamed
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Front-End Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                ahmed@example.com
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Cairo, Egypt
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +20 123 456 789
              </span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Styling</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Tailwind CSS', 'Sass', 'Material-UI', 'Styled Components'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Figma', 'Webpack'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-purple-500 pb-2">
                Languages
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Arabic</span>
                  <span className="text-sm text-gray-500">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-sm text-gray-500">Fluent</span>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-green-500 pb-2">
                Certifications
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">React Developer</h3>
                  <p className="text-sm text-gray-500">Meta • 2024</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">JavaScript Algorithms</h3>
                  <p className="text-sm text-gray-500">freeCodeCamp • 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate and detail-oriented Front-End Developer with 3+ years of experience creating responsive, 
                user-friendly web applications. Specialized in React.js and Next.js ecosystems with a strong focus 
                on modern UI/UX design principles. Committed to writing clean, maintainable code and staying 
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>

            {/* Work Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-purple-500 pb-2">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Frontend Developer</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2023 - Present</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">TechCorp Solutions</p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Led development of responsive web applications using React.js and Next.js</li>
                    <li>• Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                    <li>• Optimized application performance, achieving 40% faster load times</li>
                    <li>• Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Developer</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2022 - 2023</span>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Digital Agency Inc.</p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Developed and maintained multiple client websites using modern frameworks</li>
                    <li>• Implemented responsive designs and ensured cross-browser compatibility</li>
                    <li>• Worked closely with backend developers to integrate APIs</li>
                    <li>• Participated in agile development processes and daily standups</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-green-200 dark:border-green-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Junior Frontend Developer</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2021 - 2022</span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-2">StartupHub</p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Built interactive user interfaces using React.js and JavaScript</li>
                    <li>• Collaborated with design team to translate mockups into functional components</li>
                    <li>• Gained experience with version control systems and team collaboration</li>
                    <li>• Contributed to improving code quality and development workflows</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-green-500 pb-2">
                Education
              </h2>
              <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor of Computer Science</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">2018 - 2022</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Cairo University</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Graduated with honors • GPA: 3.8/4.0 • Relevant coursework: Web Development, Software Engineering, Database Systems
                </p>
              </div>
            </div>

            {/* Key Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-red-500 pb-2">
                Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Full-featured online store with cart, payments, and admin panel
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded text-xs">Next.js</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Task Management App</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Collaborative project management tool with real-time updates
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded text-xs">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              Download PDF Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
