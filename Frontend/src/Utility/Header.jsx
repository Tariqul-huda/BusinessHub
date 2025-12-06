import { motion } from "framer-motion"


const Header = ({itemVariants={
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }},  title, description })=>{
    return (
        
                <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </motion.div>
    )
}
export default Header