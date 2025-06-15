import { create } from "zustand";
import axios from "axios";
import { auth_api } from "../../api/api";


export const useAuthStore = create((set) => ({
  user: null,
  error: null,
  message: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  isLoading: false,

  // SIGN UP
  signup: async (name, email, password) => {
    set({ error: null, isLoading: true });
    try {
        const response = await auth_api.post('/signup', { name, email, password }, { withCredentials: true });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Error signing up. Please try again.";
      set({ error: message });
      throw error;
    }
  },

  // LOGIN
  login: async (email, password) => {
    set({ error: null, isLoading: true });
    try {
        const response = await auth_api.post('/login', { email, password });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      const message =
        error?.response?.data?.message || error?.message || "Error signing in";
      set({ error: message });
      throw error;
    }
  },

  // LOGOUT
  logout: async () => {
    set({ error: null, isLoading: true });
    try {
      const response = await auth_api.post('/logout');
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: "Error logging out",
      });
      throw error;
    }
  },

  // VERIFY EMAIL
  verifyEmail: async (code) => {
    set({ error: null, isLoading: true });
    try {
      const response = await auth_api.post('/verify-email', { code });
      set((state) => ({
        user: { ...state.user, isVerified: true },
        message: response.data.message,
        isAuthenticated: true,
        isLoading: false,
      }));
    } catch (error) {
      set({
        isLoading: false,
        error:
          error?.response?.data?.message ||
          "Error verifying email. Please try again.",
      });
      throw error;
    }
  },

  // CHECK AUTHENTICATION ON PAGE RELOAD
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
        const response = await auth_api.get('/check-auth', { withCredentials: true });

        if (response.data.isAuthenticated) {
            set({
                user: response.data.user,
                isAuthenticated: true,
                isCheckingAuth: false,
            });
        } else {
            console.log("User is not authenticated");
            set({
                user: null,
                isAuthenticated: false,
                isCheckingAuth: false,
            });
        }
    } catch (error) {
        console.error("Error checking authentication:", error);
        set({
            user: null,
            isAuthenticated: false,
            isCheckingAuth: false,
        });
    }
},
  

  // FORGOT PASSWORD
  forgotPassword: async (email) => {
    set({ error: null, isLoading: true });
    try {
      const response = await auth_api.post('/forgot-password', { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error?.response?.data?.message ||
          "Error sending password reset email",
      });
      throw error;
    }
  },

  // RESET PASSWORD
  resetPassword: async (token, password) => {
    set({ error: null, isLoading: true });
    try {
      const response = await auth_api.post(`/reset-password/${token}`, { password });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error?.response?.data?.message ||
          "Error resetting password",
      });
      throw error;
    }
  },

  // CLEAR ERRORS
  clearError: () => set({ error: null }),
}));
