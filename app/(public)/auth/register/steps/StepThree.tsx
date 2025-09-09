"use client";

type Props = {
  formData: { motivation?: string; contribution?: string };
  setFormData: (v: any) => void;
};

export default function StepThree({ formData, setFormData }: Props) {
  const motivation = formData.motivation ?? "";
  const contribution = formData.contribution ?? "";

  // Classes communes pour les deux textareas pour garantir la cohérence
  const textAreaClasses =
    "w-full h-[94px] bg-[#343434] border border-[#444] rounded-[9.37px] px-[11.24px] py-[3.75px] text-sm text-gray-300 placeholder:text-gray-500 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 resize-none outline-none";

  return (
    <div className="flex flex-col w-full">
      <div className="space-y-5 flex-1">
        {/* --- Champ Motivation --- */}
        <div className="w-full">
          <label className="text-sm text-gray-300 mb-2 block">
            Motivation pour rejoindre UpAfrica *
          </label>
          <textarea
            className={textAreaClasses}
            placeholder="Je souhaite rejoindre UpAfrica pour contribuer..."
            value={motivation}
            onChange={(e) =>
              setFormData((p: any) => ({ ...p, motivation: e.target.value }))
            }
            maxLength={500}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {motivation.length}/500 caractères
          </div>
        </div>

        {/* --- Champ Contribution --- */}
        <div className="w-full">
          <label className="text-sm text-gray-300 mb-2 block">
            Comment comptez-vous contribuer ? *
          </label>
          <textarea
            className={textAreaClasses}
            placeholder="Je peux apporter mon expertise..."
            value={contribution}
            onChange={(e) =>
              setFormData((p: any) => ({ ...p, contribution: e.target.value }))
            }
            maxLength={500}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {contribution.length}/500 caractères
          </div>
        </div>
      </div>
    </div>
  );
}