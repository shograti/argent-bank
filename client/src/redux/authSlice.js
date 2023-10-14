import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  isError: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.token = payload;
      localStorage.setItem("token", payload);
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.body;
      localStorage.setItem("user", JSON.stringify(payload.body));
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(editProfile.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.body;
      localStorage.setItem("user", JSON.stringify(payload.body));
    });
    builder.addCase(editProfile.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const login = createAsyncThunk("login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProfile = createAsyncThunk(
  "get-profile",
  async (token, thunkAPI) => {
    try {
      const profile = await authService.getProfile(token);
      return profile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editProfile = createAsyncThunk(
  "edit-profile",
  async (state, thunkAPI) => {
    try {
      return await authService.editProfile(state);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk("logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
});

export default authSlice.reducer;
