import axios from "axios";
const API_URL = "http://localhost:4000/api/employees/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data ) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
  }

  return  response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);


  if (response.data && typeof window !== 'undefined') {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
  }


  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("name")
  localStorage.removeItem("token");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
