// src/pages/Settings/ProfileSettings.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Key, Bell, Shield } from "lucide-react";
import Header from "../../Utility/Header";
import { 
  UserProfileForm, 
  AccountSecurityForm, 
  PreferencesForm 
} from "./SettingsComponents";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "account", label: "Account Security", icon: Key },
    { id: "preferences", label: "Preferences", icon: Bell },
    { id: "myrole", label: "My Permissions", icon: Shield },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <Header title="Account Settings" description="Manage your personal information and preferences" />

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
          {/* Top Tabs Navigation */}
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === item.id
                    ? "border-blue-600 text-blue-600 bg-blue-50/30"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {activeTab === "profile" && <UserProfileForm />}
              {activeTab === "account" && <AccountSecurityForm />}
              {activeTab === "preferences" && <PreferencesForm />}
              {activeTab === "myrole" && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                    <Shield className="w-12 h-12 text-gray-300 mx-auto mb-3"/>
                    <h3 className="text-gray-900 font-medium">Read Only Access</h3>
                    <p className="text-gray-500 text-sm">You are viewing this system as an <span className="font-bold text-blue-600">Admin</span>.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;