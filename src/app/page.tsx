// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/golf-course-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">GolfTrax</h1>
          <p className="text-xl text-white mb-8">Track your golf journey across America</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
            Start Tracking
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Track Your Golf Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Map Your Courses</h3>
            <p>Visualize your golf journey across the U.S. with an interactive map showing every course you've played.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">🏌️</div>
            <h3 className="text-xl font-semibold mb-2">Track Your Scores</h3>
            <p>Log your rounds with detailed scorecards, stats, and notes to track your improvement over time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Collect Course Badges</h3>
            <p>Earn unique badges for each course you play, creating a virtual collection of your golfing memories.</p>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Your Golf Journey Across America</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">Interactive U.S. Map Preview</p>
          </div>
          <p className="text-center mt-4 text-gray-600">Track all the courses you've played across the United States</p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p>Sign up and set up your golfer profile</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Add Courses</h3>
            <p>Log the courses you've played</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Track Scores</h3>
            <p>Record your rounds and performance</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">4</div>
            <h3 className="text-xl font-semibold mb-2">Earn Badges</h3>
            <p>Collect unique badges for each course</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Golf Journey?</h2>
          <p className="text-xl mb-8">Join thousands of golfers tracking their progress across America</p>
          <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  );
}