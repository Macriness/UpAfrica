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
      <div className="flex items-center gap-1 bg-[#2a2a2a] text-gray-300 text-xs p-1.5 rounded mb-3 border border-[#3a3a3a]">
        <span className="text-orange-500 font-bold text-xs">ℹ</span>
        <span className="text-xs">
          <span className="text-orange-500">*</span> = obligatoire
        </span>
      </div>

      {/* Form compact */}
      <div className="space-y-3 sm:space-y-4 flex-1">
        {/* Motivation */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Motivation pour rejoindre UpAfrica *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] p-2 text-xs text-white focus:ring-1 focus:ring-orange-500 resize-none"
            placeholder="Je souhaite rejoindre UpAfrica pour contribuer..."
            rows={4}
            value={form.motivation}
            onChange={(e) => setForm({ ...form, motivation: e.target.value })}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {form.motivation.length}/500 caractères
          </div>
        </div>

        {/* Contribution */}
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Comment comptez-vous contribuer ? *
          </label>
          <textarea
            className="w-full rounded bg-[#2a2a2a] border border-[#444] p-2 text-xs text-white focus:ring-1 focus:ring-orange-500 resize-none"
            placeholder="Je peux apporter mon expertise..."
            rows={4}
            value={form.contribution}
            onChange={(e) => setForm({ ...form, contribution: e.target.value })}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {form.contribution.length}/500 caractères
          </div>
        </div>
      </div>
    </div>
  );
}
