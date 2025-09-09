"use client";

type Props = {
  formData: { profession: string };
  setFormData: (v: any) => void;
};

export default function StepTwo({ formData, setFormData }: Props) {
  return (
    <div className="flex flex-col w-full">
      {/* Titre de la section */}
      <h3 className="text-white font-medium text-base mb-2">
        Statut professionnel
      </h3>
      
      {/* Champ de saisie */}
      <div className="w-full">
        <label className="block text-sm text-gray-300 mb-1">
          Profession *
        </label>
        <input
          type="text"
          className="w-full h-8 bg-[#343434] border border-[#444] rounded-[6px] px-[10px] py-[8px] text-sm text-gray-300 placeholder:text-gray-500 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none"
          placeholder="Entrepreneur Tech"
          value={formData.profession}
          onChange={(e) =>
            setFormData((p: any) => ({ ...p, profession: e.target.value }))
          }
        />
      </div>
    </div>
  );
}