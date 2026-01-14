// src/pages/Settings/SystemSettings.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, Layers, ShieldCheck, CreditCard, Lock, Save 
} from "lucide-react";
import Header from "../../Utility/Header";
import { 
  OrgSettingsForm, 
  ModuleSettingsForm, 
  RolesPermissionsForm, 
  SecuritySettingsForm 
} from "./SettingsComponents";

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState("organization");

  const menuItems = [
    { id: "organization", label: "Organization", icon: Building2, desc: "Company profile & branding" },
    { id: "modules", label: "ERP Modules", icon: Layers, desc: "Enable/disable features" },
    { id: "roles", label: "Roles & Permissions", icon: ShieldCheck, desc: "Manage access levels" },
    { id: "finance", label: "Financial", icon: CreditCard, desc: "Currency, Tax & Fiscal Year" },
    { id: "security", label: "Security", icon: Lock, desc: "Password policy & sessions" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "organization": return <OrgSettingsForm />;
      case "modules": return <ModuleSettingsForm />;
      case "roles": return <RolesPermissionsForm />;
      case "security": return <SecuritySettingsForm />;
      default: return <div className="p-8 text-gray-500">Module coming soon...</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <Header title="System Administration" description="Manage global settings for BusinessHub ERP" />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                  activeTab === item.id 
                    ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100" 
                    : "text-gray-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? "text-blue-600" : "text-gray-400"}`} />
                <div>
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-xs text-gray-400 font-normal">{item.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 min-h-[500px]"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;