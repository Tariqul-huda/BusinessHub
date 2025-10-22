import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../contexts/UserContext';
import KPI from './Dashboard/KPI';
import ChartSection from './Dashboard/ChartSection';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { apiService } from '../services/mockData';
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  FileText, 
  Brain,
  Plus,
  Download,
  RefreshCw
} from 'lucide-react';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, checkPermission } = useUser();

  // Mock data - in real app, this would come from API
  const [dashboardData, setDashboardData] = useState({
    kpis: {
      totalSales: { value: "$24,580", change: "+12.5%", trend: "up" },
      monthlyRevenue: { value: "$156,420", change: "+8.2%", trend: "up" },
      lowStockItems: { value: "5 items", change: "-2 items", trend: "down" },
      activeEmployees: { value: "142", change: "+3", trend: "up" },
      pendingPayrolls: { value: "8", change: "+1", trend: "up" },
      aiPrediction: { value: "iPhone 15", change: "Top seller", trend: "up" }
    },
    charts: {
      salesTrend: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 },
        { name: 'Jun', value: 5500 }
      ],
      expenseBreakdown: [
        { name: 'Marketing', value: 35 },
        { name: 'Operations', value: 25 },
        { name: 'HR', value: 20 },
        { name: 'IT', value: 15 },
        { name: 'Other', value: 5 }
      ],
      inventoryFlow: [
        { name: 'Incoming', value: 120 },
        { name: 'Outgoing', value: 95 },
        { name: 'Returned', value: 15 },
        { name: 'Damaged', value: 8 }
      ],
      attendance: [
        { name: 'Present', value: 85 },
        { name: 'Absent', value: 10 },
        { name: 'Late', value: 5 }
      ]
    }
  });

  // Load dashboard data on component mount
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await apiService.getDashboardData(user.role);
        setDashboardData(data);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    };

    if (user) {
      loadDashboardData();
    }
  }, [user]);

  // Get KPIs based on user role
  const getKPIs = () => {
    const allKPIs = [
      { title: "Total Sales Today", value: dashboardData.kpis.totalSales.value, change: dashboardData.kpis.totalSales.change, trend: dashboardData.kpis.totalSales.trend, icon: DollarSign, color: "green" },
      { title: "Monthly Revenue", value: dashboardData.kpis.monthlyRevenue.value, change: dashboardData.kpis.monthlyRevenue.change, trend: dashboardData.kpis.monthlyRevenue.trend, icon: TrendingUp, color: "blue" },
      { title: "Low Stock Items", value: dashboardData.kpis.lowStockItems.value, change: dashboardData.kpis.lowStockItems.change, trend: dashboardData.kpis.lowStockItems.trend, icon: AlertTriangle, color: "red" },
      { title: "Active Employees", value: dashboardData.kpis.activeEmployees.value, change: dashboardData.kpis.activeEmployees.change, trend: dashboardData.kpis.activeEmployees.trend, icon: Users, color: "purple" },
      { title: "Pending Payrolls", value: dashboardData.kpis.pendingPayrolls.value, change: dashboardData.kpis.pendingPayrolls.change, trend: dashboardData.kpis.pendingPayrolls.trend, icon: FileText, color: "yellow" },
      { title: "AI Prediction", value: dashboardData.kpis.aiPrediction.value, change: dashboardData.kpis.aiPrediction.change, trend: dashboardData.kpis.aiPrediction.trend, icon: Brain, color: "indigo" }
    ];

    // Filter KPIs based on user role
    if (user.role === 'sales') {
      return allKPIs.filter(kpi => ['Total Sales Today', 'Monthly Revenue', 'AI Prediction'].includes(kpi.title));
    } else if (user.role === 'inventory') {
      return allKPIs.filter(kpi => ['Low Stock Items', 'AI Prediction'].includes(kpi.title));
    } else if (user.role === 'hr') {
      return allKPIs.filter(kpi => ['Active Employees', 'Pending Payrolls'].includes(kpi.title));
    } else if (user.role === 'employee') {
      return allKPIs.filter(kpi => ['Active Employees'].includes(kpi.title));
    }
    return allKPIs; // Admin and Manager see all
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} userRole={user.role} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <TopBar user={user} />
          
          {/* Dashboard Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-y-auto p-6"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}! Here's what's happening with your business.</p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Sale</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Add Employee</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Generate Report</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh Data</span>
                </motion.button>
              </div>
            </motion.div>

            {/* KPI Cards */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Performance Indicators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {getKPIs().map((kpi, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <KPI {...kpi} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Charts Section */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {checkPermission('view_sales') && (
                <ChartSection
                  title="Sales Trend"
                  data={dashboardData.charts.salesTrend}
                  type="line"
                  color="#10B981"
                />
              )}
              {checkPermission('view_inventory') && (
                <ChartSection
                  title="Inventory Flow"
                  data={dashboardData.charts.inventoryFlow}
                  type="bar"
                  color="#3B82F6"
                />
              )}
              {checkPermission('view_hr') && (
                <ChartSection
                  title="Attendance Summary"
                  data={dashboardData.charts.attendance}
                  type="area"
                  color="#8B5CF6"
                />
              )}
              {checkPermission('view_reports') && (
                <ChartSection
                  title="Expense Breakdown"
                  data={dashboardData.charts.expenseBreakdown}
                  type="pie"
                  color="#F59E0B"
                />
              )}
            </motion.div>

            {/* Alerts Section */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-yellow-800">Low Stock Alert</p>
                    <p className="text-sm text-yellow-600">5 items are below the minimum stock threshold</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-800">New Employee</p>
                    <p className="text-sm text-blue-600">Sarah Johnson has been added to the HR system</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-green-600" />
        <div>
                    <p className="font-medium text-green-800">Sales Milestone</p>
                    <p className="text-sm text-green-600">Monthly target achieved 3 days early!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
        </div>
  );
};

export default Dashboard;