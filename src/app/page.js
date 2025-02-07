import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function page() {
  const locale = (await cookies()).get("locale");
  const token = (await cookies()).get("token");
  if (token) {
    return redirect(`/${locale ? locale.value : `en`}/home`);
  }

  redirect(`/${locale ? locale.value : `en`}/landing`);
}

export default page;
