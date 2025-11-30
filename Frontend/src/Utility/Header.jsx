import { motion } from "framer-motion"


const Header = ({itemVariants, name })=>{
    return (
        
                <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {name}! Here's what's happening with your business.</p>
            </motion.div>
    )
}
export default Header