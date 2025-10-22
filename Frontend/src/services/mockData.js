// Mock data service for BusinessHub ERP Dashboard
export const mockDashboardData = {
  // User roles and permissions
  roles: {
    admin: {
      name: "Administrator",
      permissions: ['view_sales', 'view_inventory', 'view_hr', 'view_reports', 'view_ai', 'manage_users']
    },
    manager: {
      name: "Manager", 
      permissions: ['view_sales', 'view_inventory', 'view_hr', 'view_reports', 'view_ai']
    },
    sales: {
      name: "Sales Representative",
      permissions: ['view_sales', 'view_reports']
    },
    inventory: {
      name: "Inventory Manager",
      permissions: ['view_inventory', 'view_reports']
    },
    hr: {
      name: "HR Manager",
      permissions: ['view_hr', 'view_reports']
    },
    employee: {
      name: "Employee",
      permissions: ['view_hr']
    }
  },

  // KPI data
  kpis: {
    totalSales: { value: "$24,580", change: "+12.5%", trend: "up" },
    monthlyRevenue: { value: "$156,420", change: "+8.2%", trend: "up" },
    lowStockItems: { value: "5 items", change: "-2 items", trend: "down" },
    activeEmployees: { value: "142", change: "+3", trend: "up" },
    pendingPayrolls: { value: "8", change: "+1", trend: "up" },
    aiPrediction: { value: "iPhone 15", change: "Top seller", trend: "up" }
  },

  // Chart data
  charts: {
    salesTrend: [
      { name: 'Jan', value: 4000, target: 3500 },
      { name: 'Feb', value: 3000, target: 3500 },
      { name: 'Mar', value: 5000, target: 4000 },
      { name: 'Apr', value: 4500, target: 4000 },
      { name: 'May', value: 6000, target: 5000 },
      { name: 'Jun', value: 5500, target: 5000 }
    ],
    expenseBreakdown: [
      { name: 'Marketing', value: 35, color: '#3B82F6' },
      { name: 'Operations', value: 25, color: '#10B981' },
      { name: 'HR', value: 20, color: '#F59E0B' },
      { name: 'IT', value: 15, color: '#EF4444' },
      { name: 'Other', value: 5, color: '#8B5CF6' }
    ],
    inventoryFlow: [
      { name: 'Incoming', value: 120, color: '#10B981' },
      { name: 'Outgoing', value: 95, color: '#3B82F6' },
      { name: 'Returned', value: 15, color: '#F59E0B' },
      { name: 'Damaged', value: 8, color: '#EF4444' }
    ],
    attendance: [
      { name: 'Present', value: 85, color: '#10B981' },
      { name: 'Absent', value: 10, color: '#EF4444' },
      { name: 'Late', value: 5, color: '#F59E0B' }
    ],
    revenueByMonth: [
      { month: 'Jan', revenue: 45000, profit: 12000 },
      { month: 'Feb', revenue: 52000, profit: 15000 },
      { month: 'Mar', revenue: 48000, profit: 13000 },
      { month: 'Apr', revenue: 61000, profit: 18000 },
      { month: 'May', revenue: 55000, profit: 16000 },
      { month: 'Jun', revenue: 67000, profit: 20000 }
    ]
  },

  // Notifications
  notifications: [
    {
      id: 1,
      title: "Low Stock Alert",
      message: "5 items are below the minimum stock threshold",
      time: "2 min ago",
      type: "warning",
      priority: "high"
    },
    {
      id: 2,
      title: "New Sale Completed",
      message: "Order #1234 has been completed successfully",
      time: "15 min ago",
      type: "success",
      priority: "medium"
    },
    {
      id: 3,
      title: "Payroll Processing",
      message: "Monthly payroll is due for processing",
      time: "1 hour ago",
      type: "info",
      priority: "high"
    },
    {
      id: 4,
      title: "New Employee Added",
      message: "Sarah Johnson has been added to the HR system",
      time: "2 hours ago",
      type: "info",
      priority: "low"
    },
    {
      id: 5,
      title: "Sales Milestone",
      message: "Monthly target achieved 3 days early!",
      time: "3 hours ago",
      type: "success",
      priority: "medium"
    }
  ],

  // Quick actions
  quickActions: [
    {
      id: 'add_sale',
      label: 'Add Sale',
      icon: 'Plus',
      color: 'blue',
      permission: 'view_sales'
    },
    {
      id: 'add_employee',
      label: 'Add Employee',
      icon: 'Users',
      color: 'green',
      permission: 'view_hr'
    },
    {
      id: 'generate_report',
      label: 'Generate Report',
      icon: 'Download',
      color: 'purple',
      permission: 'view_reports'
    },
    {
      id: 'refresh_data',
      label: 'Refresh Data',
      icon: 'RefreshCw',
      color: 'gray',
      permission: null
    }
  ],

  // Recent activities
  recentActivities: [
    {
      id: 1,
      type: 'sale',
      description: 'New sale recorded: $2,450',
      user: 'John Smith',
      time: '5 min ago',
      icon: 'DollarSign'
    },
    {
      id: 2,
      type: 'inventory',
      description: 'Stock updated: iPhone 15 Pro',
      user: 'Sarah Wilson',
      time: '12 min ago',
      icon: 'Package'
    },
    {
      id: 3,
      type: 'hr',
      description: 'Employee clocked in: Mike Johnson',
      user: 'Mike Johnson',
      time: '25 min ago',
      icon: 'Users'
    },
    {
      id: 4,
      type: 'report',
      description: 'Monthly report generated',
      user: 'Admin',
      time: '1 hour ago',
      icon: 'FileText'
    }
  ],

  // AI Insights
  aiInsights: [
    {
      id: 1,
      title: "Sales Prediction",
      description: "Based on current trends, iPhone 15 is predicted to be the top-selling product next week",
      confidence: 87,
      type: "prediction"
    },
    {
      id: 2,
      title: "Inventory Alert",
      description: "Samsung Galaxy S24 stock is running low. Consider restocking within 3 days",
      confidence: 92,
      type: "alert"
    },
    {
      id: 3,
      title: "Performance Insight",
      description: "Sales team performance is 15% above target this month",
      confidence: 95,
      type: "insight"
    }
  ]
};

// API simulation functions
export const apiService = {
  // Get dashboard data based on user role
  getDashboardData: async (userRole) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const data = { ...mockDashboardData };
    
    // Filter data based on user role
    if (userRole === 'employee') {
      return {
        ...data,
        kpis: {
          activeEmployees: data.kpis.activeEmployees
        },
        charts: {
          attendance: data.charts.attendance
        }
      };
    }
    
    return data;
  },

  // Get notifications
  getNotifications: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockDashboardData.notifications;
  },

  // Get recent activities
  getRecentActivities: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockDashboardData.recentActivities;
  },

  // Get AI insights
  getAIInsights: async () => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockDashboardData.aiInsights;
  }
};
