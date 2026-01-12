import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
const EditButton = ({onClick=null}) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex items-center justify-center gap-2 w-20 h-10 rounded-sm bg-blue-800 text-white shadow-md m-3"
        onClick={()=>onClick}
      >
        <Pencil className="w-4 h-4" />
        <span className="text-sm font-medium">Edit</span>
      </motion.button>
    </>
  );
};
export default EditButton;
