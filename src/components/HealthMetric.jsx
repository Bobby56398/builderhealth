import React from 'react'

function HealthMetric({ label, value, unit, target, icon, color, reverse = false }) {
  const calculateProgress = () => {
    if (reverse) {
      return Math.max(0, Math.min(100, ((target - value) / target) * 100))
    }
    return Math.min((value / target) * 100, 100)
  }

  const progress = calculateProgress()

  const getStatusColor = () => {
    if (progress >= 80) return 'text-green-400'
    if (progress >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`bg-gradient-to-r ${color} p-3 rounded-xl text-white shadow-lg`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{label}</h3>
            <p className="text-sm text-slate-400">Target: {target} {unit}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{value}</span>
          <span className="text-lg text-slate-400">{unit}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Progress</span>
            <span className={`font-semibold ${getStatusColor()}`}>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${color} transition-all duration-500 ease-out rounded-full`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthMetric