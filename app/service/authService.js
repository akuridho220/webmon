// AuthService.js
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${authServer}login`, {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      // Save the JWT token in a cookie
      Cookies.set('accessToken', accessToken, { expires: 1 });
      Cookies.set('name', user.name, { expires: 1 });
      Cookies.set('jenis', user.jenis, { expires: 1 });
      Cookies.set('jabatan', user.jabatan, { expires: 1 });

      return true; // Login successful
    } catch (error) {
      console.error('Login failed', error);
      throw error; // Handle login error
    }
  },

  logout: () => {
    // Remove the JWT token from the cookie on logout
    Swal.fire({
      icon: 'success',
      title: 'Logout successful',
      text: 'See you soon!',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('accessToken');
        Cookies.remove('name');
        Cookies.remove('jenis');
        Cookies.remove('jabatan');
        window.location.href = '/login';
      }
    });
  },

  isAuthenticated: () => {
    // Check if the JWT token exists
    const accessToken = Cookies.get('accessToken');
    return !!accessToken;
  },

  getAccessToken: () => {
    // Get the stored JWT token
    console.log(Cookies.get('accessToken'));
    return Cookies.get('accessToken');
  },

  getUser: () => {
    // Get the stored user
    const name = Cookies.get('name');
    const jenis = Cookies.get('jenis');
    const jabatan = Cookies.get('jabatan');
    const user = { name, jenis, jabatan };
    console.log(name, jenis, jabatan);
    return user;
  },
};

export default authService;
