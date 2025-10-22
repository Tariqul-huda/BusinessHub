import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertTriangle, Users, DollarSign, Brain } from 'lucide-react';

const KPI = ({ title, value, change, icon: Icon, color = "blue", trend = "up" }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    red: "bg-red-50 text-red-600 border-red-200",
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-200"
  };

  const iconClasses = {
    blue: "text-blue-500",
    green: "text-green-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    purple: "text-purple-500",
    indigo: "text-indigo-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl border-2 ${colorClasses[color]} shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium opacity-80 mb-1">{title}</p>
          <p className="text-2xl font-bold mb-2">{value}</p>
          <div className="flex items-center space-x-1">
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {change}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${iconClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export default KPI;
