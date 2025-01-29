"use server";

import { cookies } from "next/headers";

export const getCookie = async (key) => {
  try {
    return (await cookies()).get(key);
  } catch (err) {
    return null;
  }
};
