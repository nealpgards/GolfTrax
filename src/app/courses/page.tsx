// src/app/courses/page.tsx
export default function CoursesPage() {
    // Sample course data - in a real app, this would come from an API or database
    const courses = [
      {
        id: 1,
        name: "Pebble Beach Golf Links",
        location: "Pebble Beach, CA",
        image: "/images/courses/pebble-beach.jpg",
        played: true,
        dateLastPlayed: "2023-05-15",
        bestScore: 88,
      },
      {
        id: 2,
        name: "Augusta National Golf Club",
        location: "Augusta, GA",
        image: "/images/courses/augusta.jpg",
        played: false,
        dateLastPlayed: null,
        bestScore: null,
      },
      {
        id: 3,
        name: "Pinehurst Resort (No. 2)",
        location: "Pinehurst, NC",
        image: "/images/courses/pinehurst.jpg",
        played: true,
        dateLastPlayed: "2022-09-22",
        bestScore: 92,
      },
      {
        id: 4,
        name: "TPC Sawgrass",
        location: "Ponte Vedra Beach, FL",
        image: "/images/courses/tpc-sawgrass.jpg",
        played: true,
        dateLastPlayed: "2023-02-10",
        bestScore: 89,
      },
      {
        id: 5,
        name: "Bethpage Black",
        location: "Farmingdale, NY",
        image: "/images/courses/bethpage.jpg",
        played: false,
        dateLastPlayed: null,
        bestScore: null,
      },
      {
        id: 6,
        name: "Whistling Straits",
        location: "Kohler, WI",
        image: "/images/courses/whistling-straits.jpg",
        played: true,
        dateLastPlayed: "2023-07-05",
        bestScore: 94,
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Golf Courses</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Track your journey across America's finest golf courses
            </p>
          </div>
  
          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md mr-2">
                All Courses
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md mr-2">
                Played
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md">
                Wishlist
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search courses..."
                className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
              />
            </div>
          </div>
  
          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  {/* Course Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Golf Course Image
                  </div>
                  {course.played && (
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                      Played
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.location}</p>
                  
                  {course.played ? (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Played:</span>
                        <span>{new Date(course.dateLastPlayed).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Best Score:</span>
                        <span>{course.bestScore}</span>
                      </div>
                      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                        Add Round
                      </button>
                    </div>
                  ) : (
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                      Add to Played
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
  
          {/* Add New Course Button */}
          <div className="mt-12 text-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700">
              Add New Course
            </button>
          </div>
        </div>
      </div>
    );
  }