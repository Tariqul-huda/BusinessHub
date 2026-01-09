import { createContext, useContext, useState, useEffect } from 'react';
import { hasPermission, getUserPermissions, canAccessModule } from '../utils/rbac';


const UserContext = createContext();
export const useUser = ()=>{
  const context = useContext(UserContext)
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "MD. Tariqul Huda",
    email: "tariqulhuda6@gmail.com",
    role: "admin", // admin, manager, sales, inventory, hr, employee
    avatar: null,
    permissions: [],
    lastLogin: new Date().toISOString()
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Update user permissions when role changes
  useEffect(() => {
    const permissions = getUserPermissions(user.role);
    setUser(prev => ({ ...prev, permissions }));
  }, [user.role]);

  // Authentication methods
  const login = async (credentials) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, validate with backend
      const mockUsers = {
        admin: { name: "Admin User", email: "admin@businesshub.com", role: "admin" },
        manager: { name: "Manager User", email: "manager@businesshub.com", role: "manager" },
        sales: { name: "Sales Rep", email: "sales@businesshub.com", role: "sales" },
        inventory: { name: "Inventory Manager", email: "inventory@businesshub.com", role: "inventory" },
        hr: { name: "HR Manager", email: "hr@businesshub.com", role: "hr" },
        employee: { name: "Employee", email: "employee@businesshub.com", role: "employee" }
      };

      const userData = mockUsers[credentials.role] || mockUsers.admin;
      setUser({
        ...userData,
        id: Math.random(),
        avatar: null,
        permissions: getUserPermissions(userData.role),
        lastLogin: new Date().toISOString()
      });
      setIsAuthenticated(true);
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Clear any stored tokens, etc.
    localStorage.removeItem('authToken');
  };

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const changeRole = (newRole) => {
    setUser(prev => ({
      ...prev,
      role: newRole,
      permissions: getUserPermissions(newRole)
    }));
  };

  // Permission checking methods
  const checkPermission = (permission) => {
    return hasPermission(user.role, permission);
  };

  const checkModuleAccess = (module) => {
    return canAccessModule(user.role, module);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUser,
    changeRole,
    checkPermission,
    checkModuleAccess,
    hasPermission: checkPermission,
    hasModuleAccess: checkModuleAccess
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
