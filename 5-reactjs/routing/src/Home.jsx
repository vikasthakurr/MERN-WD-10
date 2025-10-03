import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Welcome to Our Awesome Website</h1>
          <p className="mt-4 text-xl text-gray-600">Discover amazing things and join our community.</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Lightning Fast</h3>
            <p className="mt-2 text-gray-600">Our service is optimized for speed and performance, ensuring a seamless experience.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Secure & Reliable</h3>
            <p className="mt-2 text-gray-600">Your data is safe with us. We prioritize security and reliability above all else.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
            <p className="mt-2 text-gray-600">Our team is here to help you around the clock. Contact us anytime you need assistance.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home