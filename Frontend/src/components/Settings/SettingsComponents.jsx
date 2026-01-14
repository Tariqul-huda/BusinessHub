
import { useState } from "react";
import { Save, Upload, Plus, Trash2, CheckCircle } from "lucide-react";

export const OrgSettingsForm = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h3 className="text-lg font-bold text-gray-800">Organization Details</h3>
        <p className="text-sm text-gray-500">This information will appear on invoices and reports.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Logo Upload */}
        <div className="flex-shrink-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-colors bg-gray-50">
            <Upload className="w-6 h-6 mb-1" />
            <span className="text-xs">Upload</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Company Name" defaultValue="BusinessHub Inc." />
          <InputGroup label="Tax ID / EIN" defaultValue="US-99887766" />
          <InputGroup label="Phone Number" defaultValue="+1 (555) 000-0000" />
          <InputGroup label="Website" defaultValue="www.businesshub.com" />
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24" defaultValue="123 Enterprise Blvd, Tech City, CA" />
          </div>

          <InputGroup label="Currency" type="select" options={["USD ($)", "EUR (€)", "GBP (£)"]} />
          <InputGroup label="Timezone" type="select" options={["(GMT-08:00) Pacific Time", "(GMT+00:00) UTC"]} />
        </div>
      </div>

      <div className="pt-6 border-t border-gray-100 flex justify-end">
        <SaveButton />
      </div>
    </div>
  );
};

