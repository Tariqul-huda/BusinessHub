import { motion } from "framer-motion";
import Button from "./Button";
import { useState } from "react";
const Tb = ({content}) => {
    const head = Object.keys(content[0]);

    const values = content.map(el => Object.values(el));
    // console.log(values);
    const [isOpen, setOpen] = useState(false)
    const handleDemo = ()=>{
        setOpen(false);
    }
    return (
        <>
        <div className="flex justify-end">
        <Button type="add" description="Add product" onClick = {()=>setOpen(true)}/>
        </div>
        {isOpen &&
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full relative"
    >
        
        <form method="POST">
            {head
            .filter((el) => el !== "ID") 
            .map((el, index) => (
                <input 
                key={index} 
                placeholder={`Enter ${el}`} 
                type="text" 
                className="p-2 border rounded"
                />
            ))
            }

        </form>
      
      <button 
        onClick={handleDemo}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Close Modal
      </button>
    </motion.div>
  </div>
        }
        
        {/* Main table starts from here  */}

        <div className="flex flex-col">
            <div className="flex flex-row font-bold bg-amber-100">
                {head.map((el, index) => (
                    
                    <motion.div
                        key={index}
                        className="flex-1 text-center border-2 border-amber-300 p-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {el}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col">
                {values.map((rowValues, rowIndex) => (
                    
                    <motion.div 
                        key={rowIndex} 
                        className="flex flex-row"
                        
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: rowIndex * 0.1 + 0.3 }} 
                    >
                        
                        {rowValues.map((v, colIndex) => (
                            
                            <motion.div 
                                key={colIndex} 
                                className="flex-1 text-center border-2 border-amber-300 p-2"
                            >
                                {v}
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
        {/* Main table ends here */}
        </>
    );
}

export default Tb;