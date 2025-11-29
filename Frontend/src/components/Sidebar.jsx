import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Brain, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';


const Sidebar = ({ isCollapsed, setIsCollapsed, userRole }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const navigate = useNavigate()

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'manager', 'sales', 'inventory', 'hr', 'employee'] },
    { id: 'inventory', label: 'Inventory', icon: Package, roles: ['admin', 'manager', 'inventory'] },
    { id: 'sales', label: 'Sales', icon: ShoppingCart, roles: ['admin', 'manager', 'sales'] },
    { id: 'hr', label: 'HR & Payroll', icon: Users, roles: ['admin', 'manager', 'hr', 'employee'] },
    { id: 'reports', label: 'Reports', icon: BarChart3, roles: ['admin', 'manager', 'sales', 'inventory', 'hr'] },
    { id: 'ai', label: 'AI Insights', icon: Brain, roles: ['admin', 'manager'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['admin', 'manager'] }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(userRole)
  );

  const sidebarVariants = {
    expanded: { width: "280px" },
    collapsed: { width: "80px" }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }
  };
  const handleItem = (id)=>{
    setActiveItem(id)
    // console.log(`/${id}`)
    console.log(activeItem)
      navigate(`/main/${id}`)
  }
  return (
    <motion.div
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      className="bg-white border-r border-gray-200 shadow-lg flex flex-col h-full fixed top-0 left-0 z-50 min-h-screen"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BH</span>
              </div>
              <span className="font-bold text-gray-800">BusinessHub</span>
            </motion.div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {filteredMenuItems.map((item) => (
          <motion.button
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            // transition={{ delay:  0.1 }}
            onClick={() => handleItem(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
              activeItem === item.id 
                ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium"
              >
                {item.label}
              </motion.span>
            )}
          </motion.button>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full flex items-center space-x-3 p-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-medium"
            >
              Logout
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
