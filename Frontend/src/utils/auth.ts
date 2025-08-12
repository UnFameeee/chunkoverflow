// Simple authentication utility
// In a real application, this would interact with your backend

export const isAdmin = (): boolean => {
  // For now, we'll use a simple localStorage check
  // In a real application, this would validate a JWT token or session
  return localStorage.getItem('isAdmin') === 'true';
};

export const setAdminStatus = (status: boolean): void => {
  localStorage.setItem('isAdmin', status.toString());
};

export const loginAsAdmin = (): void => {
  setAdminStatus(true);
};

export const logoutAdmin = (): void => {
  setAdminStatus(false);
};

// For demo purposes, you can set admin status in the console:
// auth.setAdminStatus(true)
// or
// localStorage.setItem('isAdmin', 'true')

export default {
  isAdmin,
  setAdminStatus,
  loginAsAdmin,
  logoutAdmin
};
