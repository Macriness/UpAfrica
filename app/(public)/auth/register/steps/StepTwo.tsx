"use client";

import { useState } from "react";

export default function StepTwo() {
  const [form, setForm] = useState({
    profession: "",
  });

  return (
    <div className="h-full flex flex-col">
      {/* Info obligatoire */}
      <div className="flex items-center gap-1 bg-[#2a2a2a] text-gray-300 text-xs p-1.5 rounded mb-3 border border-[#3a3a3a]">
        <span className="text-orange-500 font-bold text-xs">ℹ</span>
        <span className="text-xs">
          <span className="text-orange-500">*</span> = obligatoire
        </span>
      </div>

      {/* Section titre */}
      <h3 className="text-white font-medium text-sm mb-3">Statut professionnel</h3>

      {/* Form compact */}
      <div className="space-y-2 flex-1">
        {/* Profession */}
        <div>
          <label className="text-xs text-gray-300">Profession *</label>
          <input
            type="text"
            className="w-full mt-0.5 rounded bg-[#2a2a2a] border border-[#444] p-1.5 text-xs text-white focus:ring-1 focus:ring-orange-500"
            placeholder="Entrepreneur Tech"
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

