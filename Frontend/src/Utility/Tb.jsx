import { motion } from "framer-motion";

const Tb = ({content}) => {
    const head = Object.keys(content[0]);

    const values = content.map(el => Object.values(el));
    // console.log(values);

    return (
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

            {/* 2. Table Data Rows */}
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
    );
}

export default Tb;