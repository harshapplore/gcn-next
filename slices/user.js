import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxios } from "setups/axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await authAxios()({
    url: "users/me",
    method: "GET",
  });

  console.log(response, response.data);

  return response.data;
});

export const fetchSeller = createAsyncThunk(
  "user/fetchSeller",
  async () => {
    const response = await authAxios()({
      url: "/sellers/me",
    });

    return response.data;
  }
);

export const updateRole = createAsyncThunk("users/updateRole", async () => {
  const response = await authAxios()({
    url: "users/me",
    method: "GET",
  });

  const user = response.data;

  if (user.role.type === "authenticated") {
    const res = await authAxios()({
      url: "users/role",
      method: "put",
      data: {
        role: user.type,
      },
    });

    if (!res) return user;

    return res.data;
  }

  return user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {},
    seller: {},
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      console.log(action);
    },
    [fetchUser.rejected]: (state, _) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    [fetchUser.pending]: (state, _) => {
      state.isLoggedIn = false;
      state.user = {};
    },

    [updateRole.fulfilled]: (state, action) => {
      state.user = action.payload;
    },

    [updateRole.pending]: (state, _) => {
      state.user = {};
    },

    [updateRole.rejected]: (state, _) => {
      state.user = {};
    },

    [fetchSeller.fulfilled]: (state, action) => {
      state.seller = action.payload;
    },

    [fetchSeller.pending]: (state, _) => {
      state.seller = {};
    },

    [fetchSeller.rejected]: (state, _) => {
      state.seller = {};
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
