import { create } from "zustand";
import axios from "axios";
import { auth_api } from "../../api/api";


axios.defaults.withCredentials = true

export const useAuthStore = create((set) => ({
    user: null,
    error: null,
    message: null,
    isAuthenticated: false,
    isCheckingAuth: true,
    isLoading: false,

    signup: async (name, email, password) => {
        set({ error: null, isLoading: true });
        try {
            const response = await auth_api.post("/signup", { name, email, password });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false })

            localStorage.setItem("authToken", response.data.token);
        } catch (error) {
            set({ isLoading: false });

            if (error.response) {
                console.error("Error response:", error.response);
                set({ error: error.response.data.message || "Error Signing up" });
            } else if (error.request) {
                set({ error: "No response from server. Please try again later." });
            } else {
                set({ error: error.message || "An error occurred during sign up" });
            }

            throw error;
        }
    },

    login: async (email, password) => {
        set({ error: null, isLoading: true })
        try {
            const response = await auth_api.post("/login", { email, password }, { withCredentials: true });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false })

            localStorage.setItem("authToken", response.data.token);
        } catch (error) {
            set({ isLoading: false, error: error.response.data.message || "Error Signing in" });
            throw error
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null })

        try {
            await auth_api.post("logout")
            set({ user: null, isAuthenticated: false, isLoading: false, error: null })
            localStorage.removeItem("authToken");
        } catch (error) {
            set({ error: "Error Logging Out", isLoading: false })
            throw error
        }
    },

    verifyEmail: async (code) => {
        set({ error: null, isLoading: true })
        try {
            const response = await auth_api.post("/verify-email", { code });
            set((state) => ({
                user: { ...state.user, isVerified: true }, // Set `isVerified` to true
                message: response.data.message,
                isAuthenticated: true,
                isLoading: false
            }));
        } catch (error) {
            set({ isLoading: false, error: error.response.data.message || "Error Verifying Email" });
            throw error
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });

        const token = localStorage.getItem("authToken");  // Check localStorage for the token
        if (!token) {
            console.log("No token found");
            set({ isCheckingAuth: false, isAuthenticated: false });
            return;
        }

        try {
            // Include the token in the request headers to authenticate the user
            const response = await auth_api.get("/check-auth", {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true
            });

            if (response.data.isAuthenticated) {
                set({ isAuthenticated: true, user: response.data.user, isCheckingAuth: false, });
            } else {
                set({
                    user: null,
                    isAuthenticated: false,
                    isCheckingAuth: false, // ✅ set to false
                  });
            }
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false });
        }
    },




    forgotPassword: async (email) => {
        set({ error: null, isLoading: true })

        try {
            const response = await auth_api.post("/forgot-Password", { email })
            set({ message: response.data.message, isLoading: false })
        } catch (error) {
            set({ isLoading: false, error: error.response.data.message } || "Error sending reset password email")
            throw error
        }
    },

    resetPassword: async (token, password) => {
        set({ error: null, isLoading: true })

        try {
            const response = await auth_api.post("/reset-password/${token}", { password })
            set({ message: response.data.message, isLoading: false })
        } catch (error) {
            set({ isLoading: false, error: error.response.data.message || "Error resetting password" })
            throw error
        }
    },

    clearError: () => set({ error: null }),

}))