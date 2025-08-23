import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#222] rounded-2xl shadow-[8px_8px_16px_#111,-8px_-8px_16px_#2a2a2a] p-6">
      {children}
    </div>
  );
}
