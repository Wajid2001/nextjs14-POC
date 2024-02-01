"use client";

export default function ErrorFragment1({ error }: { error: Error }) {
  return (
    <>
      <h1>
        Error while loading this Fragment1
        <code>{error.message}</code>
      </h1>
    </>
  );
}
