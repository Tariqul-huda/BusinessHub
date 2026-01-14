
import {User,Save} from 'lucide-react'

const SalaryStructure = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
       <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">Update Salary Structure</h3>
            <button className="text-sm text-blue-600 hover:underline">View History</button>
       </div>

       <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employee Selection */}
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Employee</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>Select an employee...</option>
                        <option>Tariqul Huda (EMP001)</option>
                        <option>Antor (EMP002)</option>
                    </select>
                </div>
            </div>

            {/* Earnings Section */}
            <div className="space-y-4">
                <h4 className="font-semibold text-green-700 border-b border-green-100 pb-2 mb-4">Earnings</h4>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Basic Salary</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input type="number" className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 outline-none" placeholder="0.00"/>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">HRA (Housing)</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input type="number" className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 outline-none" placeholder="0.00"/>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Special Allowance</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input type="number" className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 outline-none" placeholder="0.00"/>
                    </div>
                </div>
            </div>

            {/* Deductions Section */}
            <div className="space-y-4">
                <h4 className="font-semibold text-red-700 border-b border-red-100 pb-2 mb-4">Deductions</h4>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tax (TDS)</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input type="number" className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none" placeholder="0.00"/>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Provident Fund</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input type="number" className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none" placeholder="0.00"/>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="md:col-span-2 pt-6 flex justify-end gap-3 border-t border-gray-100 mt-2">
                <button type="button" className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Reset</button>
                <button type="button" className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Structure
                </button>
            </div>
       </form>
    </div>
  );
}

export default SalaryStructure