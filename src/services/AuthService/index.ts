"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/register/agent", userData);

    if (data.success) {
      const cookieStore = await cookies()
      cookieStore.set("accessToken", data?.data?.token);

    }
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.response.message,
    };
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/login", userData);

    if (data.success) {
      const cookieStore = await cookies()
      cookieStore.set("accessToken", data?.data?.token);

    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.response.message,
    };
  }
};

export const logOut = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("accessToken");

};


export const getCurrentUser = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      userId: decodedToken.id,
      email: decodedToken.email,
      role: decodedToken.role,

    };
  }

  return decodedToken;
};

