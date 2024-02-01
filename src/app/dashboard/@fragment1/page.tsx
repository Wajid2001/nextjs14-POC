import { wait, waitReject } from "@/utils/wait";

export default async function Fragment1() {
  await wait(4000);

  return (
    <>
      <h1>Fragment1</h1>
    </>
  );
}
