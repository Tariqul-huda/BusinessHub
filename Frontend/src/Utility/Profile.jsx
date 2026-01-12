import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import { employees } from "../utils/employees";
import { ArrowLeft, Pencil } from "lucide-react";
import InfoItem from "./InfoItem";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
const Profile = ({ userID = null }) => {
  const navigate = useNavigate();
  const currentUser = useUser();
  const { id } = useParams();
  userID = parseInt(id);

  // Here to fetch user profile info with userID
  const user = employees.find((el) => el.employeeId === userID);
  const role = currentUser.user.role
  if (currentUser.user.role !== "admin" && currentUser.user.role !== "hr") {
    console.log(currentUser.user.role);
    return (
      <div className="p-8 text-center text-gray-500 uppercase">
        you do not have access
      </div>
    );
  }

  if (!user) {
    return <div className="p-8 text-center text-gray-500">User not found.</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6 focus:outline-none"
          >
            <ArrowLeft />
            Back
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden pb-2"
          >
            <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-700">
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
                <motion.img
                  src={user.profilePicture || "https://via.placeholder.com/150"}
                  alt={`${user.firstName} ${user.lastName}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg bg-white"
                />
              </div>
            </div>

            <div className="pt-20 pb-8 px-8">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-blue-600 font-medium mt-1">
                  {user.designation}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Employee ID: {user.employeeId}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-4">
              {/* left section */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                  Contact Information
                </h3>
                <div className="space-y-1">
                  <InfoItem label="Email" value={user.email} />
                  <InfoItem
                    label="Phone"
                    value={user.phone || user.phoneNumber}
                  />
                </div>
              </div>
              {/* right section */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Employment Details
                </h3>
                <div className="space-y-1">
                  <InfoItem label="Department" value={user.department} />
                  <InfoItem label="Type" value={user.employmentType} />
                  <InfoItem
                    label="Salary"
                    value={
                      user.salary ? `$${user.salary.toLocaleString()}` : null
                    }
                  />
                  <InfoItem label="Joined Date" value={user.dateOfJoining} />
                  <InfoItem
                    label="Status"
                    value={user.status}
                    isStatus={true}
                  />
                </div>
              </div>
            </div>
            {
              (role==="admin" || role==='hr' )&&
            <div className="flex justify-center p-3">
                    <EditButton/>
                    <DeleteButton/>
            </div>
            }
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Profile;
