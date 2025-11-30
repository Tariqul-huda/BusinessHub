// import { Sidebar } from "lucide-react"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { motion } from "framer-motion";
import Sidebar from '../Sidebar.jsx';


const Inventory = ()=>{
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { user, checkPermission } = useUser();
     const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }; 
    
    return <>
   {/* <Sidebar  isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} userRole={user.role} /> */}
             <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-y-auto p-6"
            >
                <p>hello world</p>
            </motion.div>
    </>
}
export default Inventory