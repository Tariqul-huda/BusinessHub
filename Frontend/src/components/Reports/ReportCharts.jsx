import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { 
   TrendingUp, PieChart as PieIcon, Users, DollarSign 
} from "lucide-react";
import { motion } from "framer-motion";


const ReportCharts = ({ data, type, isLoading }) => {
    const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
  if (isLoading) {
    return <div className="h-80 bg-gray-100 rounded-xl animate-pulse border border-gray-200" />;
  }

  if (!data) return null;

  const renderChart = () => {
    switch (type) {
      case 'sales':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'inventory':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'payroll':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Salary Spend ($)" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'finance':
        return (
           <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="profit" fill="#10B981" radius={[4, 4, 0, 0]} name="Profit" />
              <Bar dataKey="expense" fill="#EF4444" radius={[4, 4, 0, 0]} name="Expense" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize flex items-center gap-2">
        {type === 'sales' && <TrendingUp className="w-5 h-5 text-blue-600"/>}
        {type === 'inventory' && <PieIcon className="w-5 h-5 text-green-600"/>}
        {type === 'payroll' && <Users className="w-5 h-5 text-purple-600"/>}
        {type === 'finance' && <DollarSign className="w-5 h-5 text-yellow-600"/>}
        {type} Overview
      </h3>
      {renderChart()}
    </motion.div>
  );
};
export default ReportCharts