'use client';

import { useState } from "react";

type Source = {
  icon: string;
  title: string;
  subtitle: string;
  value: number;
  percentage: number;
  description: string;
};

type Scope1Source = {
  label: string;
  value: number;
  percentage: number;
  color: string;
  opacity: string;
  arcLabelPos: { x: number; y: number };
};

type DurationType = 'This Year' | 'Last Year' | 'Comparison';

type Scope1Data = {
  [key in DurationType]: Scope1Source[];
};

const scope1DataByDuration: Scope1Data = {
  'This Year': [
    {
      label: 'Stationary Combustion',
      value: 1746.2,
      percentage: 53.8,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-100',
      arcLabelPos: { x: 40, y: -10 },
    },
    {
      label: 'Mobile Combustion',
      value: 985.4,
      percentage: 30.3,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-80',
      arcLabelPos: { x: -15, y: 35 },
    },
    {
      label: 'Process Emissions',
      value: 516.2,
      percentage: 15.9,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-60',
      arcLabelPos: { x: -25, y: -25 },
    },
  ],
  'Last Year': [
    {
      label: 'Stationary Combustion',
      value: 1900,
      percentage: 60,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-100',
      arcLabelPos: { x: 40, y: -10 },
    },
    {
      label: 'Mobile Combustion',
      value: 800,
      percentage: 25,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-80',
      arcLabelPos: { x: -15, y: 35 },
    },
    {
      label: 'Process Emissions',
      value: 470,
      percentage: 15,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-60',
      arcLabelPos: { x: -25, y: -25 },
    },
  ],
  'Comparison': [
    {
      label: 'Stationary Combustion',
      value: 1800,
      percentage: 50,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-100',
      arcLabelPos: { x: 40, y: -10 },
    },
    {
      label: 'Mobile Combustion',
      value: 1100,
      percentage: 35,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-80',
      arcLabelPos: { x: -15, y: 35 },
    },
    {
      label: 'Process Emissions',
      value: 700,
      percentage: 15,
      color: 'fill-[#0f5744]',
      opacity: 'opacity-60',
      arcLabelPos: { x: -25, y: -25 },
    },
  ],
};

const sourceData: Source[] = [
  {
    icon: '🔥',
    title: 'Stationary Combustion',
    subtitle: 'Boilers, furnaces, generators',
    value: 1746.2,
    percentage: 53.8,
    description: '23 sources • Natural gas, heating oil',
  },
  {
    icon: '🚗',
    title: 'Mobile Combustion',
    subtitle: 'Fleet vehicles, equipment',
    value: 985.4,
    percentage: 30.3,
    description: '45 vehicles • Diesel, gasoline, hybrid',
  },
  {
    icon: '🏭',
    title: 'Process Emissions',
    subtitle: 'Industrial manufacturing',
    value: 516.2,
    percentage: 15.9,
    description: 'Chemical processes • Manufacturing',
  },
];

