// import { Sidebar } from "lucide-react"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { motion } from "framer-motion";
import Sidebar from '../Sidebar.jsx';
import Header from "../../Utility/Header.jsx";
import { product } from "../../utils/prod.js";
import Tb from "../../Utility/Tb.jsx";


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
             <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-y-auto p-6"
            >
                <Header title={"Inventory"} description={"Here is the list of products"}/>
                <Tb content={product}/>
                
            </motion.div>
    </>
}
export default Inventory