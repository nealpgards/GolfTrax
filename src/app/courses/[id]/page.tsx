"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

// This would normally be fetched from an API based on the course ID
const getCourseData = (id: string) => {
  return {
    id: 1,
    name: "Pebble Beach Golf Links",
    location: "Pebble Beach, CA",
    address: "1700 17-Mile Drive, Pebble Beach, CA 93953",
    par: 72,
    yardage: 7075,
    established: 1919,
    designer: "Jack Neville and Douglas Grant",
    type: "Public/Resort",
    website: "https://www.pebblebeach.com",
    description: "Pebble Beach Golf Links is one of the most famous golf courses in the world, known for its stunning coastal views along the Monterey Peninsula. It has hosted multiple U.S. Open Championships and is consistently ranked among the top courses in the world.",
    image: "/images/courses/pebble-beach.jpg",
    badge: "/badges/pebble-beach.jpg",
    played: true,
    playHistory: [
      { id: 1, date: "2023-05-15", score: 88, notes: "Beautiful day, struggled on the back nine" },
      { id: 2, date: "2022-06-20", score: 91, notes: "Windy conditions made it challenging" },
    ],
    holeInfo: [
      { number: 1, par: 4, yardage: 380, handicap: 8 },
      { number: 2, par: 5, yardage: 502, handicap: 14 },
      { number: 3, par: 4, yardage: 390, handicap: 12 },
      { number: 4, par: 4, yardage: 331, handicap: 16 },
      { number: 5, par: 3, yardage: 195, handicap: 10 },
      { number: 6, par: 5, yardage: 513, handicap: 6 },
      { number: 7, par: 3, yardage: 106, handicap: 18 },
      { number: 8, par: 4, yardage: 428, handicap: 4 },
      { number: 9, par: 4, yardage: 481, handicap: 2 },
      { number: 10, par: 4, yardage: 446, handicap: 1 },
      { number: 11, par: 4, yardage: 390, handicap: 11 },
      { number: 12, par: 3, yardage: 202, handicap: 9 },
      { number: 13, par: 4, yardage: 445, handicap: 3 },
      { number: 14, par: 5, yardage: 580, handicap: 7 },
      { number: 15, par: 4, yardage: 397, handicap: 13 },
      { number: 16, par: 4, yardage: 403, handicap: 15 },
      { number: 17, par: 3, yardage: 178, handicap: 17 },
      { number: 18, par: 5, yardage: 543, handicap: 5 },
    ],
  };
};

