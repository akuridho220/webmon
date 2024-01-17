// AuthService.js

import axios from 'axios';
import Cookies from 'js-cookie';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${authServer}login`, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      // Save the JWT token in a cookie
      Cookies.set('accessToken', accessToken, { expires: 1 }); // Adjust the expiration as needed
      Cookies.set('refreshToken', refreshToken, { expires: 7 }); // Adjust the expiration as needed

      return true; // Login successful
    } catch (error) {
      console.error('Login failed', error);
      throw error; // Handle login error
    }
  },

  logout: () => {
    // Remove the JWT token from the cookie on logout
    Cookies.remove('accessToken');
  },

  isAuthenticated: () => {
    // Check if the JWT token exists
    const accessToken = Cookies.get('accessToken');
    return !!accessToken;
  },

  getAccessToken: () => {
    // Get the stored JWT token
    return Cookies.get('accessToken');
  },
};

export default authService;
