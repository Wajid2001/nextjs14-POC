import { ReactNode, Suspense } from "react";

export default async function DashboardLayout({
  children,
  fragment1,
  fragment2,
}: {
  children: ReactNode;
  fragment1: ReactNode;
  fragment2: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1>Dashboard Layout</h1>
      <Suspense>{children}</Suspense>

      <div>Fragments</div>

      <div className="flex flex-row gap-2">
        <div className="border border-black w-64 h-64 p-4">
          <Suspense>{fragment1}</Suspense>
        </div>
        <div className="border border-black w-64 h-64 p-4">
          <Suspense>{fragment2}</Suspense>
        </div>
      </div>
    </div>
  );
}
