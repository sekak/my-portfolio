'use client';
import Link from 'next/link';
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
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 uppercase">
              AHMED SEKAK
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-4 uppercase">Front-End Developer</p>

            {/* Contact */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                ahmadesekak@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +212 620492072
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Beni Mellal, Morocco
              </span>
              <a
                className="underline underline-offset-2 hover:text-blue-600"
                href="https://www.linkedin.com/in/ahmed-sekak-57b055267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline underline-offset-2 hover:text-blue-600"
                href="https://github.com/sekak"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                Skills
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Node.js', 'Express.js', 'Django'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Redux - Zustand', 'React-Query'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Testing</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Vitest', 'Jest'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Firebase', 'Tailwind CSS'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Languages (Programming)</h3>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'JavaScript', 'C++', 'C', 'Shell / Terminal', 'Python'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-pink-500 pb-2">
                Soft Skills
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Teamwork</li>
                <li>Interpersonal skills</li>
                <li>Autonomy and adaptability</li>
                <li>Initiative-taking</li>
                <li>Perseverance</li>
                <li>Curiosity</li>
              </ul>
            </div>

            {/* Languages (Spoken) */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-purple-500 pb-2">
                Languages
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">French</span>
                  <span className="text-sm text-gray-500">Intermediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Arabic</span>
                  <span className="text-sm text-gray-500">Basic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                Profile
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Enthusiastic and self-motivated front-end developer with over 4 years of experience in a wide range of web technologies.
                Currently seeking a challenging front-end or full-stack developer role where I can contribute to impactful projects,
                grow with a passionate team, and continue learning new technologies.
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Front-End Developer</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      2024 - 2025
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Bookme.store — Remote, Netherlands
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Developed and maintained user interfaces using React, Next.js, and Tailwind CSS.</li>
                    <li>• Collaborated with a cross-functional team to build and improve core features.</li>
                    <li>• Wrote and maintained unit tests using Jest and React Testing Library.</li>
                    <li>• Integrated APIs and used state management tools to deliver dynamic features.</li>
                    <li>• Participated in code reviews and agile meetings (stand-ups, sprint planning).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-green-500 pb-2">
                Education
              </h2>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-green-200 dark:border-green-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      1337 Med School — Tétouan, Morocco
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    School of Development Informatics — Completed Common Core program focused on software engineering.
                    Built real-world projects under tight deadlines and peer review. Gained experience in C, C++, Shell (Bash),
                    Linux, and algorithmic problem solving. Developed skills in teamwork, adaptability, and self-learning.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-green-200 dark:border-green-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Bachelor of Science in Mathematics — Iben Sina, Beni Mellal, Morocco
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      2020
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-red-500 pb-2">
                Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pinterest Clone */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Pinterest Clone</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Full-stack Pinterest clone with responsive UI, modular components, and hover effects. Includes component testing using Vitest.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'Tailwind CSS', 'Typescript'].map((t) => (
                      <span key={t} className="px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-200 rounded text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-blue-700 dark:text-blue-300 text-sm underline"
                    href="https://github.com/sekak/pinterest-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link: github.com/sekak/pinterest-clone
                  </a>
                </div>

                {/* Booking Clone */}
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Booking Clone</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Full-stack booking platform with property listings, reservations, and authentication. Features dynamic filtering and backend integration.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['ReactJs', 'NodeJs', 'JavaScript', 'ExpressJs', 'Nodemailer', 'MongoDB', 'BcryptJS', 'Tailwind CSS', 'Firebase', 'Axios'].map((t) => (
                      <span key={t} className="px-2 py-1 bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-200 rounded text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-purple-700 dark:text-purple-300 text-sm underline"
                    href="https://github.com/sekak/booking-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link: github.com/sekak/booking-clone
                  </a>
                </div>

                {/* Admin Dashboard - Bookme.store */}
                <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 rounded-lg border border-rose-200 dark:border-rose-700 md:col-span-2">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Admin Dashboard — Bookme.store</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Responsive internal dashboard to manage bookings, stats, and content.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['ReactJs', 'NodeJs', 'JavaScript', 'Chromatic'].map((t) => (
                      <span key={t} className="px-2 py-1 bg-rose-200 dark:bg-rose-800 text-rose-900 dark:text-rose-200 rounded text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <Link
            href="/resume.pdf"
            download="Ahmed-Sekak-Resume.pdf"
            aria-label="Download PDF Resume"
          >
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"

            >

              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download PDF Resume
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;