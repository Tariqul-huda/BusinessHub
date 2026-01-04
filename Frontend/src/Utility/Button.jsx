import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
const Button = ({type, description, onClick})=>{
    return (
        <>
        { type==="add" &&
        <motion.button
        initial={false}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9, background:"green"}}
        className={`bg-green-500 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow font-medium flex items-center gap-2 mb-4 text-white`}
        onClick={onClick}
        >
          
            <Plus className="inline" size={20}/>  
            {description}
        </motion.button>
        }
        {
            type==="delete" &&
                   <motion.button
        initial={false}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9, background:"red"}}
        className={`bg-red-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow font-medium flex items-center gap-2 mb-4 text-white`}
        onClick={onClick}
        >
          
            {description}
        </motion.button>

        }

        </>
    );
}
export default Button