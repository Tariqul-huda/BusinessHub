import Sidebar from "./components/Sidebar"
import { useState } from "react"
import { useUser } from "./contexts/UserContext";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import TopBar from "./components/TopBar";

const Parent = ()=>{
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { user, checkPermission } = useUser();
    
    const sidebarWidth = isCollapsed ? '80px' : '280px'
    return(
        <>
              
            <Sidebar 
                isCollapsed={isCollapsed} 
                setIsCollapsed={setIsCollapsed} 
                userRole={user.role} 
            />
            <div 
                style={{ 
                    paddingLeft: sidebarWidth, 
                    transition: 'padding-left 0.3s ease',
                    width: '100%', 
                    minHeight: '100vh',
                }}
            >
                <TopBar user={user} />
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} /> 
                    <Route path="inventory" element = {<Inventory/>}/>
                    <Route index element={<Dashboard />} /> 
                </Routes>
            </div>
        </>
    ) 
}
export default Parent