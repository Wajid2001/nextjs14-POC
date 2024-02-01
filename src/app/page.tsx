import { cookies } from "next/headers";

export default function Home() {
  const user = cookies().get("name")?.value || "";
  const userType = cookies().get("userType")?.value || "";

  if (userType === "admin") {
    return (
      <>
        <h1>Welcome {user}!</h1>
        <h2>Admin Page</h2>
      </>
    );
  }

  return (
    <>
      <h1>Welcome {user}!</h1>
    </>
  );
}
