'use client';

import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;
const api = process.env.NEXT_PUBLIC_API_URL;
const cookieOptions = { path: '/', expires: new Date(Date.now() + 60 * 60 * 24), secure: true }; // Set options as needed
const authService = {
  Login: async (email, password) => {
    try {
      const response = await axios.post(`${authServer}login`, {
        email,
        password,
      });

      const { accessToken } = response.data;

      // Use the setCookie function from the hook
      cookieCutter.set('accessToken', accessToken, cookieOptions);
      document.cookie += '; HttpOnly';

      return true; // Login successful
    } catch (error) {
      console.log('Login failed', error.response.data);
      return error.response.data; // Handle login error
    }
  },

  Logout: async () => {
    // Remove the JWT token from the cookie on logout
    const accessToken = cookieCutter.get('accessToken');
    try {
      const response = await axios.delete(`${authServer}logout`, { data: { token: accessToken } });
      return true; // Login successful
    } catch (error) {
      console.log('Logout failed', error.response.data);
      return error.response.data; // Handle login error
    }
  },

  IsAuthenticated: () => {
    const accessToken = cookieCutter.get('accessToken');

    if (!accessToken) {
      return false; // or handle accordingly if there is no access token
    }

    return axios
      .get(`${api}profile`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => response.data)
      .catch((error) => {
        console.log('token invalid', error.response.data);
        return false; // Handle login error
      });
  },

  GetAccesToken: () => {
    const accessToken = cookieCutter.get('accessToken');
    return accessToken;
  },
};

export default authService;
