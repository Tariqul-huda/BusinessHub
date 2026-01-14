import Header from "../../Utility/Header"
import { motion } from "framer-motion"
import Employee from "./Employee";
import Payroll from "./Payroll";

const HR = ()=>{
     const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }; 
    return (
        <> 
        <motion.div
            variants={containerVariants}
            initial = "hidden"
            animate = "visible"
            className="flex-1 overflow-y-auto p-6"
        >
        <Header title={"Human Resource Management"}></Header>
        <Employee/>
        <Payroll/>
       
        </motion.div>
        </>
    )
}
export default HR