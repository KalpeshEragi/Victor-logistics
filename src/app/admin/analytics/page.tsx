"use client";

import { useState, useEffect } from "react";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell
} from "recharts";
import { TrendingUp, MousePointer2, Eye, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => console.error("Error loading analytics:", err));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  // Process daily stats for chart
  const chartData = data?.dailyStats.reduce((acc: any[], curr: any) => {
    const dateStr = `${curr._id.day}/${curr._id.month}`;
    let existing = acc.find(a => a.name === dateStr);
    if (!existing) {
      existing = { name: dateStr, views: 0, clicks: 0 };
      acc.push(existing);
    }
    if (curr._id.type === 'page_view') existing.views += curr.count;
    if (curr._id.type === 'click') existing.clicks += curr.count;
    return acc;
  }, []);

  const totalViews = data?.totalStats.find((s: any) => s._id === 'page_view')?.count || 0;
  const totalClicks = data?.totalStats.find((s: any) => s._id === 'click')?.count || 0;

  return (
    <main className="min-h-screen bg-[#f8fafc] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition mb-2">
              <ArrowLeft size={16} /> Back to Leads
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
            <p className="text-gray-500">Track user behavior and conversion metrics</p>
          </div>
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex gap-1">
            <button className="px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg">Last 7 Days</button>
            <button className="px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 rounded-lg transition">Last 30 Days</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Total Page Views" 
            value={totalViews} 
            icon={<Eye className="text-blue-600" />} 
            color="bg-blue-50" 
            trend="+12% from last week"
          />
          <StatCard 
            title="Total Interactions" 
            value={totalClicks} 
            icon={<MousePointer2 className="text-green-600" />} 
            color="bg-green-50"
            trend="+8% from last week"
          />
          <StatCard 
            title="Conversion Rate" 
            value={`${((totalClicks / (totalViews || 1)) * 100).toFixed(1)}%`} 
            icon={<TrendingUp className="text-purple-600" />} 
            color="bg-purple-50"
            trend="Stable"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Activity Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-600" /> Daily Traffic Trend
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Page Views" />
                  <Line type="monotone" dataKey="clicks" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Interactions" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Interactions Bar Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MousePointer2 size={20} className="text-orange-600" /> Top Interaction Elements
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.topInteractions} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="label" 
                    type="category" 
                    width={100} 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {data?.topInteractions.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" /> Most Visited Pages
            </h3>
            <div className="space-y-4">
              {data?.topPages.map((page: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition group">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-sm font-bold text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{page._id}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{page.count} views</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device/User Insights (Placeholder for now) */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Smart Insights</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-6">
                Most users are visiting from the **Services** section. The **"Get a Quote"** button has the highest engagement rate today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <p className="text-[10px] uppercase tracking-wider text-green-200 mb-1 font-bold">Peak Traffic</p>
                  <p className="text-lg font-bold">10:00 AM - 1:00 PM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <p className="text-[10px] uppercase tracking-wider text-green-200 mb-1 font-bold">Best Performing</p>
                  <p className="text-lg font-bold">Prefab Cabins</p>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 transition active:scale-95 shadow-lg">
              Generate Detailed AI Report
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon, color, trend }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1 font-medium">{title}</p>
        <h3 className="text-3xl font-black text-gray-900 mb-2">{value}</h3>
        <p className={`text-[10px] font-bold px-2 py-1 rounded-full inline-block ${
          trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
        }`}>
          {trend}
        </p>
      </div>
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
}
