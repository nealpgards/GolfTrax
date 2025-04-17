"use client";
import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('stats');
  
  // Sample user data - in a real app, this would come from an API or database
  const userData = {
    name: "John Smith",
    email: "john.smith@example.com",
    joined: "2022-11-15",
    handicap: 14.2,
    totalRounds: 42,
    coursesPlayed: 15,
    statesVisited: 8,
    achievements: [
      { id: 1, name: "First Round", description: "Logged your first round", date: "2022-11-20", icon: "🏌️" },
      { id: 2, name: "Course Collector", description: "Played 10 different courses", date: "2023-05-18", icon: "🏆" },
      { id: 3, name: "Road Warrior", description: "Played in 5 different states", date: "2023-07-02", icon: "🗺️" },
      { id: 4, name: "Breaking 90", description: "Scored under 90 for the first time", date: "2023-04-12", icon: "🎯" },
    ],
    recentScores: [
      { id: 1, course: "Pebble Beach Golf Links", date: "2023-05-15", score: 88, par: 72 },
      { id: 2, course: "Whistling Straits", date: "2023-07-05", score: 94, par: 72 },
      { id: 3, course: "TPC Sawgrass", date: "2023-02-10", score: 89, par: 72 },
      { id: 4, course: "Pinehurst Resort (No. 2)", date: "2022-09-22", score: 92, par: 72 },
    ],
    badgeCollection: [
      { id: 1, course: "Pebble Beach Golf Links", state: "CA", date: "2023-05-15", image: "/badges/pebble-beach.jpg" },
      { id: 2, course: "Pinehurst Resort (No. 2)", state: "NC", date: "2022-09-22", image: "/badges/pinehurst.jpg" },
      { id: 3, course: "TPC Sawgrass", state: "FL", date: "2023-02-10", image: "/badges/tpc-sawgrass.jpg" },
      { id: 4, course: "Whistling Straits", state: "WI", date: "2023-07-05", image: "/badges/whistling-straits.jpg" },
    ],
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-green-600 h-32"></div>
          <div className="px-6 py-4 flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-12">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl mb-4 sm:mb-0">
              {userData.name.charAt(0)}
            </div>
            <div className="sm:ml-6 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600">Member since {new Date(userData.joined).toLocaleDateString()}</p>
            </div>
            <div className="sm:ml-auto mt-4 sm:mt-0">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Profile Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex">
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'stats' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('stats')}
              >
                Stats & Achievements
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'scores' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('scores')}
              >
                Recent Scores
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'badges' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('badges')}
              >
                Course Badges
              </button>
            </nav>
          </div>
          
          {/* Stats & Achievements Tab */}
          {activeTab === 'stats' && (
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">{userData.handicap}</p>
                  <p className="text-sm text-gray-600">Handicap</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">{userData.totalRounds}</p>
                  <p className="text-sm text-gray-600">Rounds Played</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">{userData.coursesPlayed}</p>
                  <p className="text-sm text-gray-600">Courses Played</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">{userData.statesVisited}</p>
                  <p className="text-sm text-gray-600">States Visited</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.achievements.map(achievement => (
                  <div key={achievement.id} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl mr-4">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium">{achievement.name}</h3>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                      <p className="text-gray-500 text-xs mt-1">Earned: {new Date(achievement.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Recent Scores Tab */}
          {activeTab === 'scores' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Scores</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                  Add New Score
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">+/-</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userData.recentScores.map(scoreCard => (
                      <tr key={scoreCard.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{scoreCard.course}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-500">{new Date(scoreCard.date).toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-900">{scoreCard.score}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={scoreCard.score - scoreCard.par <= 0 ? "text-green-600" : "text-red-600"}>
                            {scoreCard.score - scoreCard.par <= 0 ? 'E' : '+'}{Math.abs(scoreCard.score - scoreCard.par)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-green-600 hover:text-green-900">View Details</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <a href="#" className="text-green-600 hover:text-green-800 text-sm font-medium">
                  View All Scores →
                </a>
              </div>
            </div>
          )}
          
          {/* Course Badges Tab */}
          {activeTab === 'badges' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Course Badge Collection</h2>
                <p className="text-gray-600 text-sm">
                  {userData.badgeCollection.length} badges collected
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {userData.badgeCollection.map(badge => (
                  <div key={badge.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      {/* This would be the badge image in a real app */}
                      <div className="text-2xl">{badge.course.charAt(0)}</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm truncate">{badge.course}</h3>
                      <p className="text-xs text-gray-600">{badge.state}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(badge.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="font-medium mb-2">Want to add more badges?</h3>
                <p className="text-gray-600 text-sm mb-4">Play more courses to grow your collection</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                  Explore New Courses
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}