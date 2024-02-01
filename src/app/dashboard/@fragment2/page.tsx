import { wait } from "@/utils/wait";

export default async function Fragment2() {
  await wait(1000);
  return (
    <>
      <h1>Fragment2</h1>
    </>
  );
}
