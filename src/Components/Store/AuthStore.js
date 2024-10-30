import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7000/api/auth" : "https://auth-backend-api-ce94.onrender.com/api/auth";

axios.defaults.withCredentials = true

export const useAuthStore = create((set) => ({
    user: null,
    error: null,
    message: null,
    isAuthenticated: false,
    isCheckingAuth: true,

    signup: async (name, email, password) => {
        set({ error: null })
        try {
            const response = await axios.post(`${API_URL}/signup`, { name, email, password });
            set({ user: response.data.user, isAuthenticated: true })
        } catch (error) {
            set({ error: error.response.data.message || "Error Signing up" });
            throw error
        }
    },

    login: async (email, password) => {
        set({ error: null })
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            set({ user: response.data.user, isAuthenticated: true })
        } catch (error) {
            set({ error: error.response.data.message || "Error Signing in" });
            throw error
        }
    },

    verifyEmail: async (code) => {
        set({ error: null })
        try {
            const response = await axios.post(`${API_URL}/verify-email`, { code });
            set((state) => ({
                user: { ...state.user, isVerified: true }, // Set `isVerified` to true
                message: response.data.message,
                isAuthenticated: true
            }));
        } catch (error) {
            set({ error: error.response.data.message || "Error Verifying Email" });
            throw error
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null })
        try {
            const response = await axios.get(`${API_URL}/check-auth`)
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false })
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false })
        }
    },

    forgotPassword: async (email) => {
        set({ error: null })

        try {
            const response = await axios.post(`${API_URL}/forgot-Password`, { email })
            set({ message: response.data.message })
        } catch (error) {
            set({ error: error.response.data.message } || "Error sending reset password email")
            throw error
        }
    },

    resetPassword: async (token, password) => {
        set({ error: null })

        try {
            const response = await axios.post(`${API_URL}/reset-password/${token}`, { password })
            set({ message: response.data.message })
        } catch (error) {
            set({ error: error.response.data.message || "Error resetting password" })
            throw error
        }
    }

})) 