import { CheckCircle,FileText,Clock } from "lucide-react"

const PayrollTable = ({payrollHistory})=>{
    return (
    <>
            <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-100">
            <tr>
              <th className="p-4">Employee</th>
              <th className="p-4">Month</th>
              <th className="p-4">Gross Salary</th>
              <th className="p-4">Net Salary</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {payrollHistory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.empId}</p>
                  </div>
                </td>
                <td className="p-4">{item.month}</td>
                <td className="p-4 text-gray-500">${item.gross.toLocaleString()}</td>
                <td className="p-4 font-semibold text-gray-900">${item.net.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Paid' 
                      ? 'bg-green-50 text-green-700 border border-green-100' 
                      : 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                  }`}>
                    {item.status === 'Paid' ? <CheckCircle className="w-3 h-3"/> : <Clock className="w-3 h-3"/>}
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors" title="Download Payslip">
                    <FileText className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
    )
}
export default PayrollTable