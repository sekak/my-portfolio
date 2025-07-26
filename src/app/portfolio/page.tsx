import React from 'react'

function Portfolio() {
  return (
    <div>
      <div className='flex space-x-4 mt-4'>
        <div className='flex-2 w-[300px] bg-gray-200 rounded-lg flex items-center justify-center'>
          <div className='p-14 font-mono space-y-4 text-xl'>
            <h2 className='font-bold'>HELLO, I AM MAX!</h2>
            <p >I love coding and working with computers. I've always been interested in robots, engineering and tons more. I work well with others and have good communication skills. I also am very good at problem-solving. I enjoy programming and working with computers in general. I am always eager to learn new things and I tend to be a fast learner. I am always willing to do projects, if you are interested feel free to contact me via email, phone, or discord.</p>
          </div>          
        </div>
        <div className='flex-1 w-[300px] bg-gray-200 rounded-lg flex items-center justify-center'>
          <div className='p-14 font-mono space-y-4 text-xl'>
            <h2 className='text-center border-b border-black'>My Info</h2>
            <ul className='pl-4 list-none-'>
              <li>Name: Max</li>
              <li>Age: 23</li>
              <li>Location: New York</li>
              <li>Email: max@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Discord: Max#1234</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
