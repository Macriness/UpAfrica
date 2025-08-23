"use client";

import { AlertTriangle } from "lucide-react";

export default function AlreadyMember() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] p-6">
      <div className="bg-[#222] rounded-2xl shadow-[8px_8px_16px_#111,-8px_-8px_16px_#2a2a2a] p-6 text-center max-w-md">
        <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white">Déjà membre</h2>
        <p className="text-gray-400 mt-2">
          Vous êtes déjà inscrit(e) en tant que membre HCDAF.
        </p>
      </div>
    </div>
  );
}
