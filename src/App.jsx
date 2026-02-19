import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import HealthInputForm from './components/HealthInputForm'

function App() {
  const [healthData, setHealthData] = useState(() => {
    const saved = localStorage.getItem('builderHealthData')
    if (saved) {
      return JSON.parse(saved)
    }
    return {
      sleep: 0,
      water: 0,
      steps: 0,
      screenTime: 0,
      caffeine: 0,
      mood: 5,
      stress: 5
    }
  })

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    localStorage.setItem('builderHealthData', JSON.stringify(healthData))
  }, [healthData])

  const updateHealthData = (newData) => {
    setHealthData(newData)
    setShowForm(false)
  }

  const calculateHealthScore = () => {
    const sleepScore = Math.min((healthData.sleep / 8) * 100, 100)
    const waterScore = Math.min((healthData.water / 8) * 100, 100)
    const stepsScore = Math.min((healthData.steps / 10000) * 100, 100)
    const screenScore = Math.max(100 - (healthData.screenTime / 12) * 100, 0)
    const caffeineScore = Math.max(100 - (healthData.caffeine / 400) * 100, 0)
    const moodScore = (healthData.mood / 10) * 100
    const stressScore = (1 - (healthData.stress / 10)) * 100

    const totalScore = (
      sleepScore * 0.25 +
      waterScore * 0.15 +
      stepsScore * 0.15 +
      screenScore * 0.15 +
      caffeineScore * 0.10 +
      moodScore * 0.10 +
      stressScore * 0.10
    )

    return Math.round(totalScore)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h1 className="text-5xl font-bold text-white">BuilderHealth</h1>
          </div>
          <p className="text-cyan-300 text-lg">Health tracking for crypto builders and Web3 developers</p>
        </header>

        <Dashboard 
          healthData={healthData} 
          healthScore={calculateHealthScore()}
          onUpdateClick={() => setShowForm(true)}
        />

        {showForm && (
          <HealthInputForm 
            currentData={healthData}
            onSave={updateHealthData}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  )
}

export default App