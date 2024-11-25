// Use the environment variable for the base URL or default to local development URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:1001/api/v1";

// Define the API endpoints using the base URL
export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;
