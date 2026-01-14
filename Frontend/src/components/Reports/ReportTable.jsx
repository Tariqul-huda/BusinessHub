import { motion } from "framer-motion";

import { 
  Search
} from "lucide-react";

const ReportTable = ({ data, type, isLoading }) => {
  const getColumns = () => {
    switch (type) {
      case 'sales':
        return ['Date', 'Order ID', 'Customer', 'Revenue', 'Profit'];
      case 'inventory':
        return ['Item Name', 'Category', 'Stock Level', 'Status', 'Total Value'];
      case 'payroll':
        return ['Employee Name', 'Department', 'Role', 'Salary', 'Status'];
      case 'finance':
        return ['Category', 'Type', 'Amount', 'Date', 'Status'];
      default:
        return [];
    }
  };

  const columns = getColumns();

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
         {[1,2,3,4,5].map(i => <div key={i} className="h-10 bg-gray-50 rounded animate-pulse" />)}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
        <div className="bg-white p-12 text-center rounded-xl border border-gray-100">
            <p className="text-gray-400">No data available for the selected range.</p>
        </div>
    );
  }

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-gray-800">Detailed Report</h3>
        <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
             <input 
                type="text" 
                placeholder="Search records..." 
                className="pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-48"
             />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="p-4 whitespace-nowrap">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                 {type === 'sales' && (
                    <>
                        <td className="p-4">{row.date}</td>
                        <td className="p-4 font-mono text-xs">{row.orderId}</td>
                        <td className="p-4 font-medium text-gray-900">{row.customer}</td>
                        <td className="p-4 text-green-600">{row.revenue}</td>
                        <td className="p-4">{row.profit}</td>
                    </>
                 )}
                 
                 {type === 'inventory' && (
                    <>
                        <td className="p-4 font-medium text-gray-900">{row.item}</td>
                        <td className="p-4">{row.category}</td>
                        <td className="p-4">{row.stock}</td>
                        <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                row.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                row.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                            }`}>{row.status}</span>
                        </td>
                        <td className="p-4">{row.value}</td>
                    </>
                 )}

                 {type === 'payroll' && (
                    <>
                        <td className="p-4 font-medium text-gray-900">{row.employee}</td>
                        <td className="p-4">{row.dept}</td>
                        <td className="p-4">{row.role}</td>
                        <td className="p-4">{row.salary}</td>
                        <td className="p-4">
                             <span className={`px-2 py-1 rounded-full text-xs ${
                                row.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>{row.status}</span>
                        </td>
                    </>
                 )}


                 {type === 'finance' && (
                    <>
                        <td className="p-4 font-medium text-gray-900">{row.category}</td>
                        <td className="p-4">
                            <span className={`font-medium ${row.type === 'Income' ? 'text-green-600' : 'text-red-500'}`}>
                                {row.type}
                            </span>
                        </td>
                        <td className="p-4">{row.amount}</td>
                        <td className="p-4">{row.date}</td>
                        <td className="p-4">
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{row.status}</span>
                        </td>
                    </>
                 )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <div className="p-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
         <span>Showing {data.length} records</span>
         <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
         </div>
      </div>
    </motion.div>
  );
};

export default ReportTable