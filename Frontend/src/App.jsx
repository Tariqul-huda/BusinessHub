import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import Parent from "./Parent";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-gray-50">
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main/*" element = {<Parent/>} />  
            
            <Route path="*" element={<Navigate to="/" replace />} />
            
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
