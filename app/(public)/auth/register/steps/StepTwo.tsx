"use client";

import { useState } from "react";

export default function StepTwo() {
  const [form, setForm] = useState({
    profession: "",
  });

  return (
    <div className="h-full flex flex-col">
      {/* Info obligatoire */}
      <div className="flex items-center gap-2 bg-[#2a2a2a] text-gray-300 text-xs sm:text-sm p-3 rounded-md mb-3 border-l-4 border-l-orange-500 border border-[#3a3a3a]">
        <div className="flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full">
          <span className="text-white font-bold text-xs">i</span>
        </div>
        <span>
          Les champs suivis d&apos;une étoile (<span className="text-orange-500">*</span>) sont obligatoires
        </span>
      </div>

      {/* Section titre */}
      <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg mb-3">
        Statut professionnel
      </h3>

      {/* Form */}
      <div className="space-y-3 flex-1">
        {/* Profession */}
        <div>
          <label className="text-xs sm:text-sm text-gray-300">Profession *</label>
          <input
            type="text"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
            placeholder="Entrepreneur Tech"
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

