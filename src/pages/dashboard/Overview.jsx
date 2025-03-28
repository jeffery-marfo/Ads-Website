// import React from "react";

// const Overview = () => {
//   return <div>Overview</div>;
// };

// export default Overview;

import React, { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Overview = () => {
  // User data
  const userName = "w";

  // Date range state and functionality
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
    endDate: new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Format dates for display
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  const displayDateRange = `${formatDate(dateRange.startDate)} - ${formatDate(
    dateRange.endDate
  )}`;

  // Handle date navigation
  const navigateDates = (direction) => {
    const days = 7; // 1 week
    setDateRange((prev) => {
      const startDate = new Date(prev.startDate);
      const endDate = new Date(prev.endDate);

      if (direction === "prev") {
        startDate.setDate(startDate.getDate() - days);
        endDate.setDate(endDate.getDate() - days);
      } else {
        startDate.setDate(startDate.getDate() + days);
        endDate.setDate(endDate.getDate() + days);
      }

      return { startDate, endDate };
    });
  };

  // Stats data
  const [stats, setStats] = useState([
    { label: "Total Impressions", value: "12,450", color: "blue" },
    { label: "Total Clicks", value: "1,248", color: "red" },
    { label: "Total Conversions", value: "37", color: "green" },
  ]);

  // Chart data
  const [chartData, setChartData] = useState([]);

  // Generate chart data
  useEffect(() => {
    const generateData = () => {
      // Get dates between start and end
      const dates = [];
      const currentDate = new Date(dateRange.startDate);
      while (currentDate <= dateRange.endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Generate random data for these dates
      return dates.map((date) => {
        const baseImpressions = Math.floor(Math.random() * 1000) + 500;
        const baseClicks = Math.floor(
          baseImpressions * (Math.random() * 0.15 + 0.05)
        );
        const baseConversions = Math.floor(
          baseClicks * (Math.random() * 0.08 + 0.02)
        );

        return {
          date: formatDate(date),
          impressions: baseImpressions,
          clicks: baseClicks,
          conversions: baseConversions,
        };
      });
    };

    // Update chart data
    const newData = generateData();
    setChartData(newData);

    // Update summary stats
    const totalImpressions = newData.reduce(
      (sum, day) => sum + day.impressions,
      0
    );
    const totalClicks = newData.reduce((sum, day) => sum + day.clicks, 0);
    const totalConversions = newData.reduce(
      (sum, day) => sum + day.conversions,
      0
    );

    setStats([
      {
        label: "Total Impressions",
        value: totalImpressions.toLocaleString(),
        color: "blue",
      },
      {
        label: "Total Clicks",
        value: totalClicks.toLocaleString(),
        color: "red",
      },
      {
        label: "Total Conversions",
        value: totalConversions.toLocaleString(),
        color: "green",
      },
    ]);
  }, [dateRange]);

  // Recent activities data
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "New ad campaign created",
      description: "Summer Promotion",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Campaign reached 1,000 impressions",
      description: "Product Launch",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Budget updated",
      description: "Holiday Special",
      time: "2 days ago",
    },
  ]);

  return (
    <div className="flex flex-col p-4 md:p-6 m-auto">
      {/* Header with Welcome and Date Selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl mr-4">
            {userName.charAt(0)}
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Welcome, 👋</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Manage your ads and track performance with ease!
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center border rounded-md px-3 py-2 cursor-pointer hover:bg-gray-50"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <button
              className="mr-2 p-1 hover:bg-gray-200 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateDates("prev");
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-gray-700">{displayDateRange}</span>
            <button
              className="mx-2 p-1 hover:bg-gray-200 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateDates("next");
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <Calendar className="h-4 w-4 text-gray-500" />
          </div>

          {/* Date picker dropdown could go here */}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-md p-4 ${
              stat.color === "blue"
                ? "bg-blue-50"
                : stat.color === "red"
                ? "bg-red-50"
                : "bg-green-50"
            }`}
          >
            <div
              className={`text-sm ${
                stat.color === "blue"
                  ? "text-blue-600"
                  : stat.color === "red"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {stat.label}
            </div>
            <div className="text-2xl font-bold mt-1">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-md border p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <h2 className="font-medium">Performance History</h2>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-1"></div>
              <span className="text-xs text-gray-600">Impressions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
              <span className="text-xs text-gray-600">Clicks</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
              <span className="text-xs text-gray-600">Conversions</span>
            </div>
          </div>
        </div>

        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} width={40} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="impressions"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="conversions"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Recent Activities</h2>
          <button className="text-blue-500 text-sm">View All</button>
        </div>

        <div className="bg-white rounded-md border divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                </div>
                <span className="text-sm text-gray-500 md:ml-4">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}

          {activities.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No recent activities to display
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
