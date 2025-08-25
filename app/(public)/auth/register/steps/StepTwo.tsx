"use client";

import { useState } from "react";

export default function StepTwo() {
  const [form, setForm] = useState({
    profession: "",
  });

  return (
    <div className="h-full flex flex-col px-4 sm:px-6 md:px-8">
      {/* Section titre */}
      <h3 className="text-white font-medium text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-5">
        Statut professionnel
      </h3>

      {/* Form compact */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1">
        {/* Profession */}
        <div className="w-full">
          <label className="block text-xs sm:text-sm md:text-base text-gray-300 mb-1 sm:mb-1.5">
            Profession *
          </label>
          <input
            type="text"
            className="w-full mt-0.5 rounded bg-[#2a2a2a] border border-[#444] 
                       p-2 sm:p-3 md:p-4 
                       text-xs sm:text-sm md:text-base 
                       text-white 
                       focus:ring-1 focus:ring-orange-500 focus:border-orange-500 
                       transition-colors duration-200
                       placeholder:text-gray-500
                       min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
            placeholder="Entrepreneur Tech"
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

