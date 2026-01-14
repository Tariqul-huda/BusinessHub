
import { Calculator,FileText, Calendar } from "lucide-react";

const GeneratePayroll = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Configuration Card */}
      <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
           <Calculator className="w-5 h-5 text-blue-600"/> Run Payroll
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Month</label>
            <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="month" className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-700">Employees Selected:</span>
                <span className="font-bold text-blue-900">142</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-blue-700">Est. Total:</span>
                <span className="font-bold text-blue-900">$156,420</span>
            </div>
          </div>

          <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-md transition-all flex items-center justify-center gap-2">
             <Calculator className="w-4 h-4" /> Calculate & Preview
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[300px]">
         <div className="p-4 bg-gray-50 rounded-full mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
         </div>
         <h3 className="text-lg font-medium text-gray-900">Ready to Process</h3>
         <p className="text-gray-500 max-w-sm mt-2">Select a month and click Calculate to view a breakdown of salaries, deductions, and net pay before finalizing.</p>
      </div>
    </div>
  );
};

export default GeneratePayroll