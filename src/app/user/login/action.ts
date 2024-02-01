"use server";

import { ROUTES } from "@/utils/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * This action handles the form submit of login page
 */
export async function actionLoginUser(formData: FormData) {
  const username = (formData.get("username") as string) || "";
  const password = formData.get("password") || "";

  cookies().set("name", username, { secure: true, httpOnly: true });
  cookies().set("userType", "admin", { secure: true, httpOnly: true });
  cookies().set("token", "1234567890", { secure: true, httpOnly: true });

  redirect(ROUTES.HOME);
}
