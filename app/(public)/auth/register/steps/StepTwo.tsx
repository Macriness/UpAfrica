"use client";

import { useState } from "react";

export default function StepTwo() {
  const [form, setForm] = useState({
    profession: "",
  });

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-white font-medium text-sm">Statut professionnel</h3>

      <div>
        <label className="text-xs text-gray-300">Profession *</label>
        <input
          type="text"
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
          placeholder="Entrepreneur Tech"
          value={form.profession}
          onChange={(e) => setForm({ ...form, profession: e.target.value })}
        />
      </div>
    </div>
  );
}

