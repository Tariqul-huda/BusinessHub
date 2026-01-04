import Sidebar from "./components/Sidebar"
import { useState,useContext } from "react"

import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import TopBar from "./components/TopBar";
import { UserProvider } from './contexts/UserContext.jsx';
import { useUser } from "./contexts/UserContext.jsx"; 
import Sales from "./components/Sales/Sales.jsx";
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
                    <Route path = "sales" element = {<Sales/>}/>
                </Routes>
            </div>
        </>
    ) 
}
export default Parent