export default function Scope1Section() {
  const [duration, setDuration] = useState<'This Year' | 'Last Year' | 'Comparison'>('This Year');
  const scope1Sources = scope1DataByDuration[duration];
  
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-green-100 pb-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Scope 1 Emissions Analysis
        </h1>
        <p className="text-green-800 opacity-70 max-w-4xl leading-relaxed">
          Direct greenhouse gas emissions from sources owned or controlled by your organization, 
          including detailed analysis of stationary combustion, mobile combustion, process emissions, and fugitive emissions.
        </p>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-semibold text-green-800 opacity-70 uppercase tracking-wider mb-2">
                Total Scope 1
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">3,247.8</div>
              <div className="text-sm text-green-800 mb-2">▼ 12.4% vs baseline</div>
              <div className="text-xs text-green-800 opacity-60">
                tonnes CO₂e • 36.3% of total emissions
              </div>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">
              🏭
            </div>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-800 transition-all duration-1000" style={{ width: '83.8%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-semibold text-green-800 opacity-70 uppercase tracking-wider mb-2">
                Stationary Combustion
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">1,746.2</div>
              <div className="text-sm text-green-800 mb-2">▼ 8.5% vs last year</div>
              <div className="text-xs text-green-800 opacity-60">
                Largest source • 53.8% of Scope 1
              </div>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">
              🔥
            </div>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-800 transition-all duration-1000" style={{ width: '53.8%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-semibold text-green-800 opacity-70 uppercase tracking-wider mb-2">
                Mobile Combustion
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">985.4</div>
              <div className="text-sm text-green-800 mb-2">▼ 15.2% vs last year</div>
              <div className="text-xs text-green-800 opacity-60">
                Fleet optimization • 30.3% of Scope 1
              </div>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">
              🚗
            </div>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-800 transition-all duration-1000" style={{ width: '30.3%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-semibold text-green-800 opacity-70 uppercase tracking-wider mb-2">
                Process Emissions
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">516.2</div>
              <div className="text-sm text-green-800 mb-2">▼ 5.8% vs last year</div>
              <div className="text-xs text-green-800 opacity-60">
                Industrial processes • 15.9% of Scope 1
              </div>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">
              🏭
            </div>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-800 transition-all duration-1000" style={{ width: '15.9%' }}></div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-green-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-green-100 pb-4">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              📊 Scope 1 Breakdown by Source
            </h3>
            <div className="flex gap-1 border border-gray-200 rounded overflow-hidden">
              {(['This Year', 'Last Year', 'Comparison'] as DurationType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setDuration(type)}
                  className={`px-4 py-2 text-xs font-medium ${
                    duration === type
                      ? 'bg-teal-700 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="h-80 flex items-center justify-center">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              <g transform="translate(150,100)">
                {/* Hardcoded arc paths reused as-is */}
                <path
                  d="M 0,-60 A 60,60 0 1,1 32.3,49.7 L 0,0 Z"
                  className={`${scope1Sources[0].color} ${scope1Sources[0].opacity}`}
                />
                <path
                  d="M 32.3,49.7 A 60,60 0 0,1 -58.5,-10.8 L 0,0 Z"
                  className={`${scope1Sources[1].color} ${scope1Sources[1].opacity}`}
                />
                <path
                  d="M -58.5,-10.8 A 60,60 0 0,1 0,-60 L 0,0 Z"
                  className={`${scope1Sources[2].color} ${scope1Sources[2].opacity}`}
                />

                {/* Dynamic labels */}
                {scope1Sources.map((item, i) => (
                  <text
                    key={i}
                    x={item.arcLabelPos.x}
                    y={item.arcLabelPos.y}
                    textAnchor="middle"
                    fontSize="10"
                    fill="white"
                  >
                    {item.percentage.toFixed(1)}%
                  </text>
                ))}
              </g>
            </svg>
          </div>

          <div className="flex gap-5 mt-4 flex-wrap">
            {scope1Sources.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm bg-green-800 ${item.opacity}`}></div>
                <span className="text-sm text-green-800">
                  {item.label} ({item.value.toLocaleString()} tCO₂e)
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-green-100 pb-4">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              📈 Monthly Trends
            </h3>
          </div>
          <div className="h-80 relative">
            <svg viewBox="0 0 300 150" className="w-full h-full">
              {/* Grid */}
              <defs>
                <pattern id="monthlyGrid" width="30" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 15" fill="none" stroke="#e4f5d5" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#monthlyGrid)" />

              {/* Data line */}
              <polyline
                fill="none"
                stroke="#0f5744"
                strokeWidth="3"
                points="15,120 45,115 75,110 105,108 135,105 165,100 195,98 225,95 255,90 285,85"
              />

              {/* Data points */}
              <circle cx="285" cy="85" r="4" fill="#0f5744" />

              {/* Labels */}
              <text x="15" y="140" fontSize="8" fill="#0f5744">Jan</text>
              <text x="75" y="140" fontSize="8" fill="#0f5744">Mar</text>
              <text x="135" y="140" fontSize="8" fill="#0f5744">May</text>
              <text x="195" y="140" fontSize="8" fill="#0f5744">Jul</text>
              <text x="255" y="140" fontSize="8" fill="#0f5744">Sep</text>
            </svg>
          </div>
          <div className="text-center text-xs text-green-800 opacity-70 mt-4">
            Continuous reduction trend • Target: -15% by Dec 2025
          </div>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sourceData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-green-800">{item.title}</h4>
                <div className="text-xs text-green-800 opacity-60">{item.subtitle}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="text-2xl font-bold text-green-800">{item.value.toLocaleString()}</div>
              <div className="text-sm text-green-800 opacity-60">{item.percentage.toFixed(1)}%</div>
            </div>
            <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-green-800 transition-all duration-1000"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-green-800 opacity-70">{item.description}</div>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-white border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="flex justify-between items-center p-6 border-b border-green-100">
          <div className="text-lg font-semibold text-green-800">Scope 1 Emission Sources Detail</div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-green-800 bg-white border border-green-800 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 bg-green-800 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Add Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 