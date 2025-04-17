// src/app/map/page.tsx
"use client";
import { useState } from 'react';

export default function MapPage() {
  const [selectedState, setSelectedState] = useState(null);
  
  // Sample data - in a real app, this would come from an API or database
  const playedCourses = [
    { id: 1, name: "Pebble Beach Golf Links", state: "CA", city: "Pebble Beach", playDate: "2023-05-15" },
    { id: 3, name: "Pinehurst Resort (No. 2)", state: "NC", city: "Pinehurst", playDate: "2022-09-22" },
    { id: 4, name: "TPC Sawgrass", state: "FL", city: "Ponte Vedra Beach", playDate: "2023-02-10" },
    { id: 6, name: "Whistling Straits", state: "WI", city: "Kohler", playDate: "2023-07-05" },
  ];
  
  // Count courses by state for the map visualization
  const coursesByState = playedCourses.reduce((acc, course) => {
    acc[course.state] = (acc[course.state] || 0) + 1;
    return acc;
  }, {});
  
  // Get courses for the selected state
  const coursesInSelectedState = selectedState 
    ? playedCourses.filter(course => course.state === selectedState)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Golf Journey Map</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Visualize your played courses across the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">U.S. Courses Map</h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              {/* This is a placeholder - would be replaced with an actual interactive map component */}
              <div className="text-center">
                <p className="text-gray-500 mb-4">Interactive U.S. Map Visualization</p>
                <p className="text-sm text-gray-400">In a complete implementation, this would be an SVG map of the United States with interactive states that show your played courses.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{playedCourses.length}</p>
                <p className="text-sm text-gray-600">Courses Played</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{Object.keys(coursesByState).length}</p>
                <p className="text-sm text-gray-600">States Visited</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">5</p>
                <p className="text-sm text-gray-600">Top 100 Courses</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">12</p>
                <p className="text-sm text-gray-600">States Remaining</p>
              </div>
            </div>
          </div>
          
          {/* State Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedState ? `Courses in ${selectedState}` : 'Select a State'}
            </h2>
            
            {/* State Selector (Simplified) */}
            <div className="mb-6">
              <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-1">
                Choose a state
              </label>
              <select 
                id="state-select"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                value={selectedState || ''}
                onChange={(e) => setSelectedState(e.target.value || null)}
              >
                <option value="">All States</option>
                <option value="CA">California</option>
                <option value="FL">Florida</option>
                <option value="NC">North Carolina</option>
                <option value="WI">Wisconsin</option>
              </select>
            </div>
            
            {/* Course List for Selected State */}
            {selectedState ? (
              <div>
                <p className="mb-4">
                  <span className="font-medium">Courses played: </span>
                  {coursesInSelectedState.length}
                </p>
                
                {coursesInSelectedState.length > 0 ? (
                  <ul className="space-y-3">
                    {coursesInSelectedState.map(course => (
                      <li key={course.id} className="border-b pb-2">
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-gray-600">{course.city}, {course.state}</p>
                        <p className="text-xs text-gray-500">
                          Played: {new Date(course.playDate).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 italic">No courses played in this state yet.</p>
                )}
                
                <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Add Course in {selectedState}
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>Select a state to see courses played</p>
              </div>
            )}
          </div>
        </div>
        
        {/* List of Recently Played Courses */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Recently Played Courses</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Played</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {playedCourses
                  .sort((a, b) => new Date(b.playDate).getTime() - new Date(a.playDate).getTime())
                  .map(course => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{course.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{course.city}, {course.state}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{new Date(course.playDate).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-green-600 hover:text-green-900 mr-4">View</a>
                        <a href="#" className="text-blue-600 hover:text-blue-900">Add Round</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}