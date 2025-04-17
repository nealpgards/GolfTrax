// src/app/components/AddRoundForm.tsx
"use client";
import { useState } from 'react';

interface AddRoundFormProps {
  courseId: number;
  courseName: string;
  coursePar: number;
  onSubmit: (roundData: any) => void;
  onCancel: () => void;
}

export default function AddRoundForm({ courseId, courseName, coursePar, onSubmit, onCancel }: AddRoundFormProps) {
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  const [formData, setFormData] = useState({
    date: today,
    score: '',
    weather: 'Sunny',
    notes: '',
    courseRating: 72.4,
    slopeRating: 129,
    holeByHole: false,
    holeScores: Array(18).fill('') // Initialize with 18 empty scores
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleHoleScoreChange = (index: number, value: string) => {
    const newHoleScores = [...formData.holeScores];
    newHoleScores[index] = value;
    
    // Calculate total score from holes
    const totalScore = newHoleScores.reduce((sum, score) => {
      return sum + (score ? parseInt(score) : 0);
    }, 0);
    
    setFormData(prev => ({
      ...prev,
      holeScores: newHoleScores,
      score: totalScore > 0 ? totalScore.toString() : ''
    }));
  };
  
  const toggleHoleByHole = () => {
    setFormData(prev => ({
      ...prev,
      holeByHole: !prev.holeByHole
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.date || !formData.score) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Format data for submission
    const roundData = {
      courseId,
      date: formData.date,
      score: parseInt(formData.score),
      weather: formData.weather,
      notes: formData.notes,
      courseRating: formData.courseRating,
      slopeRating: formData.slopeRating,
      holeScores: formData.holeByHole ? formData.holeScores.map(score => score ? parseInt(score) : null) : []
    };
    
    onSubmit(roundData);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add Round</h2>
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg">{courseName}</h3>
        <p className="text-gray-600">Par {coursePar}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date Played <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
              Total Score <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="score"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              min="1"
              max="200"
              disabled={formData.holeByHole}
              required
            />
          </div>
          
          <div>
            <label htmlFor="weather" className="block text-sm font-medium text-gray-700 mb-1">
              Weather Conditions
            </label>
            <select
              id="weather"
              name="weather"
              value={formData.weather}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Sunny">Sunny</option>
              <option value="Partly Cloudy">Partly Cloudy</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Light Rain">Light Rain</option>
              <option value="Heavy Rain">Heavy Rain</option>
              <option value="Windy">Windy</option>
              <option value="Foggy">Foggy</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="holeByHole"
              checked={formData.holeByHole}
              onChange={toggleHoleByHole}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="holeByHole" className="ml-2 block text-sm text-gray-700">
              Enter hole-by-hole scores
            </label>
          </div>
        </div>
        
        {/* Hole-by-hole scoring section */}
        {formData.holeByHole && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Hole-by-Hole Scores</h3>
            <div className="grid grid-cols-6 md:grid-cols-9 gap-2">
              {formData.holeScores.map((score, index) => (
                <div key={index}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Hole {index + 1}
                  </label>
                  <input
                    type="number"
                    value={score}
                    onChange={(e) => handleHoleScoreChange(index, e.target.value)}
                    className="w-full p-1 border border-gray-300 rounded-md text-center"
                    min="1"
                    max="20"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Add any notes about your round..."
          ></textarea>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Save Round
          </button>
        </div>
      </form>
    </div>
  );
}