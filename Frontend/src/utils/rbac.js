// Role-Based Access Control (RBAC) utilities for BusinessHub

export const PERMISSIONS = {
  VIEW_SALES: 'view_sales',
  VIEW_INVENTORY: 'view_inventory', 
  VIEW_HR: 'view_hr',
  VIEW_REPORTS: 'view_reports',
  VIEW_AI: 'view_ai',
  MANAGE_USERS: 'manage_users',
  MANAGE_INVENTORY: 'manage_inventory',
  MANAGE_SALES: 'manage_sales',
  MANAGE_HR: 'manage_hr'
};

export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  SALES: 'sales',
  INVENTORY: 'inventory',
  HR: 'hr',
  EMPLOYEE: 'employee'
};

// Role permissions mapping
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_SALES,
    PERMISSIONS.VIEW_INVENTORY,
    PERMISSIONS.VIEW_HR,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.VIEW_AI,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.MANAGE_INVENTORY,
    PERMISSIONS.MANAGE_SALES,
    PERMISSIONS.MANAGE_HR
  ],
  [ROLES.MANAGER]: [
    PERMISSIONS.VIEW_SALES,
    PERMISSIONS.VIEW_INVENTORY,
    PERMISSIONS.VIEW_HR,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.VIEW_AI
  ],
  [ROLES.SALES]: [
    PERMISSIONS.VIEW_SALES,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.INVENTORY]: [
    PERMISSIONS.VIEW_INVENTORY,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.HR]: [
    PERMISSIONS.VIEW_HR,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.EMPLOYEE]: [
    PERMISSIONS.VIEW_HR
  ]
};

// Check if user has specific permission
export const hasPermission = (userRole, permission) => {
  if (!userRole || !permission) return false;
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
};

// Check if user has any of the specified permissions
export const hasAnyPermission = (userRole, permissions) => {
  if (!userRole || !permissions || !Array.isArray(permissions)) return false;
  return permissions.some(permission => hasPermission(userRole, permission));
};

// Check if user has all of the specified permissions
export const hasAllPermissions = (userRole, permissions) => {
  if (!userRole || !permissions || !Array.isArray(permissions)) return false;
  return permissions.every(permission => hasPermission(userRole, permission));
};

// Get user's available permissions
export const getUserPermissions = (userRole) => {
  if (!userRole) return [];
  return ROLE_PERMISSIONS[userRole] || [];
};

// Check if user can access specific module
export const canAccessModule = (userRole, module) => {
  const modulePermissions = {
    dashboard: [PERMISSIONS.VIEW_SALES, PERMISSIONS.VIEW_INVENTORY, PERMISSIONS.VIEW_HR],
    sales: [PERMISSIONS.VIEW_SALES],
    inventory: [PERMISSIONS.VIEW_INVENTORY],
    hr: [PERMISSIONS.VIEW_HR],
    reports: [PERMISSIONS.VIEW_REPORTS],
    ai: [PERMISSIONS.VIEW_AI]
  };

  const requiredPermissions = modulePermissions[module];
  if (!requiredPermissions) return false;
  
  return hasAnyPermission(userRole, requiredPermissions);
};

// Get accessible modules for user
export const getAccessibleModules = (userRole) => {
  const allModules = ['dashboard', 'sales', 'inventory', 'hr', 'reports', 'ai'];
  return allModules.filter(module => canAccessModule(userRole, module));
};

// Role hierarchy (higher roles inherit lower role permissions)
export const ROLE_HIERARCHY = {
  [ROLES.ADMIN]: 5,
  [ROLES.MANAGER]: 4,
  [ROLES.SALES]: 3,
  [ROLES.INVENTORY]: 3,
  [ROLES.HR]: 3,
  [ROLES.EMPLOYEE]: 1
};

// Check if user role is higher than or equal to another role
export const hasRoleLevel = (userRole, requiredRole) => {
  const userLevel = ROLE_HIERARCHY[userRole] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole] || 0;
  return userLevel >= requiredLevel;
};
