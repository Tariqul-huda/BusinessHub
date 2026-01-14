import { FileText,Calendar,RefreshCw,Download } from "lucide-react";

const ReportFilters = ({ reportType, setReportType, isLoading }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-end">
        
        {/* Filter Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full lg:w-3/4">
          
          {/* Report Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Report Type</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white appearance-none cursor-pointer"
              >
                <option value="sales">Sales & Revenue</option>
                <option value="inventory">Inventory Distribution</option>
                <option value="payroll">Payroll & Salaries</option>
                <option value="finance">Financial Overview</option>
              </select>
            </div>
          </div>

          {/* Date Range - From */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-600" />
            </div>
          </div>

          {/* Date Range - To */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-600" />
            </div>
          </div>

          {/* Conditional Filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
              {reportType === 'sales' ? 'Customer' : reportType === 'inventory' ? 'Category' : 'Department'}
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option>All</option>
              <option>Option A</option>
              <option>Option B</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 w-full lg:w-auto">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors flex items-center gap-2">
             <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
             <span className="hidden sm:inline">Refresh</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-md transition-colors flex items-center gap-2 flex-1 justify-center lg:flex-none">
             <Download className="w-4 h-4" />
             Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportFilters