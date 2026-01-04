import { motion } from "framer-motion";
import Header from "../../Utility/Header";
import { sales } from "../../utils/sales";
import Tb from "../../Utility/Tb";

const Sales = ()=>{
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
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-y-auto p-6"
            >
                <Header title={"Sales"} description={"Here is the all sales"}/>
               <Tb
  content={sales}
  add_text="Add sales"
  box_color={{ head_color: "bg-blue-100",border_color: "border-blue-300" }}
/>

                
            </motion.div>
    </>
    )
}
export default Sales