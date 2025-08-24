"use client";

import { useState } from "react";

export default function StepThree() {
  const [form, setForm] = useState({
    motivation: "",
    contribution: "",
  });

  return (
    <div className="h-full flex flex-col">
      {/* Info obligatoire */}
      <div className="flex items-center gap-2 bg-[#2a2a2a] text-gray-300 text-xs sm:text-sm p-3 rounded-md mb-3 border-l-4 border-l-orange-500 border border-[#3a3a3a]">
        <div className="flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full">
          <span className="text-white font-bold text-xs">i</span>
        </div>
        <span>
          Les champs suivis d&apos;une étoile (<span className="text-orange-500">*</span>) sont
          obligatoires
        </span>
      </div>

      {/* Form */}
      <div className="space-y-4 flex-1">
        {/* Motivation */}
        <div>
          <label className="text-xs sm:text-sm lg:text-base text-gray-300 mb-1 block">
            Motivation pour rejoindre UpAfrica *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] p-2 sm:p-3 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500 resize-none"
            placeholder="Je souhaite rejoindre UpAfrica pour contribuer..."
            rows={4}
            maxLength={500}
            value={form.motivation}
            onChange={(e) => setForm({ ...form, motivation: e.target.value })}
          />
          <div className="text-right text-xs sm:text-sm text-gray-500 mt-1">
            {form.motivation.length}/500 caractères
          </div>
        </div>

        {/* Contribution */}
        <div>
          <label className="text-xs sm:text-sm lg:text-base text-gray-300 mb-1 block">
            Comment comptez-vous contribuer ? *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] p-2 sm:p-3 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500 resize-none"
            placeholder="Je peux apporter mon expertise..."
            rows={4}
            maxLength={500}
            value={form.contribution}
            onChange={(e) => setForm({ ...form, contribution: e.target.value })}
          />
          <div className="text-right text-xs sm:text-sm text-gray-500 mt-1">
            {form.contribution.length}/500 caractères
          </div>
        </div>
      </div>
    </div>
  );
}

