"use client";

import { useMemo, useState } from "react";
import StepOne from "./(public)/auth/register/steps/StepOne";
import StepTwo from "./(public)/auth/register/steps/StepTwo";
import StepThree from "./(public)/auth/register/steps/StepThree";
import ConfirmModal from "./(public)/auth/register/ConfirmModal";
import AlreadyMember from "./(public)/auth/register/AlreadyMember";
import { ArrowLeft, Info, ChevronRight } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;          // -> phoneNumber
  dob: string;            // -> birthDate (YYYY-MM-DD)
  nationality: string;
  username: string;
  profession: string;
  motivation?: string;
  contribution?: string;
};

type ApiOk = { success: boolean; message?: string; data?: any };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isMember] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    username: "",
    profession: "",
    motivation: "",
    contribution: "",
  });

  // --- Validation par étape
  const stepValid = useMemo(() => {
    if (step === 1) {
      return (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        /\S+@\S+\.\S+/.test(formData.email) &&
        formData.phone.trim() &&
        formData.dob.trim() &&
        formData.nationality.trim() &&
        formData.username.trim()
      );
    }
    if (step === 2) {
      return formData.profession.trim();
    }
    return true; // step 3 = texte libre
  }, [step, formData]);

  // --- Mapping vers payload API
  const toApiPayload = () => ({
    email: formData.email.trim(),
    phoneNumber: formData.phone.trim(),
    firstname: formData.firstName.trim(),
    lastname: formData.lastName.trim(),
    username: formData.username.trim(),
    birthDate: formData.dob.trim(), // input type="date" -> YYYY-MM-DD
    nationality: formData.nationality.trim(),
    profession: formData.profession.trim(),
  });

  // --- Parse robuste (JSON ou text/plain)
  const parseResponse = async (res: Response): Promise<ApiOk> => {
    const contentType = res.headers.get("content-type") || "";
    try {
      if (contentType.includes("application/json")) {
        return (await res.json()) as ApiOk;
      }
      const text = await res.text();
      try {
        return JSON.parse(text) as ApiOk;
      } catch {
        return { success: res.ok, message: text };
      }
    } catch (e) {
      return { success: res.ok, message: "Réponse illisible." };
    }
  };

  const handleSubmit = async () => {
    setApiError(null);
    setApiMessage(null);

    // double check côté client
    if (!toApiPayload().email) {
      setApiError("Email manquant.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/api/account/register-member`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // l'API peut répondre text/plain : on accepte les deux
            Accept: "application/json, text/plain;q=0.9, */*;q=0.8",
          },
          body: JSON.stringify(toApiPayload()),
        }
      );

      const data = await parseResponse(res);

      if (!res.ok || data?.success === false) {
        throw new Error(data?.message || "Échec de l'inscription.");
      }

      setApiMessage(data?.message ?? "Inscription réussie.");
      setShowConfirm(true);
    } catch (err: any) {
      setApiError(err?.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  if (isMember) {
    return <AlreadyMember />;
  }

  return (
    <div className="relative min-h-screen w-full bg-[#232323] overflow-auto">
      {/* Fond */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Container.png"
          alt="Background"
          className="fixed w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/10 md:bg-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4">
        {/* Titre */}
        <div className="mb-6 flex items-center gap-2 w-full max-w-sm">
          {step > 1 && (
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="text-white hover:text-orange-500 disabled:opacity-50"
              disabled={loading}
              aria-label="Revenir à l'étape précédente"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-lg font-semibold text-center flex-1">
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

        {/* Carte */}
        {!showConfirm && (
          <div className="w-full max-w-sm bg-[#2d2c2c] rounded-2xl p-6 shadow-xl space-y-6">
            {/* En-tête progression */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium text-sm">Progression</span>
              <span className="text-[#F08634] font-medium text-sm">Etape {step}/3</span>
            </div>

            {/* Barre de progression */}
            <div className="flex rounded-lg overflow-hidden">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-10 flex items-center justify-center text-sm font-bold ${
                    step >= s
                      ? "bg-[#F08634] text-white"
                      : "bg-[#484848] text-[#919191]"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="flex items-start gap-2 p-3 rounded-lg bg-[#35312F] text-[#7F7F7F] border-l-4 border-[#F5AA71]">
              <Info className="w-5 h-5 text-[#F5AA71] mt-0.5" />
              <p className="text-sm">
                Les champs suivis d'une étoile{" "}(
                <span className="text-[#7F7F7F] font-semibold">*</span>) sont
                obligatoires
              </p>
            </div>

            {/* Étapes */}
            <div className="flex justify-center w-full">
              {step === 1 && (
                <div className="w-[353px] flex flex-col gap-10">
                  <StepOne formData={formData} setFormData={setFormData} />
                </div>
              )}
              {step === 2 && (
                <div className="w-[353px] flex flex-col gap-10">
                  <StepTwo formData={formData} setFormData={setFormData} />
                </div>
              )}
              {step === 3 && (
                <div className="w-[353px] flex flex-col gap-10">
                  <StepThree formData={formData} setFormData={setFormData} />
                </div>
              )}
            </div>

            {/* Erreur API */}
            {apiError && (
              <div
                role="alert"
                className="text-sm text-red-400 bg-red-950/30 border border-red-800 rounded-lg px-3 py-2"
              >
                {apiError}
              </div>
            )}

            {/* Boutons */}
            <div className="flex justify-end">
              {step < 3 ? (
                <button
                  onClick={() => stepValid && setStep(step + 1)}
                  disabled={!stepValid || loading}
                  className="inline-flex items-center justify-center h-9 px-3 py-1.5 bg-orange-500 hover:[#F08634] disabled:opacity-50 text-white text-sm font-medium shadow-md transition overflow-hidden"
                  style={{
                    width: "106px",
                    borderRadius: "6px",
                    gap: "6px"
                  }}
                >
                  {loading ? "…" : (
                    <>
                      <span>Suivant</span>
                      <ChevronRight size={16} />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex items-center justify-center h-9 px-3 py-1.5 bg-orange-500 hover:bg-[#F08634] disabled:opacity-50 text-white text-sm font-medium font-dm-sans shadow-md transition overflow-hidden"
                  style={{
                    width: "200px",
                    borderRadius: "8px",
                    gap: "6px"
                  }}
                >
                  {loading ? "Envoi…" : (
                    <>
                      <span>Envoyer le formulaire</span>
                      <ChevronRight size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal confirmation */}
        {showConfirm && (
          <ConfirmModal
            onClose={() => setShowConfirm(false)}
            message={apiMessage ?? undefined}
          />
        )}
      </div>
    </div>
  );
}