import axios, { AxiosError } from "axios";

// create an axios instance with a base URL and default headers
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Example: Add an authorization token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data, // unwrap data for simplicity
  (error: AxiosError) => {
    let message = "Something went wrong";
    if (error.response) {
      // Server errors
      message = `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      // No response received
      message = "Network error: No response received";
    } else {
      // Request setup errors
      message = error.message;
    }
    console.error("[API Error]", message);
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
