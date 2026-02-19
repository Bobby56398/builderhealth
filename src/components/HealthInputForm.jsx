import React, { useState } from 'react'

function HealthInputForm({ currentData, onSave, onCancel }) {
  const [formData, setFormData] = useState(currentData)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: Number(value)
    }))
  }

  const inputFields = [
    { name: 'sleep', label: 'Sleep', min: 0, max: 24, step: 0.5, unit: 'hours', icon: '😴' },
    { name: 'water', label: 'Water Intake', min: 0, max: 20, step: 1, unit: 'glasses', icon: '💧' },
    { name: 'steps', label: 'Steps', min: 0, max: 50000, step: 100, unit: 'steps', icon: '🚶' },
    { name: 'screenTime', label: 'Screen Time', min: 0, max: 24, step: 0.5, unit: 'hours', icon: '📱' },
    { name: 'caffeine', label: 'Caffeine', min: 0, max: 1000, step: 10, unit: 'mg', icon: '☕' },
    { name: 'mood', label: 'Mood', min: 1, max: 10, step: 1, unit: '/10', icon: '😊' },
    { name: 'stress', label: 'Stress Level', min: 1, max: 10, step: 1, unit: '/10', icon: '⚡' }
  ]

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Update Health Metrics</h2>
          <button
            onClick={onCancel}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {inputFields.map(field => (
            <div key={field.name} className="space-y-2">
              <label className="flex items-center gap-2 text-white font-medium">
                <span className="text-2xl">{field.icon}</span>
                <span>{field.label}</span>
                <span className="text-slate-400 text-sm ml-auto">{formData[field.name]} {field.unit}</span>
              </label>
              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>{field.min} {field.unit}</span>
                <span>{field.max} {field.unit}</span>
              </div>
            </div>
          ))}

          <div className="pt-4 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Save Metrics
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 rounded-xl transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
          <p className="text-sm text-slate-400 flex items-start gap-2">
            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your health data is stored locally in your browser. Wearable device sync coming soon!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HealthInputForm