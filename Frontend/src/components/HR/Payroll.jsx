import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  DollarSign, 
  Calendar, 
  Download, 
  Filter, 
  Plus, 
  Save, 
  User, 
  FileText,
  CheckCircle,
  Clock,
  Calculator
} from "lucide-react";
import Header from "../../Utility/Header";
import PayrollTable from "./PayrollTable";
import GeneratePayroll from "./GeneratePayroll";
import SalaryStructure from "./SalaryStructure";

// --- Mock Data ---
const payrollHistory = [
  { id: 1, name: "John Doe", empId: "EMP001", month: "Oct 2023", gross: 5500.00, net: 4800.00, status: "Paid", date: "2023-10-31" },
  { id: 2, name: "Sarah Smith", empId: "EMP002", month: "Oct 2023", gross: 6200.00, net: 5400.00, status: "Pending", date: "-" },
  { id: 3, name: "Mike Johnson", empId: "EMP003", month: "Sep 2023", gross: 4500.00, net: 4100.00, status: "Paid", date: "2023-09-30" },
];

const Payroll = () => {
  const [activeTab, setActiveTab] = useState("history"); 

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <Header title="Payroll Management" description="Manage salaries, structures, and payslips" />
          
          {/* Tab Navigation */}
          <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            {['history', 'generate', 'structure'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab === 'history' && 'Payroll History'}
                {tab === 'generate' && 'Generate Payroll'}
                {tab === 'structure' && 'Salary Setup'}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {activeTab === 'history' && <PayrollHistory />}
            {activeTab === 'generate' && <GeneratePayroll />}
            {activeTab === 'structure' && <SalaryStructure />}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};


// 1. Payroll History & List View
const PayrollHistory = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Table */}
      <div className="overflow-x-auto">
        <PayrollTable payrollHistory={payrollHistory}/>
      </div>
    </div>
  );
};


export default Payroll;