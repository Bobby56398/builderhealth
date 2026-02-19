import React from 'react'

function HealthScore({ score, onUpdateClick }) {
  const getScoreColor = () => {
    if (score >= 80) return 'from-green-400 to-emerald-500'
    if (score >= 60) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-rose-500'
  }

  const getScoreMessage = () => {
    if (score >= 80) return 'Excellent! You\'re thriving as a builder 🚀'
    if (score >= 60) return 'Good work! Room for improvement 💪'
    if (score >= 40) return 'Needs attention - prioritize your health ⚠️'
    return 'Critical - time to reset and recharge 🔋'
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-slate-300 mb-2">Your Builder Health Score</h2>
          <p className="text-slate-400 mb-4">{getScoreMessage()}</p>
          <button
            onClick={onUpdateClick}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Update Today's Metrics
          </button>
        </div>
        
        <div className="relative">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-slate-700"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(score / 100) * 502.4} 502.4`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`text-transparent`} style={{ stopColor: score >= 80 ? '#4ade80' : score >= 60 ? '#fbbf24' : '#f87171' }} />
                <stop offset="100%" className={`text-transparent`} style={{ stopColor: score >= 80 ? '#10b981' : score >= 60 ? '#f97316' : '#ef4444' }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-5xl font-bold bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent`}>
                {score}
              </div>
              <div className="text-slate-400 text-sm font-medium mt-1">/ 100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthScore