// src/app/courses/[id]/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

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

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseData = getCourseData(params.id);
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
                <div className="md:col-span-2">
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