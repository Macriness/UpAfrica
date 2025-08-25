"use client";

import { useState } from "react";

export default function StepOne() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    username: "",
  });

  return (
    <div className="h-full flex flex-col">
      {/* Form mieux espacé */}
      <div className="space-y-5 flex-1">
        {/* Prénom + Nom */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-300">Prénom *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Lorem"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-300">Nom *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Ipsum"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-300">Email *</label>
          <input
            type="email"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="email@exemple.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="text-sm text-gray-300">Téléphone *</label>
          <input
            type="tel"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="+225 07 89 45 67 23"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {/* Date + Nationalité */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-300">Date de naissance *</label>
            <input
              type="date"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-300">Nationalité *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Bénin"
              value={form.nationality}
              onChange={(e) => setForm({ ...form, nationality: e.target.value })}
            />
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="text-sm text-gray-300">Nom d&apos;utilisateur *</label>
          <input
            type="text"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] border border-[#444] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="nom_utilisateur"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

