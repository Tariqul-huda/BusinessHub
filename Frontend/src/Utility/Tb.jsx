import { motion } from "framer-motion";
import Button from "./Button";
import { useState } from "react";
const Tb = ({content, add_text = "Add product", box_color = {head_color:"bg-amber-100", border_color:"border-amber-300"}}) => {
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
        <Button type="add" description={add_text} onClick = {()=>setOpen(true)}/>
        </div>
        {/* Modal start */}
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
                <div className="p-2">
                    <input 
                    key={index} 
                    placeholder={`Enter ${el}`} 
                    type="text" 
                    className="p-2 border rounded w-[100%]"
                    />

                </div>
            ))
            }
            <div className="flex justify-between p-2"
            >
                {/* submission button */}
                <Button type={"add"} description={"Add"}/>
                {/* cancel modal button */}
                <Button type={"delete"} description={"Cancel"} onClick={handleDemo}/>
            </div>
        
        </form>
      
      
    </motion.div>
    {/* Modal close */}

  </div>
        }
        
        {/* Main table starts from here  */}

        <div className="flex flex-col">
            <div className={`flex flex-row font-bold ${box_color.head_color}`}>
                {head.map((el, index) => (
                    
                    <motion.div
                        key={index}
                        className={`flex-1 text-center border-2 ${box_color.border_color} p-2 `}
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
                                className={`flex-1 text-center border-2 ${box_color.border_color} p-2`}
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