import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">About Us</h1>
        
        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/500x300" alt="Our Team" className="rounded-lg shadow-md"/>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, our company was born out of a passion for creating innovative solutions that make a difference. We saw a need for high-quality, user-friendly products and decided to take on the challenge. Our journey has been one of continuous learning and growth, driven by our commitment to excellence.
            </p>
            <p className="text-gray-600">
              Our mission is to empower individuals and businesses by providing them with the tools they need to succeed in a rapidly changing digital world. We believe in the power of technology to transform lives and are dedicated to making it accessible to everyone.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-500">UX/UI Designer</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About