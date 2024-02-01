import Link from "next/link";
import { actionLoginUser } from "./action";
import { ROUTES } from "@/utils/routes";

export default function LoginPage() {
  return (
    <>
      <form action={actionLoginUser}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>

        <p>
          Dont have an account? <Link href={ROUTES.REGISTER}>Register</Link>
        </p>
      </form>
    </>
  );
}
