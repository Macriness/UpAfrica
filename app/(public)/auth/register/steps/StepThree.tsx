"use client";

import { useState } from "react";

export default function StepThree() {
  const [form, setForm] = useState({
    motivation: "",
    contribution: "",
  });

  return (
    <div className="flex flex-col space-y-5">
      {/* Motivation */}
      <div>
        <label className="text-xs text-gray-300">Motivation pour rejoindre UpAfrica *</label>
        <textarea
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500 resize-none"
          placeholder="Je souhaite rejoindre UpAfrica en tant que membre..."
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
        <label className="text-xs text-gray-300">Comment comptez-vous contribuer ? *</label>
        <textarea
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500 resize-none"
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
  );
}

