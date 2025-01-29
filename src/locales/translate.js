
import { cookies } from "next/headers";
import { t } from "../locales/locale";

export const translate = (key) => {
  const locale = cookies().get("locale").value;
  return t[locale][key];
};
