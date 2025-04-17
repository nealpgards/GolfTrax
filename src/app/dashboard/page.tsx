// src/app/dashboard/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import USMap from '../components/USMap';

export default function DashboardPage() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  // Sample data - in a real app, this would come from an API or database
  const userData = {
    name: "John Smith",
    handicap: 14.2,
    totalRounds: 42,
    coursesPlayed: 15,
    statesVisited: 8,
    recentScores: [
      { id: 1, course: "Pebble Beach Golf Links", date: "2023-05-15", score: 88, par: 72 },
      { id: 2, course: "Whistling Straits", date: "2023-07-05", score: 94, par: 72 },
      { id: 3, course: "TPC Sawgrass", date: "2023-02-10", score: 89, par: 72 },
    ],
    playedCourses: [
      { id: 1, name: "Pebble Beach Golf Links", state: "CA", city: "Pebble Beach", playDate: "2023-05-15" },
      { id: 3, name: "Pinehurst Resort (No. 2)", state: "NC", city: "Pinehurst", playDate: "2022-09-22" },
      { id: 4, name: "TPC Sawgrass", state: "FL", city: "Ponte Vedra Beach", playDate: "2023-02-10" },
      { id: 6, name: "Whistling Straits", state: "WI", city: "Kohler", playDate: "2023-07-05" },
      { id: 7, name: "Torrey Pines", state: "CA", city: "La Jolla", playDate: "2023-04-18" },
      { id: 8, name: "Kiawah Island Ocean Course", state: "SC", city: "Kiawah Island", playDate: "2022-08-12" },
    ],
    recentAchievements: [
      { id: 4, name: "Breaking 90", description: "Scored under 90 for the first time", date: "2023-04-12", icon: "🎯" },
      { id: 3, name: "Road Warrior", description: "Played in 5 different states", date: "2023-07-02", icon: "🗺️" },
    ],
  };

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {userData.name}</h1>
          <p className="mt-1 text-lg text-gray-600">Track your golf journey across America</p>
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600">{userData.handicap}</p>
            <p className="text-sm text-gray-600">Handicap</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600">{userData.totalRounds}</p>
            <p className="text-sm text-gray-600">Rounds Played</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600">{userData.coursesPlayed}</p>
            <p className="text-sm text-gray-600">Courses Played</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600">{userData.statesVisited}</p>
            <p className="text-sm text-gray-600">States Visited</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <USMap 
              playedCourses={userData.playedCourses}
              onStateClick={handleStateClick}
            />
          </div>
          
          {/* Recent Activity */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Scores</h2>
                <Link href="/profile" className="text-green-600 text-sm hover:text-green-800">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {userData.recentScores.map(score => (
                  <div key={score.id} className="border-b pb-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{score.course}</p>
                        <p className="text-xs text-gray-500">{new Date(score.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{score.score}</p>
                        <p className={`text-xs ${score.score - score.par <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {score.score - score.par <= 0 ? 'E' : '+'}{Math.abs(score.score - score.par)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Add New Score
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Achievements</h2>
                <Link href="/profile" className="text-green-600 text-sm hover:text-green-800">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {userData.recentAchievements.map(achievement => (
                  <div key={achievement.id} className="flex items-start">
                    <div className="text-3xl mr-3">{achievement.icon}</div>
                    <div>
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* New Courses to Discover */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Courses to Discover</h2>
            <Link href="/courses" className="text-green-600 hover:text-green-800">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* These would be personalized recommendations in a real app */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Course Image
              </div>
              <div className="p-4">
                <h3 className="font-medium">Augusta National Golf Club</h3>
                <p className="text-sm text-gray-600 mb-2">Augusta, GA</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Top 10 Course
                  </span>
                  <button className="text-green-600 text-sm font-medium hover:text-green-800">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Course Image
              </div>
              <div className="p-4">
                <h3 className="font-medium">Bethpage Black</h3>
                <p className="text-sm text-gray-600 mb-2">Farmingdale, NY</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    Major Championship Venue
                  </span>
                  <button className="text-green-600 text-sm font-medium hover:text-green-800">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Course Image
              </div>
              <div className="p-4">
                <h3 className="font-medium">TPC Scottsdale</h3>
                <p className="text-sm text-gray-600 mb-2">Scottsdale, AZ</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    PGA Tour Venue
                  </span>
                  <button className="text-green-600 text-sm font-medium hover:text-green-800">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-green-600 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to expand your golf journey?</h2>
          <p className="text-lg mb-6">Add more courses to your collection and earn unique badges</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/courses" className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 font-medium">
              Browse Courses
            </Link>
            <Link href="/map" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
              Explore the Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}