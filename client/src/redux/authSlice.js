import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.token = payload;
      localStorage.setItem("token", payload);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = payload.message;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.user = payload.body;
      localStorage.setItem("user", JSON.stringify(payload.body));
    });
    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.user = payload.body;
      localStorage.setItem("user", JSON.stringify(payload.body));
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const login = createAsyncThunk("/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getProfile = createAsyncThunk(
  "/get-profile",
  async (token, thunkAPI) => {
    try {
      const profile = await authService.getProfile(token);
      return profile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const editProfile = createAsyncThunk(
  "/edit-profile",
  async (state, thunkAPI) => {
    try {
      return await authService.editProfile(state);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