export default function CourseDetailPage({ params }: { params: Params }) {
  const courseId = params.id as string;
  const courseData = getCourseData(courseId);
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/courses" className="hover:text-gray-700">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{courseData.name}</span>
          </nav>
        </div>
        
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-48 md:h-64 bg-gray-200">
            {/* Course Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Course Image
            </div>
            
            {courseData.played && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-md shadow-md">
                Played
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{courseData.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{courseData.location}</p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Par {courseData.par}
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {courseData.yardage} Yards
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {courseData.type}
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Est. {courseData.established}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 space-x-3">
                {courseData.played ? (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    Add Round
                  </button>
                ) : (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add to Played
                  </button>
                )}
                <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              <button 
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'scorecard' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('scorecard')}
              >
                Scorecard
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'history' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('history')}
              >
                Play History
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'badge' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('badge')}
              >
                Course Badge
              </button>
            </nav>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 order-first md:order-none">
                  <h2 className="text-xl font-semibold mb-4">About the Course</h2>
                  <p className="text-gray-700 mb-6">
                    {courseData.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Course Details</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><span className="font-medium">Designer:</span> {courseData.designer}</li>
                        <li><span className="font-medium">Established:</span> {courseData.established}</li>
                        <li><span className="font-medium">Type:</span> {courseData.type}</li>
                        <li><span className="font-medium">Par:</span> {courseData.par}</li>
                        <li><span className="font-medium">Yardage:</span> {courseData.yardage}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                      <address className="not-italic text-gray-700 mb-4">
                        {courseData.address}
                      </address>
                      
                      <h3 className="font-medium text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-700 mb-1">
                        <a href={courseData.website} className="text-green-600 hover:text-green-800" target="_blank" rel="noopener noreferrer">
                          Official Website
                        </a>
                      </p>
                      
                      {/* Map Placeholder */}
                      <div className="mt-4 bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-400">
                        Location Map
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-4">Weather Forecast</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm">Weather information would be integrated here from a third-party API</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-4">Personal Stats</h3>
                    
                    {courseData.played ? (
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Times Played:</span>
                          <span className="font-medium">{courseData.playHistory.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Best Score:</span>
                          <span className="font-medium">{Math.min(...courseData.playHistory.map(h => h.score))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Last Played:</span>
                          <span className="font-medium">{new Date(courseData.playHistory[0].date).toLocaleDateString()}</span>
                        </div>
                        
                        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                          Add New Round
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-gray-600 mb-4">You have not played this course yet</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                          Add to Played
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-4">Similar Courses</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="text-green-600 hover:text-green-800">Spyglass Hill Golf Course</a>
                        <p className="text-xs text-gray-500">Pebble Beach, CA</p>
                      </li>
                      <li>
                        <a href="#" className="text-green-600 hover:text-green-800">Spanish Bay Golf Links</a>
                        <p className="text-xs text-gray-500">Pebble Beach, CA</p>
                      </li>
                      <li>
                        <a href="#" className="text-green-600 hover:text-green-800">Torrey Pines Golf Course</a>
                        <p className="text-xs text-gray-500">La Jolla, CA</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Scorecard Tab */}
          {activeTab === 'scorecard' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Course Scorecard</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hole</th>
                      {courseData.holeInfo.slice(0, 9).map(hole => (
                        <th key={hole.number} className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {hole.number}
                        </th>
                      ))}
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Out</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Par</td>
                      {courseData.holeInfo.slice(0, 9).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.par}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.slice(0, 9).reduce((sum, hole) => sum + hole.par, 0)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Yards</td>
                      {courseData.holeInfo.slice(0, 9).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.yardage}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.slice(0, 9).reduce((sum, hole) => sum + hole.yardage, 0)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Handicap</td>
                      {courseData.holeInfo.slice(0, 9).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.handicap}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hole</th>
                      {courseData.holeInfo.slice(9, 18).map(hole => (
                        <th key={hole.number} className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {hole.number}
                        </th>
                      ))}
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">In</th>
                      <th className="px-2 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Par</td>
                      {courseData.holeInfo.slice(9, 18).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.par}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.slice(9, 18).reduce((sum, hole) => sum + hole.par, 0)}
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.reduce((sum, hole) => sum + hole.par, 0)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Yards</td>
                      {courseData.holeInfo.slice(9, 18).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.yardage}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.slice(9, 18).reduce((sum, hole) => sum + hole.yardage, 0)}
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {courseData.holeInfo.reduce((sum, hole) => sum + hole.yardage, 0)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Handicap</td>
                      {courseData.holeInfo.slice(9, 18).map(hole => (
                        <td key={hole.number} className="px-2 py-3 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.handicap}
                        </td>
                      ))}
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        -
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Add Round with This Scorecard
                </button>
              </div>
            </div>
          )}
          
          {/* Play History Tab */}
          {activeTab === 'history' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Play History</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                  Add New Round
                </button>
              </div>
              
              {courseData.playHistory.length > 0 ? (
                <div className="space-y-6">
                  {courseData.playHistory.map(round => (
                    <div key={round.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <p className="font-medium text-lg">{new Date(round.date).toLocaleDateString()}</p>
                          <p className="text-gray-600">Score: <span className="font-medium">{round.score}</span> ({round.score - courseData.par > 0 ? '+' : ''}{round.score - courseData.par})</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button className="text-green-600 hover:text-green-800 mr-4">View Details</button>
                          <button className="text-red-600 hover:text-red-800">Delete</button>
                        </div>
                      </div>
                      {round.notes && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-700"><span className="font-medium">Notes:</span> {round.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">You have not played this course yet</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add First Round
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Course Badge Tab */}
          {activeTab === 'badge' && (
            <div className="p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-6">Course Badge</h2>
                
                {courseData.played ? (
                  <div>
                    <div className="inline-block bg-gray-100 rounded-full p-4 mb-6">
                      {/* This would be the badge image in a real app */}
                      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                        {courseData.name.charAt(0)}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2">{courseData.name}</h3>
                    <p className="text-gray-600 mb-6">{courseData.location}</p>
                    
                    <div className="max-w-md mx-auto bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-700">
                        You earned this badge on {new Date(courseData.playHistory[0].date).toLocaleDateString()} by playing a round at {courseData.name}.
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Share Badge
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Download Badge
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="inline-block bg-gray-100 rounded-full p-4 mb-6 opacity-50">
                      {/* Placeholder for unearned badge */}
                      <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2">Badge Locked</h3>
                    <p className="text-gray-600 mb-6">Play a round at this course to earn this badge</p>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Add Round to Earn Badge
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}