import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Upload, User, Mail, Briefcase, MapPin, X, Save } from "lucide-react";

const CreateProfile = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    employeeId: "",
    status: "Active",
    location: "",
  })

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, imagePreview })
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-3xl rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-blue-800 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Create Profile</h2>
            <p className="text-blue-200 text-sm mt-1">Add a new employee to the directory</p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          
          {/* Section: Profile Image */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-sm overflow-hidden bg-gray-100 flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-gray-300" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white shadow-md cursor-pointer hover:bg-blue-700 transition-colors">
                <Upload className="w-4 h-4" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-3">Allowed *.jpeg, *.jpg, *.png, *.max 2MB</p>
          </div>

          {/* Section: Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  name="firstName" 
                  required
                  placeholder="MD Tariqul"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  name="lastName"
                  required 
                  placeholder="Huda"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="tariqulhuda623@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Employee ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
              <input 
                type="text" 
                name="employeeId" 
                placeholder="EMP-001"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.employeeId}
                onChange={handleChange}
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select 
                  name="department"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">Human Resources</option>
                  <option value="Design">Design</option>
                </select>
              </div>
            </div>

             {/* Designation */}
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input 
                type="text" 
                name="designation" 
                placeholder="Senior Developer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select 
                name="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium flex items-center gap-2 shadow-md transition-all hover:shadow-lg"
            >
              <Save className="w-4 h-4" />
              Save Profile
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateProfile;