import { useState, useEffect } from "react";

import Header from "../../Utility/Header"; 
import { MOCK_DATA } from "../../utils/mock_report";
import ReportFilters from "./ReportFilters";
import ReportCharts from "./ReportCharts";
import ReportTable from "./ReportTable";



const Reports = () => {
  const [reportType, setReportType] = useState("sales");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  
  // for backend
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(MOCK_DATA[reportType]);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [reportType]);

  return (
    <div className="bg-gray-50 min-h-screen p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <Header 
          title="Business Reports" 
          description="Analyze performance, track inventory, and view financial statements." 
        />

        {/* 1. Filters Section */}
        <ReportFilters
          reportType={reportType} 
          setReportType={setReportType} 
          isLoading={loading}
        />

        {/* 2. Charts Section */}
        <ReportCharts
          data={data?.chart} 
          type={reportType} 
          isLoading={loading} 
        />

        {/* 3. Table Section */}
        <ReportTable
          data={data?.table} 
          type={reportType} 
          isLoading={loading} 
        />

      </div>
    </div>
  );
};



export default Reports;