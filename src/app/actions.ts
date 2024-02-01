import { ROUTES } from "@/utils/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const removeAllCookies = async () => {
  "use server";
  cookies().delete("name");
  cookies().delete("userType");
  cookies().delete("token");

  redirect(ROUTES.LOGIN);
};
