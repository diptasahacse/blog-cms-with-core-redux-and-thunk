const baseUrl =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_NODE_SERVER_API
    : "http://localhost:5000";

export default baseUrl;
