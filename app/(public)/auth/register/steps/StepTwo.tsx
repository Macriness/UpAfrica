"use client";

import { useState } from "react";

export default function StepTwo() {
  const [form, setForm] = useState({
    profession: "",
  });

  return (
    <div className="h-full flex flex-col">
      {/* Section titre */}
      <h3 className="text-white font-medium text-sm mb-3">Statut professionnel</h3>

      {/* Form compact */}
      <div className="space-y-2 sm:space-y-3 flex-1">
        {/* Profession */}
        <div>
          <label className="text-xs text-gray-300">Profession *</label>
          <input
            type="text"
            className="w-full mt-0.5 rounded bg-[#2a2a2a] border border-[#444] p-2 text-xs text-white focus:ring-1 focus:ring-orange-500"
            placeholder="Entrepreneur Tech"
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