// --- SYSTEM: Module Settings ---
export const ModuleSettingsForm = () => {
  const [modules, setModules] = useState([
    { id: 1, name: "HR & Payroll", desc: "Manage employees, attendance, and salaries", enabled: true },
    { id: 2, name: "Inventory Management", desc: "Track stock, warehouses, and suppliers", enabled: true },
    { id: 3, name: "Sales & CRM", desc: "Leads, customers, invoices, and quotations", enabled: false },
    { id: 4, name: "Accounting", desc: "General ledger, expenses, and financial reports", enabled: true },
  ]);

  const toggleModule = (id) => {
    setModules(modules.map(m => m.id === id ? { ...m, enabled: !m.enabled } : m));
  };

  return (
    <div className="p-6">
       <div className="border-b border-gray-100 pb-4 mb-6">
        <h3 className="text-lg font-bold text-gray-800">ERP Modules</h3>
        <p className="text-sm text-gray-500">Enable or disable modules to customize your dashboard.</p>
      </div>

      <div className="space-y-4">
        {modules.map((mod) => (
          <div key={mod.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white">
            <div>
              <h4 className="font-semibold text-gray-900">{mod.name}</h4>
              <p className="text-sm text-gray-500">{mod.desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={mod.enabled} onChange={() => toggleModule(mod.id)} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SYSTEM: Roles & Permissions ---
export const RolesPermissionsForm = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Role Management</h3>
                    <p className="text-sm text-gray-500">Define what users can do in the system.</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2">
                    <Plus className="w-4 h-4"/> Add Role
                </button>
            </div>
            
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">Role Name</th>
                            <th className="px-6 py-3">Users</th>
                            <th className="px-6 py-3">Access Level</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Super Admin</td>
                            <td className="px-6 py-4">2 Users</td>
                            <td className="px-6 py-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Full Access</span></td>
                            <td className="px-6 py-4 text-right text-gray-400">Locked</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">HR Manager</td>
                            <td className="px-6 py-4">5 Users</td>
                            <td className="px-6 py-4">HR Module (Read/Write)</td>
                            <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
                        </tr>
                         <tr>
                            <td className="px-6 py-4 font-medium text-gray-900">Employee</td>
                            <td className="px-6 py-4">120 Users</td>
                            <td className="px-6 py-4">Self Service Only</td>
                            <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// --- SYSTEM: Security ---
export const SecuritySettingsForm = () => {
    return (
        <div className="p-6 space-y-6">
             <div className="border-b border-gray-100 pb-4 mb-4">
                <h3 className="text-lg font-bold text-gray-800">Security Policies</h3>
                <p className="text-sm text-gray-500">Enforce global security standards for all users.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Password Expiry (Days)" defaultValue="90" type="number" />
                 <InputGroup label="Session Timeout (Minutes)" defaultValue="30" type="number" />
                 <InputGroup label="Minimum Password Length" defaultValue="8" type="number" />
                 
                 <div className="md:col-span-2">
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                        <span className="text-sm text-gray-700">Require special characters in passwords</span>
                    </label>
                 </div>
                 <div className="md:col-span-2">
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                        <span className="text-sm text-gray-700">Enable Two-Factor Authentication (2FA) for Admin roles</span>
                    </label>
                 </div>
            </div>
            
             <div className="pt-6 border-t border-gray-100 flex justify-end">
                <SaveButton />
            </div>
        </div>
    )
}

// --- USER: Profile ---
export const UserProfileForm = () => {
    return (
        <div className="space-y-6">
             <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-20 h-20 rounded-full border-4 border-gray-100 shadow-sm" />
                <div>
                    <button className="text-sm text-blue-600 border border-blue-200 px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors">Change Photo</button>
                    <p className="text-xs text-gray-400 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="First Name" defaultValue="John" />
                <InputGroup label="Last Name" defaultValue="Doe" />
                <InputGroup label="Email Address" defaultValue="john.doe@businesshub.com" readOnly />
                <InputGroup label="Phone Number" defaultValue="+1 234 567 890" />
                <InputGroup label="Department" defaultValue="Information Technology" readOnly className="bg-gray-50" />
                <InputGroup label="Job Title" defaultValue="Senior Developer" readOnly className="bg-gray-50" />
             </div>

             <div className="pt-4 flex justify-end">
                <SaveButton label="Update Profile" />
             </div>
        </div>
    )
}

// --- USER: Account Security ---
export const AccountSecurityForm = () => {
    return (
        <div className="max-w-xl">
             <h4 className="font-semibold text-gray-900 mb-4">Change Password</h4>
             <div className="space-y-4 mb-8">
                 <InputGroup label="Current Password" type="password" />
                 <InputGroup label="New Password" type="password" />
                 <InputGroup label="Confirm New Password" type="password" />
                 <SaveButton label="Update Password" />
             </div>

             <h4 className="font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">Login History</h4>
             <div className="space-y-3">
                 {[1,2,3].map((i) => (
                     <div key={i} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                         <div>
                             <p className="font-medium text-gray-700">Chrome on Windows</p>
                             <p className="text-gray-400 text-xs">192.168.1.1 • Oct 24, 2023 at 4:30 PM</p>
                         </div>
                         <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded border border-green-100">Active</span>
                     </div>
                 ))}
             </div>
        </div>
    )
}

// --- USER: Preferences ---
export const PreferencesForm = () => {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interface Theme</label>
                <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-blue-500 rounded-lg p-3 cursor-pointer bg-blue-50/50">
                        <div className="h-20 bg-white border border-gray-200 rounded mb-2 shadow-sm"></div>
                        <p className="text-center text-sm font-medium text-blue-700">Light</p>
                    </div>
                     <div className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-300">
                        <div className="h-20 bg-gray-800 border border-gray-700 rounded mb-2 shadow-sm"></div>
                        <p className="text-center text-sm text-gray-600">Dark</p>
                    </div>
                     <div className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-300">
                        <div className="h-20 bg-gradient-to-br from-white to-gray-200 border border-gray-200 rounded mb-2 shadow-sm"></div>
                        <p className="text-center text-sm text-gray-600">System</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
                 <label className="block text-sm font-medium text-gray-700 mb-4">Email Notifications</label>
                 <div className="space-y-3">
                     <ToggleRow label="Payroll Generated" desc="Get notified when payslips are ready" checked={true} />
                     <ToggleRow label="New Tasks Assigned" desc="Get notified when a manager assigns a task" checked={true} />
                     <ToggleRow label="System Updates" desc="News about feature updates and maintenance" checked={false} />
                 </div>
            </div>
             <div className="pt-4 flex justify-end">
                <SaveButton label="Save Preferences" />
             </div>
        </div>
    )
}

// --- HELPERS ---

const InputGroup = ({ label, type = "text", options, className = "", ...props }) => (
  <div className={props.colSpan ? `col-span-${props.colSpan}` : ""}>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {type === "select" ? (
      <select className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white ${className}`}>
        {options.map((opt, idx) => <option key={idx}>{opt}</option>)}
      </select>
    ) : (
      <input type={type} className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${className}`} {...props} />
    )}
  </div>
);

const SaveButton = ({ label = "Save Changes" }) => (
    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-sm">
        <Save className="w-4 h-4" /> {label}
    </button>
);

const ToggleRow = ({ label, desc, checked }) => (
    <div className="flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-800">{label}</p>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={checked} className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    </div>
);