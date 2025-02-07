"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  const response = await fetch("http://localhost:5001/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const locale = (await cookies()).get("locale");
  const data = await response.json();
  if (data.token) {
    (await cookies()).set("token", data.token, { maxAge: 60 * 60 * 24 });
    redirect(`/${locale.value}/`);
  }
  return data;
};
