import { motion } from 'framer-motion';
import { Search, Bell, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Low Stock Alert", message: "5 items below threshold", time: "2 min ago", type: "warning" },
    { id: 2, title: "New Sale", message: "Order #1234 completed", time: "15 min ago", type: "success" },
    { id: 3, title: "Payroll Due", message: "Monthly payroll processing", time: "1 hour ago", type: "info" }
  ]);

  // 1. FIX: Add 'path' property with a leading slash '/' (Absolute Path)
  const userMenuItems = [
    // { label: "Profile", icon: User, path: '/profile' }, 
    { label: "Settings", icon: Settings, path: 'profile/settings' },
    { label: "Logout", icon: LogOut, path: '/login' }
  ];

  const handleMarkAllAsRead = () => {
    setNotifications([]);
    setShowNotifications(false);
  }

  // 2. FIX: Use the explicit path from the item
  const handleMenuClick = (path) => {
     setShowUserMenu(false); // Close menu on click
     console.log(path)
     navigate(path);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm"
    >
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search BusinessHub..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </motion.button>

          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                {notifications.length > 0 && (
                  <button 
                    onClick={handleMarkAllAsRead}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="text-gray-400 mb-2">
                      <Bell className="w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-gray-500 text-sm">No notifications</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'warning' ? 'bg-yellow-500' :
                          notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{notification.title}</p>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-medium text-gray-800">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role || 'Employee'}</p>
            </div>
          </motion.button>

          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden"
            >
              {userMenuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 transition-colors text-sm text-gray-700"
                  onClick={() => handleMenuClick(item.path)}
                >
                  <item.icon className="w-4 h-4 text-gray-500" />
                  <span>{item.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;