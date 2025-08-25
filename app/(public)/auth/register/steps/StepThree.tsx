"use client";

import { useState } from "react";

export default function StepThree() {
  const [form, setForm] = useState({
    motivation: "",
    contribution: "",
  });

  return (
    <div className="h-full flex flex-col px-4 sm:px-6 md:px-8">
      {/* Form compact */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 flex-1">
        {/* Motivation */}
        <div className="w-full">
          <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 sm:mb-1.5 md:mb-2 block">
            Motivation pour rejoindre UpAfrica *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] 
                       p-2 sm:p-3 md:p-4 
                       text-xs sm:text-sm md:text-base 
                       text-white 
                       focus:ring-1 focus:ring-orange-500 focus:border-orange-500 
                       transition-colors duration-200
                       placeholder:text-gray-500
                       resize-none
                       min-h-[80px] sm:min-h-[96px] md:min-h-[112px]"
            placeholder="Je souhaite rejoindre UpAfrica pour contribuer..."
            rows={4}
            value={form.motivation}
            onChange={(e) => setForm({ ...form, motivation: e.target.value })}
          />
          <div className="text-right text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1.5">
            {form.motivation.length}/500 caractères
          </div>
        </div>

        {/* Contribution */}
        <div className="w-full">
          <label className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 sm:mb-1.5 md:mb-2 block">
            Comment comptez-vous contribuer ? *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] 
                       p-2 sm:p-3 md:p-4 
                       text-xs sm:text-sm md:text-base 
                       text-white 
                       focus:ring-1 focus:ring-orange-500 focus:border-orange-500 
                       transition-colors duration-200
                       placeholder:text-gray-500
                       resize-none
                       min-h-[80px] sm:min-h-[96px] md:min-h-[112px]"
            placeholder="Je peux apporter mon expertise..."
            rows={4}
            value={form.contribution}
            onChange={(e) => setForm({ ...form, contribution: e.target.value })}
          />
          <div className="text-right text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1.5">
            {form.contribution.length}/500 caractères
          </div>
        </div>
      </div>
    </div>
  );
}

