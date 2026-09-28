type BiodataFormData = {
  fullName: string;
  dateOfBirth: string;
  birthTime: string;
  birthPlace: string;
  gender: string;
  height: string;
  maritalStatus: string;
  motherTongue: string;
  currentCity: string;
  aboutMe: string;

  highestQualification: string;
  degreeCourse: string;
  collegeUniversity: string;
  occupation: string;
  companyBusiness: string;
  designation: string;
  workLocation: string;
  annualIncome: string;
  careerDetails: string;

  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  familyType: string;
  familyLocation: string;
  familyDetails: string;

  religion: string;
  community: string;
  subCommunity: string;
  gotra: string;
  rashi: string;
  nakshatra: string;
  manglik: string;
  horoscopeAvailable: string;
  traditionalDetails: string;

  contactPerson: string;
  mobileNumber: string;
  alternateNumber: string;
  email: string;
  address: string;
  contactCity: string;
  contactState: string;
};

type SymbolItem = {
  id: string;
  name: string;
  category: string;
  type: "text" | "image";
  value?: string;
  image?: string;
};

type TemplateLabels = {
  personalDetails: string;
  educationCareer: string;
  familyDetails: string;
  traditionalDetails: string;
  additionalTraditionalDetails: string;
  contactDetails: string;

  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: string;
  height: string;
  maritalStatus: string;
  motherTongue: string;
  currentCity: string;
  aboutMe: string;

  highestQualification: string;
  degreeCourse: string;
  collegeUniversity: string;
  occupation: string;
  companyBusiness: string;
  designation: string;
  workLocation: string;
  annualIncome: string;
  additionalCareerDetails: string;

  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  familyType: string;
  familyLocation: string;
  additionalFamilyDetails: string;

  
  communityCaste: string;
  subCommunity: string;
  gotra: string;
  rashi: string;
  nakshatra: string;
  manglik: string;
  horoscopeAvailable: string;

  contactPerson: string;
  mobileNumber: string;
  alternateNumber: string;
  emailAddress: string;
  city: string;
  state: string;
  fullAddress: string;
};

type H01TemplateProps = {
  mode?: "preview" | "a4";
  labels: TemplateLabels;
  language: string;

  formData: BiodataFormData;

  photo: string | null;

  selectedSymbolId: string;
  selectedSymbol: SymbolItem;

  backgroundColor: string;
  textColor: string;
  accentColor: string;
};

export default function H01Template({
  mode = "preview",
  labels,
   language,
  formData,
  photo,
  selectedSymbolId,
  selectedSymbol,
  backgroundColor,
  textColor,
  accentColor,
}: H01TemplateProps) {
    const marriageBiodataTitle =
  language === "mr"
    ? "विवाह परिचय"
    : language === "hi"
      ? "विवाह परिचय"
      : language === "gu"
        ? "લગ્ન પરિચય"
        : "Marriage Biodata";
 
     return (
  <div
    className={
      mode === "a4"
       ? "relative w-full overflow-hidden border-[6px] p-4 text-[13px]"
        : "relative mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-2xl border-[6px] p-3 shadow-lg sm:p-5"
    }
    style={{
      backgroundColor,
      backgroundImage: `
        radial-gradient(circle at 15% 10%, rgba(127, 29, 29, 0.045), transparent 22%),
        radial-gradient(circle at 85% 90%, rgba(127, 29, 29, 0.045), transparent 22%),
        linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12))
      `,
      color: textColor,
      borderColor: accentColor,
      minHeight: mode === "a4" ? "1123px" : undefined,
    }}
  >
    {/* H-01 Decorative Inner Frame */}
    <div
      className="pointer-events-none absolute inset-2 rounded-xl border sm:inset-3"
      style={{ borderColor: accentColor }}
    />

   {/* H-01 Traditional Corner Decorations */}
<div
  className="pointer-events-none absolute left-3 top-3 text-xl leading-none sm:left-4 sm:top-4 sm:text-2xl"
  style={{ color: accentColor }}
>
  ❧
</div>

<div
  className="pointer-events-none absolute right-3 top-3 rotate-90 text-xl leading-none sm:right-4 sm:top-4 sm:text-2xl"
  style={{ color: accentColor }}
>
  ❧
</div>

<div
  className="pointer-events-none absolute bottom-3 left-3 -rotate-90 text-xl leading-none sm:bottom-4 sm:left-4 sm:text-2xl"
  style={{ color: accentColor }}
>
  ❧
</div>

<div
  className="pointer-events-none absolute bottom-3 right-3 rotate-180 text-xl leading-none sm:bottom-4 sm:right-4 sm:text-2xl"
  style={{ color: accentColor }}
>
  ❧
</div>

{/* H-01 Header */}
<div className="relative z-10 border-b pb-5 text-center" style={{ borderColor: accentColor }}>
  {selectedSymbolId !== "none" && (
    <div className="mb-4 flex justify-center">
      {selectedSymbol.type === "image" && selectedSymbol.image ? (
        <img
          src={selectedSymbol.image}
          alt={selectedSymbol.name}
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
        />
      ) : selectedSymbol.type === "text" && selectedSymbol.value ? (
        <span className="text-4xl" style={{ color: accentColor }}>
          {selectedSymbol.value}
        </span>
      ) : null}
    </div>
  )}

  <div
  className={`flex items-center justify-center ${
    mode === "a4" ? "gap-2" : "gap-3"
  }`}
>
    <div
      className="h-px w-8 sm:w-12"
      style={{ backgroundColor: accentColor }}
    />

    <p
      className={
  mode === "a4"
    ? "text-[11px] font-bold uppercase tracking-[0.22em]"
    : "text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
}
      style={{ color: accentColor }}
    >
      {marriageBiodataTitle}
    </p>

    <div
      className="h-px w-8 sm:w-12"
      style={{ backgroundColor: accentColor }}
    />
  </div>

  {photo && (
    <div
  className={`flex justify-center ${
    mode === "a4" ? "mt-2" : "mt-4"
  }`}
>
      <div
        className="rounded-full border-2 p-1 shadow-sm"
        style={{ borderColor: accentColor }}
      >
        <img
          src={photo}
          alt={formData.fullName || "Biodata"}
          className={
  mode === "a4"
    ? "h-20 w-20 rounded-full object-cover"
    : "h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
}
        />
      </div>
    </div>
  )}

  <h2
    className={
  mode === "a4"
    ? "mt-2 break-words text-xl font-bold"
    : "mt-3 break-words text-2xl font-bold sm:text-3xl"
}
    style={{ color: accentColor }}
  >
    {formData.fullName}
  </h2>
</div>
{/* Personal Details */}
{(formData.dateOfBirth ||
  formData.birthTime ||
  formData.birthPlace ||
  formData.gender ||
  formData.height ||
  formData.maritalStatus ||
  formData.motherTongue ||
  formData.currentCity ||
  formData.aboutMe) && (
  <div
    className="border-b py-5"
    style={{ borderColor: accentColor }}
  >
    <div className="mb-4 flex items-center gap-3">
      <h3
        className="shrink-0 rounded-r-full px-4 py-1.5 text-sm font-bold text-white sm:text-base"
        style={{ backgroundColor: accentColor }}
      >
        {labels.personalDetails}
      </h3>

      <div
        className="h-px flex-1"
        style={{ backgroundColor: accentColor }}
      />
    </div>

    <div
  className={`grid gap-x-8 gap-y-3 ${
    mode === "a4" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
  }`}
>
      {formData.dateOfBirth && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.dateOfBirth}:</span>{" "}
          {formData.dateOfBirth}
        </p>
      )}

      {formData.birthTime && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.timeOfBirth}:</span>{" "}
          {formData.birthTime}
        </p>
      )}

      {formData.birthPlace && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.placeOfBirth}:</span>{" "}
          {formData.birthPlace}
        </p>
      )}

      {formData.gender && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.gender}:</span>{" "}
          {formData.gender}
        </p>
      )}

      {formData.height && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.height}:</span>{" "}
          {formData.height}
        </p>
      )}

      {formData.maritalStatus && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.maritalStatus}:</span>{" "}
          {formData.maritalStatus}
        </p>
      )}

      {formData.motherTongue && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.motherTongue}:</span>{" "}
          {formData.motherTongue}
        </p>
      )}

      {formData.currentCity && (
        <p
          className="text-sm"
          style={{ color: textColor }}
        >
          <span className="font-semibold">{labels.currentCity}:</span>{" "}
          {formData.currentCity}
        </p>
      )}
    </div>

    {formData.aboutMe && (
      <p
        className="mt-4 whitespace-pre-line text-sm leading-6"
        style={{ color: textColor }}
      >
        <span className="font-semibold">{labels.aboutMe}:</span>{" "}
        {formData.aboutMe}
      </p>
    )}
  </div>
)}
{/* Education & Career */}
{(formData.highestQualification ||
  formData.degreeCourse ||
  formData.collegeUniversity ||
  formData.occupation ||
  formData.companyBusiness ||
  formData.designation ||
  formData.workLocation ||
  formData.annualIncome ||
  formData.careerDetails) && (
  <div
    className="border-b py-5"
    style={{ borderColor: accentColor }}
  >
    <div className="mb-4 flex items-center gap-3">
      <h3
        className="shrink-0 rounded-r-full px-4 py-1.5 text-sm font-bold text-white sm:text-base"
        style={{ backgroundColor: accentColor }}
      >
        {labels.educationCareer}
      </h3>

      <div
        className="h-px flex-1"
        style={{ backgroundColor: accentColor }}
      />
    </div>

    <div
  className={`grid gap-x-8 gap-y-3 ${
    mode === "a4" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
  }`}
>
      {formData.highestQualification && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">
            {labels.highestQualification}:
          </span>{" "}
          {formData.highestQualification}
        </p>
      )}

      {formData.degreeCourse && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.degreeCourse}:</span>{" "}
          {formData.degreeCourse}
        </p>
      )}

      {formData.collegeUniversity && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">
            {labels.collegeUniversity}:
          </span>{" "}
          {formData.collegeUniversity}
        </p>
      )}

      {formData.occupation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.occupation}:</span>{" "}
          {formData.occupation}
        </p>
      )}

      {formData.companyBusiness && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.companyBusiness}:</span>{" "}
          {formData.companyBusiness}
        </p>
      )}

      {formData.designation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.designation}:</span>{" "}
          {formData.designation}
        </p>
      )}

      {formData.workLocation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.workLocation}:</span>{" "}
          {formData.workLocation}
        </p>
      )}

      {formData.annualIncome && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.annualIncome}:</span>{" "}
          {formData.annualIncome}
        </p>
      )}
    </div>

    {formData.careerDetails && (
      <p
        className="mt-4 whitespace-pre-line text-sm leading-6"
        style={{ color: textColor }}
      >
        <span className="font-semibold">
          {labels.additionalCareerDetails}:
        </span>{" "}
        {formData.careerDetails}
      </p>
    )}
  </div>
)}
{/* Family Details */}
{(formData.fatherName ||
  formData.fatherOccupation ||
  formData.motherName ||
  formData.motherOccupation ||
  formData.brothers ||
  formData.sisters ||
  formData.familyType ||
  formData.familyLocation ||
  formData.familyDetails) && (
  <div
    className="border-b py-5"
    style={{ borderColor: accentColor }}
  >
    <div className="mb-4 flex items-center gap-3">
      <h3
        className="shrink-0 rounded-r-full px-4 py-1.5 text-sm font-bold text-white sm:text-base"
        style={{ backgroundColor: accentColor }}
      >
        {labels.familyDetails}
      </h3>

      <div
        className="h-px flex-1"
        style={{ backgroundColor: accentColor }}
      />
    </div>

    <div
  className={`grid gap-x-8 gap-y-3 ${
    mode === "a4" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
  }`}
>
      {formData.fatherName && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.fatherName}:</span>{" "}
          {formData.fatherName}
        </p>
      )}

      {formData.fatherOccupation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.fatherOccupation}:</span>{" "}
          {formData.fatherOccupation}
        </p>
      )}

      {formData.motherName && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.motherName}:</span>{" "}
          {formData.motherName}
        </p>
      )}

      {formData.motherOccupation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.motherOccupation}:</span>{" "}
          {formData.motherOccupation}
        </p>
      )}

      {formData.brothers && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.brothers}:</span>{" "}
          {formData.brothers}
        </p>
      )}

      {formData.sisters && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.sisters}:</span>{" "}
          {formData.sisters}
        </p>
      )}

      {formData.familyType && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.familyType}:</span>{" "}
          {formData.familyType}
        </p>
      )}

      {formData.familyLocation && (
        <p className="text-sm" style={{ color: textColor }}>
          <span className="font-semibold">{labels.familyLocation}:</span>{" "}
          {formData.familyLocation}
        </p>
      )}
    </div>

    {formData.familyDetails && (
      <p
        className="mt-4 whitespace-pre-line text-sm leading-6"
        style={{ color: textColor }}
      >
        <span className="font-semibold">
          {labels.additionalFamilyDetails}:
        </span>{" "}
        {formData.familyDetails}
      </p>
    )}
  </div>
)}
      {/* Traditional Details */}
      {(formData.community ||
        formData.subCommunity ||
        formData.gotra ||
        formData.rashi ||
        formData.nakshatra ||
        formData.manglik ||
        formData.horoscopeAvailable ||
        formData.traditionalDetails) && (
        <div
          className="border-b py-5"
          style={{ borderColor: accentColor }}
        >
          <div className="mb-4 flex items-center gap-3">
            <h3
              className="shrink-0 rounded-r-full px-4 py-1.5 text-sm font-bold text-white sm:text-base"
              style={{ backgroundColor: accentColor }}
            >
              {labels.traditionalDetails}
            </h3>

            <div
              className="h-px flex-1"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          <div
  className={`grid gap-x-8 gap-y-3 ${
    mode === "a4" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
  }`}
>
            {formData.community && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.communityCaste}:</span>{" "}
                {formData.community}
              </p>
            )}

            {formData.subCommunity && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.subCommunity}:</span>{" "}
                {formData.subCommunity}
              </p>
            )}

            {formData.gotra && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.gotra}:</span>{" "}
                {formData.gotra}
              </p>
            )}

            {formData.rashi && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.rashi}:</span>{" "}
                {formData.rashi}
              </p>
            )}

            {formData.nakshatra && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.nakshatra}:</span>{" "}
                {formData.nakshatra}
              </p>
            )}

            {formData.manglik && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.manglik}:</span>{" "}
                {formData.manglik}
              </p>
            )}

            {formData.horoscopeAvailable && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">
                  {labels.horoscopeAvailable}:
                </span>{" "}
                {formData.horoscopeAvailable}
              </p>
            )}
          </div>

          {formData.traditionalDetails && (
            <p
              className="mt-4 whitespace-pre-line text-sm leading-6"
              style={{ color: textColor }}
            >
              <span className="font-semibold">
                {labels.additionalTraditionalDetails}:
              </span>{" "}
              {formData.traditionalDetails}
            </p>
          )}
        </div>
      )}
            {/* Contact Details */}
      {(formData.contactPerson ||
        formData.mobileNumber ||
        formData.alternateNumber ||
        formData.email ||
        formData.address ||
        formData.contactCity ||
        formData.contactState) && (
        <div className={mode === "a4" ? "py-3" : "py-5"}>
          <div className="mb-4 flex items-center gap-3">
            <h3
              className="shrink-0 rounded-r-full px-4 py-1.5 text-sm font-bold text-white sm:text-base"
              style={{ backgroundColor: accentColor }}
            >
              {labels.contactDetails}
            </h3>

            <div
              className="h-px flex-1"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          <div
  className={`grid gap-x-8 gap-y-3 ${
    mode === "a4" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
  }`}
>
            {formData.contactPerson && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.contactPerson}:</span>{" "}
                {formData.contactPerson}
              </p>
            )}

            {formData.mobileNumber && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.mobileNumber}:</span>{" "}
                {formData.mobileNumber}
              </p>
            )}

            {formData.alternateNumber && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.alternateNumber}:</span>{" "}
                {formData.alternateNumber}
              </p>
            )}

            {formData.email && (
              <p className="break-all text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.emailAddress}:</span>{" "}
                {formData.email}
              </p>
            )}

            {formData.contactCity && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.city}:</span>{" "}
                {formData.contactCity}
              </p>
            )}

            {formData.contactState && (
              <p className="text-sm" style={{ color: textColor }}>
                <span className="font-semibold">{labels.state}:</span>{" "}
                {formData.contactState}
              </p>
            )}
          </div>

          {formData.address && (
            <p
              className="mt-4 whitespace-pre-line text-sm leading-6"
              style={{ color: textColor }}
            >
              <span className="font-semibold">{labels.fullAddress}:</span>{" "}
              {formData.address}
            </p>
          )}
        </div>
      )}
  </div>
);
}