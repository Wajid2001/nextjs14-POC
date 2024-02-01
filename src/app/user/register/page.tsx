import { ROUTES } from "@/utils/routes";
import { wait } from "@/utils/wait";
import Link from "next/link";

export default async function LoginPage() {
  await wait(2000);
  return (
    <>
      <h1>Register Page</h1>

      <div>
        <form>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Register</button>

          <p>
            Already have an account? <Link href={ROUTES.LOGIN}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
