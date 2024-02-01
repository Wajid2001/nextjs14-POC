import { wait } from "@/utils/wait";
import React, { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="border border-black">
      <h1>User Layout</h1>
      {children}
    </div>
  );
}
