// import { Sidebar } from "lucide-react"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Sidebar from '../Sidebar.jsx';


const Inventory = ()=>{
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { user, checkPermission } = useUser();
    
    
    return <>
   {/* <Sidebar  isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} userRole={user.role} /> */}
    </>
}
export default Inventory