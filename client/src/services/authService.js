const authService = {
  login: async (user) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL_USER}/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      },
    );
    const data = await response.json();
    if (response.ok) {
      return data.body.token;
    } else {
      return Promise.reject(data);
    }
  },

  getProfile: async (token) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL_USER}/profile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      },
    );
    const user = await response.json();
    if (response.ok) {
      return user;
    } else {
      return Promise.reject(user);
    }
  },

  editProfile: async (state) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL_USER}/profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify(state.user),
      },
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  },
};

export default authService;
