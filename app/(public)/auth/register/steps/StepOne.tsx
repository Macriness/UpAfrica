"use client";

type Props = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    nationality: string;
    username: string;
  };
  setFormData: (v: any) => void;
};

export default function StepOne({ formData, setFormData }: Props) {
  return (
    <div className="h-full flex flex-col">
      <div className="space-y-5 flex-1">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-300">Prénom *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Lorem"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((p: any) => ({ ...p, firstName: e.target.value }))
              }
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-300">Nom *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Ipsum"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((p: any) => ({ ...p, lastName: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300">Email *</label>
          <input
            type="email"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="email@exemple.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((p: any) => ({ ...p, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Téléphone *</label>
          <input
            type="tel"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="+225 07 89 45 67 23"
            value={formData.phone}
            onChange={(e) =>
              setFormData((p: any) => ({ ...p, phone: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-300">Date de naissance *</label>
            <input
              type="date"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              value={formData.dob}
              onChange={(e) =>
                setFormData((p: any) => ({ ...p, dob: e.target.value }))
              }
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-300">Nationalité *</label>
            <input
              type="text"
              className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
              placeholder="Bénin"
              value={formData.nationality}
              onChange={(e) =>
                setFormData((p: any) => ({ ...p, nationality: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300">Nom d&apos;utilisateur *</label>
          <input
            type="text"
            className="w-full mt-2 rounded-lg bg-[#2a2a2a] p-3 text-sm text-white focus:ring-2 focus:ring-orange-500"
            placeholder="nom_utilisateur"
            value={formData.username}
            onChange={(e) =>
              setFormData((p: any) => ({ ...p, username: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );
}
