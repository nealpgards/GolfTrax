// src/app/components/USMap.tsx
"use client";
import { useState } from 'react';

interface CourseData {
  id: number;
  name: string;
  state: string;
  city: string;
  playDate: string;
}

interface USMapProps {
  playedCourses: CourseData[];
  onStateClick: (state: string) => void;
}

export default function USMap({ playedCourses, onStateClick }: USMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  // Count courses by state for the map visualization
  const coursesByState = playedCourses.reduce((acc: {[key: string]: number}, course) => {
    acc[course.state] = (acc[course.state] || 0) + 1;
    return acc;
  }, {});
  
  // Get color intensity based on number of courses played in state
  const getStateColor = (stateCode: string) => {
    if (!coursesByState[stateCode]) return "#e5e7eb"; // Default gray for states with no courses
    
    // Find the max courses in any state to normalize colors
    const maxCourses = Math.max(...Object.values(coursesByState));
    
    // Normalize the course count to get intensity between 0 and 1
    const intensity = coursesByState[stateCode] / maxCourses;
    
    // Create a color gradient from light green to dark green
    return `rgb(22, ${Math.round(163 - intensity * 100)}, 74)`;
  };
  
  const handleStateClick = (stateCode: string) => {
    setSelectedState(stateCode === selectedState ? null : stateCode);
    onStateClick(stateCode);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Your Golf Journey Map</h2>
      
      <div className="mb-4">
        <p className="text-gray-600 text-sm">
          {Object.keys(coursesByState).length} states visited out of 50
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-green-600 h-2.5 rounded-full" 
            style={{ width: `${(Object.keys(coursesByState).length / 50) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="relative">
        {/* This is where we'd render an SVG map of the US */}
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-4">Interactive U.S. Map Visualization</p>
            <p className="text-sm text-gray-400">
              In a complete implementation, this would be an SVG map of the United States with each state
              colored based on the number of courses played, with interactive hovering and clicking.
            </p>
            
            {/* Example state display */}
            <div className="mt-6 grid grid-cols-5 gap-2 max-w-lg mx-auto">
              {['CA', 'FL', 'TX', 'NY', 'NC', 'SC', 'GA', 'AZ', 'NV', 'OR'].map(state => (
                <div 
                  key={state}
                  className="p-2 rounded cursor-pointer transition-colors"
                  style={{ 
                    backgroundColor: getStateColor(state),
                    color: coursesByState[state] ? 'white' : 'black'
                  }}
                  onClick={() => handleStateClick(state)}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <div className="text-center">
                    <div className="font-bold">{state}</div>
                    <div className="text-xs">{coursesByState[state] || 0}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* State Info Tooltip */}
        {hoveredState && (
          <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
            <h3 className="font-medium">{hoveredState}</h3>
            <p className="text-sm">
              {coursesByState[hoveredState] || 0} courses played
            </p>
          </div>
        )}
      </div>
      
      {/* Map Legend */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span className="text-xs text-gray-600">Not Played</span>
        </div>
        <div className="w-px h-4 bg-gray-300 mx-2"></div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-300 rounded"></div>
          <span className="text-xs text-gray-600">Few Courses</span>
        </div>
        <div className="w-px h-4 bg-gray-300 mx-2"></div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-600 rounded"></div>
          <span className="text-xs text-gray-600">Many Courses</span>
        </div>
      </div>
      
      {/* Selected State Information */}
      {selectedState && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">{selectedState} Courses Played</h3>
          <ul className="text-sm divide-y">
            {playedCourses
              .filter(course => course.state === selectedState)
              .map(course => (
                <li key={course.id} className="py-2">
                  <p className="font-medium">{course.name}</p>
                  <p className="text-gray-600 text-xs">{course.city}, {course.state}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}