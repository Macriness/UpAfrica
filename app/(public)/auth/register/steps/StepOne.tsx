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

      {/* Formulaire */}
      <div className="space-y-3 flex-1">
        {/* Prénom + Nom */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-gray-300">Prénom *</label>
            <input
              type="text"
              className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
              placeholder="Lorem"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-gray-300">Nom *</label>
            <input
              type="text"
              className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
              placeholder="Ipsum"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-xs sm:text-sm text-gray-300">Email *</label>
          <input
            type="email"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
            placeholder="email@exemple.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="text-xs sm:text-sm text-gray-300">Téléphone *</label>
          <input
            type="tel"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
            placeholder="+225 07 89 45 67 23"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {/* Date + Nationalité */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-gray-300">Date de naissance *</label>
            <input
              type="date"
              className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-gray-300">Nationalité *</label>
            <input
              type="text"
              className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
              placeholder="Bénin"
              value={form.nationality}
              onChange={(e) => setForm({ ...form, nationality: e.target.value })}
            />
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="text-xs sm:text-sm text-gray-300">Nom d&apos;utilisateur *</label>
          <input
            type="text"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base text-white focus:ring-1 focus:ring-orange-500"
            placeholder="nom_utilisateur"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-300">Nom *</label>
          <input
            type="text"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
            placeholder="Ipsum"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-xs text-gray-300">Email *</label>
        <input
          type="email"
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
          placeholder="Entrer l’email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {/* Téléphone */}
      <div>
        <label className="text-xs text-gray-300">Téléphone *</label>
        <input
          type="tel"
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
          placeholder="+225 07 89 45 67 23"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      {/* Date + Nationalité */}
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="text-xs text-gray-300">Date de naissance *</label>
          <input
            type="date"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-300">Nationalité *</label>
          <input
            type="text"
            className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
            placeholder="Bénin"
            value={form.nationality}
            onChange={(e) => setForm({ ...form, nationality: e.target.value })}
          />
        </div>
      </div>

      {/* Username */}
      <div>
        <label className="text-xs text-gray-300">Nom d’utilisateur *</label>
        <input
          type="text"
          className="w-full mt-1 rounded bg-[#2a2a2a] border border-[#444] p-2.5 text-sm text-white focus:ring-1 focus:ring-orange-500"
          placeholder="Entrer le nom d’utilisateur"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
    </div>
  );
}

