"use client";

import { CheckCircle } from "lucide-react";

interface ConfirmModalProps {
  onClose: () => void;
}

export default function ConfirmModal({ onClose }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#222] p-6 rounded-2xl shadow-[8px_8px_16px_#111,-8px_-8px_16px_#2a2a2a] text-center max-w-sm w-full">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">Inscription réussie</h2>
        <p className="text-gray-400 mb-6">
          Félicitations 🎉 Vous êtes maintenant membre officiel HCDAF.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md transition"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
