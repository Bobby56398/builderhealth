import React from 'react'
import HealthMetric from './HealthMetric'
import HealthScore from './HealthScore'

function Dashboard({ healthData, healthScore, onUpdateClick }) {
  const metrics = [
    {
      label: 'Sleep',
      value: healthData.sleep,
      unit: 'hours',
      target: 8,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-600'
    },
    {
      label: 'Water',
      value: healthData.water,
      unit: 'glasses',
      target: 8,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      label: 'Steps',
      value: healthData.steps,
      unit: 'steps',
      target: 10000,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      label: 'Screen Time',
      value: healthData.screenTime,
      unit: 'hours',
      target: 8,
      reverse: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600'
    },
    {
      label: 'Caffeine',
      value: healthData.caffeine,
      unit: 'mg',
      target: 300,
      reverse: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-4m0 0h-2m2 0v12M8 3H6a2 2 0 00-2 2v4c0 1.657 1.343 3 3 3h1m0 0h2m-2 0v8m0 0H6m2 0h2" />
        </svg>
      ),
      color: 'from-amber-500 to-yellow-600'
    },
    {
      label: 'Mood',
      value: healthData.mood,
      unit: '/10',
      target: 10,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-pink-500 to-rose-600'
    },
    {
      label: 'Stress',
      value: healthData.stress,
      unit: '/10',
      target: 10,
      reverse: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-600'
    }
  ]

  return (
    <div className="space-y-8">
      <HealthScore score={healthScore} onUpdateClick={onUpdateClick} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <HealthMetric key={metric.label} {...metric} />
        ))}
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Builder Tips
        </h3>
        <div className="space-y-3 text-slate-300">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">💧</span>
            <p>Stay hydrated during long coding sessions - aim for 8 glasses of water daily</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">😴</span>
            <p>Quality sleep improves problem-solving - target 7-8 hours even during market volatility</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 mt-1">🚶</span>
            <p>Take movement breaks every hour - your body and code quality will thank you</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">📱</span>
            <p>Limit screen time outside work - use blue light filters after sunset</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard