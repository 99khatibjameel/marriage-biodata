
type HinduBiodataPreviewProps = {
  fullName: string;
  photo: string | null;
  formData: Record<string, string>;
};

function BiodataRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-slate-100 pb-2">
      <span className="font-medium text-slate-500">
        {label}
      </span>

      <span className="break-words text-right font-medium text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default function HinduBiodataPreview({
  fullName,
  photo,
  formData,
}: HinduBiodataPreviewProps) {
  return (
    <div className="mx-auto w-full max-w-[794px] overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-lg">
      <div className="bg-orange-500 px-6 py-8 text-center text-white">
        <div className="text-3xl">ॐ</div>

        {photo && (
          <img
            src={photo}
            alt="Profile"
            className="mx-auto mt-4 h-24 w-24 rounded-full border-4 border-white object-cover"
          />
        )}

        <h2 className="mt-4 break-words text-3xl font-bold">
          {fullName || "Your Name"}
        </h2>

        <p className="mt-1 text-sm text-orange-100">
          Marriage Biodata
        </p>
      </div>

     <div className="p-6 sm:p-8">
  <section>
    <h3 className="mb-4 border-b border-orange-200 pb-2 text-lg font-bold text-orange-600">
      Personal Details
    </h3>

    <div className="space-y-3 text-sm">
      {formData.dateOfBirth && (
        <BiodataRow label="Date of Birth" value={formData.dateOfBirth} />
      )}

      {formData.birthTime && (
        <BiodataRow label="Time of Birth" value={formData.birthTime} />
      )}

      {formData.birthPlace && (
        <BiodataRow label="Place of Birth" value={formData.birthPlace} />
      )}

      {formData.gender && (
        <BiodataRow label="Gender" value={formData.gender} />
      )}

      {formData.height && (
        <BiodataRow label="Height" value={formData.height} />
      )}

      {formData.maritalStatus && (
        <BiodataRow label="Marital Status" value={formData.maritalStatus} />
      )}

      {formData.motherTongue && (
        <BiodataRow label="Mother Tongue" value={formData.motherTongue} />
      )}

      {formData.currentCity && (
        <BiodataRow label="Current City" value={formData.currentCity} />
      )}
    </div>

    {formData.aboutMe && (
      <div className="mt-6">
        <h4 className="mb-2 font-bold text-slate-800">
          About Me
        </h4>

        <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
          {formData.aboutMe}
        </p>
      </div>
    )}
  </section>
</div>
    </div>
  );
}