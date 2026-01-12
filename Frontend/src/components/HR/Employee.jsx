import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { employees } from "../../utils/employees";
import Header from "../../Utility/Header";
import AddButton from "../../Utility/AddButton";

const Employee = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleProfile = (user) => {
    navigate(`profile/${user.employeeId}`);
  };

  const handleAddEmployee = () => {
   
    navigate('add'); 
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

          <div className="flex-1">
             <Header title="Employee Directory" description={"Manage and view your team members"}/>
          </div>
          <div className="flex-shrink-0">
             <AddButton onClick={handleAddEmployee} />
          </div>
        </div>

        {/* Employee Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {employees.map((user) => (
            <motion.div
              key={user.employeeId || user.email}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col transition-shadow"
            >
              <div className="p-6 flex flex-col items-center pb-4 border-b border-gray-50">
                <div className="relative">
                    <img
                      src={user.profilePicture || "https://via.placeholder.com/150"}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 shadow-sm"
                    />
                    <span className={`absolute bottom-1 right-1 w-4 h-4 border-2 border-white rounded-full ${
                        user.status?.toLowerCase() === 'active' ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                </div>
                
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {user.designation}
                </p>
              </div>
              <div className="p-4 bg-gray-50 flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>ID:</span>
                  <span className="font-semibold text-gray-700">{user.employeeId}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Dept:</span>
                  <span className="font-semibold text-gray-700">{user.department}</span>
                </div>
              </div>
              <div className="p-4 pt-0 bg-gray-50">
                <button
                  onClick={() => handleProfile(user)}
                  className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Employee;