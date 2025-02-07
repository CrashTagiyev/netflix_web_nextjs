import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const locale = (await cookies()).get("locale");

  redirect(`/${locale.value}/home`);
}

export default page;
