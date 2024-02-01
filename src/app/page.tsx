import { cookies } from "next/headers";
import { removeAllCookies } from "./actions";

function LogoutBtn() {
  return (
    <form action={removeAllCookies}>
      <button className="underline hover:text-blue-500">logout</button>
    </form>
  );
}

export default async function Home() {
  const user = cookies().get("name")?.value || "";
  const userType = cookies().get("userType")?.value || "";

  if (userType === "admin") {
    return (
      <>
        <h1>Welcome {user}!</h1>
        <h2>Admin Page</h2>
        <LogoutBtn />
      </>
    );
  }

  return (
    <>
      <h1>Welcome {user}!</h1>
      <LogoutBtn />
    </>
  );
}
