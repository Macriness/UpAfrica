"use client";

import { useState } from "react";
import StepOne from "./(public)/auth/register/steps/StepOne";
import StepTwo from "./(public)/auth/register/steps/StepTwo";
import StepThree from "./(public)/auth/register/steps/StepThree";
import ConfirmModal from "./(public)/auth/register/ConfirmModal";
import AlreadyMember from "./(public)/auth/register/AlreadyMember";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isMember, setIsMember] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (isMember) {
    return <AlreadyMember />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      {/* 🌆 Fond avec ton  Container.png */}
      <div className="absolute inset-0">
        <img
          src="/Container.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🟧 Carte centrale */}
      {!showConfirm && (
        <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#1e1e1e] rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-gray-300 hover:text-white transition"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-white font-medium text-sm sm:text-base lg:text-lg">
              Formulaire membre UpAfrica
            </h1>
          </div>

          {/* Barre de progression */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-xs sm:text-sm font-semibold">
                Progression
              </span>
              <span className="text-orange-500 text-xs sm:text-sm font-medium">
                Étape {step}/3
              </span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm lg:text-base font-bold rounded-md ${
                    step === s
                      ? "bg-orange-500 text-white"
                      : "bg-[#3a3a3a] text-gray-400"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Étape affichée */}
          <div className="mb-5">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
          </div>

          {/* Bouton global */}
          <div className="flex justify-end">
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-4 sm:px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm sm:text-base font-medium transition"
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={() => setShowConfirm(true)}
                className="px-4 sm:px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm sm:text-base font-medium transition"
              >
                Envoyer
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal de confirmation */}
      {showConfirm && <ConfirmModal onClose={() => setShowConfirm(false)} />}
    </div>
  );
}
