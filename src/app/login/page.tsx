import { actionLoginUser } from "./action";

export default function LoginPage() {
  return (
    <>
      <form action={actionLoginUser}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </>
  );
}
