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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black p-4">
      {/* 🌆 Fond */}
      <div className="absolute inset-0">
        <img
          src="/Container.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🟧 Titre principal (au-dessus de la carte) */}
      <div className="relative z-10 mb-6 flex items-center gap-2">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-white hover:text-orange-500"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <h1 className="text-lg font-semibold text-center">
          {step === 1 ? (
            <>
              <span className="text-orange-500">UpAfrica</span>{" "}
              <span className="text-white">Formulaire membre UpAfrica</span>
            </>
          ) : (
            <span className="text-white">Formulaire membre UpAfrica</span>
          )}
        </h1>
      </div>

      {/* 🟧 Carte centrale */}
      {!showConfirm && (
        <div className="relative z-10 w-full max-w-sm bg-[#1e1e1e] rounded-2xl p-6 shadow-xl">
          {/* Barre de progression (1,2,3) */}
          <div className="mb-6">
            <div className="flex rounded-lg overflow-hidden">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-10 flex items-center justify-center text-sm font-bold ${
                    step === s
                      ? "bg-orange-500 text-white"
                      : "bg-[#2a2a2a] text-gray-400"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Étapes */}
          <div className="mb-6">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
          </div>

          {/* Boutons */}
          <div className="flex justify-end">
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium shadow-md"
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={() => setShowConfirm(true)}
                className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium shadow-md"
              >
                Envoyer
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal confirmation */}
      {showConfirm && <ConfirmModal onClose={() => setShowConfirm(false)} />}
    </div>
  );
}

