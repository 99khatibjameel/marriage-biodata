"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import HinduBiodataPreview from "../../../components/biodata/HinduBiodataPreview";

type FormData = {
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

  // Step 2 - Education & Career
highestQualification: string;
degreeCourse: string;
collegeUniversity: string;  
occupation: string;
companyBusiness: string;
designation: string;
workLocation: string;
annualIncome: string;
careerDetails: string;

// Step 3 - Family Details
fatherName: string;
fatherOccupation: string;
motherName: string;
motherOccupation: string;
brothers: string;
sisters: string;
familyType: string;
familyLocation: string;
familyDetails: string;

// Step 4 - Hindu / Traditional Details
religion: string;
community: string;
subCommunity: string;
gotra: string;
rashi: string;
nakshatra: string;
manglik: string;
horoscopeAvailable: string;
traditionalDetails: string;

// Step 5 - Contact Details
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

const symbolCategories = [
  "Popular",
  "Written",
  "Ganesh",
  "Shiva",
  "Krishna",
  "Ram",
  "Hanuman",
  "Devi",
  "Traditional",
  "Decorative",
];

const symbols: SymbolItem[] = [
  // POPULAR
  { id: "none", name: "No Symbol", category: "Popular", type: "text", value: "" },
  { id: "om", name: "Om", category: "Popular", type: "text", value: "ॐ" },
  { id: "shree", name: "Shree", category: "Popular", type: "text", value: "श्री" },
  {
    id: "ganesh-text",
    name: "Shri Ganesh",
    category: "Popular",
    type: "text",
    value: "॥ श्री गणेशाय नमः ॥",
  },
  {
    id: "shubh-vivah",
    name: "Shubh Vivah",
    category: "Popular",
    type: "text",
    value: "शुभ विवाह",
  },
  {
    id: "shubh-mangal",
    name: "Shubh Mangal",
    category: "Popular",
    type: "text",
    value: "शुभ मंगल",
  },

  // WRITTEN
  { id: "w1", name: "Om", category: "Written", type: "text", value: "ॐ" },
  { id: "w2", name: "Shree", category: "Written", type: "text", value: "श्री" },
  {
    id: "w3",
    name: "Ganesh Vandana",
    category: "Written",
    type: "text",
    value: "॥ श्री गणेशाय नमः ॥",
  },
  {
    id: "w4",
    name: "Kuldevata",
    category: "Written",
    type: "text",
    value: "॥ श्री कुलदेवताय नमः ॥",
  },
  {
    id: "w5",
    name: "Om Ganesh",
    category: "Written",
    type: "text",
    value: "ॐ श्री गणेशाय नमः",
  },
  {
    id: "w6",
    name: "Om Namah Shivaya",
    category: "Written",
    type: "text",
    value: "ॐ नमः शिवाय",
  },
  {
    id: "w7",
    name: "Shri Ram",
    category: "Written",
    type: "text",
    value: "श्री राम",
  },
  {
    id: "w8",
    name: "Radhe Krishna",
    category: "Written",
    type: "text",
    value: "राधे कृष्ण",
  },
  {
    id: "w9",
    name: "Jai Shri Ram",
    category: "Written",
    type: "text",
    value: "जय श्री राम",
  },
  {
    id: "w10",
    name: "Jai Mata Di",
    category: "Written",
    type: "text",
    value: "जय माता दी",
  },

  // IMAGE LIBRARY PLACEHOLDERS
  {
  id: "g1",
  name: "Ganesh Classic",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-01.png",
},
{
  id: "g1",
  name: "Ganesh Classic",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-01.png",
},
{
  id: "g2",
  name: "Ganesh Golden",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-02.png",
},
{
  id: "g3",
  name: "Ganesh Traditional",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-03.png",
},
{
  id: "g4",
  name: "Ganesh Minimal",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-04.png",
},

{
  id: "s1",
  name: "Mahadev",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-1.png",
},
{
  id: "s2",
  name: "Shiva Meditation",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-2.png",
},
{
  id: "s3",
  name: "Shiva Traditional",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-3.png",
},
{
  id: "s4",
  name: "Mahadev Blessing",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-4.png",
},

  { id: "k1", name: "Krishna Flute", category: "Krishna", type: "image" },
  { id: "k2", name: "Radha Krishna", category: "Krishna", type: "image" },
  { id: "k3", name: "Peacock Feather", category: "Krishna", type: "image" },
  { id: "k4", name: "Krishna Minimal", category: "Krishna", type: "image" },
  { id: "k5", name: "Flute Motif", category: "Krishna", type: "image" },

  { id: "r1", name: "Shri Ram", category: "Ram", type: "image" },
  { id: "r2", name: "Ram Darbar", category: "Ram", type: "image" },
  { id: "r3", name: "Bow & Arrow", category: "Ram", type: "image" },
  { id: "r4", name: "Ram Minimal", category: "Ram", type: "image" },
  { id: "r5", name: "Ram Decorative", category: "Ram", type: "image" },

  { id: "h1", name: "Hanuman", category: "Hanuman", type: "image" },
  { id: "h2", name: "Hanuman Minimal", category: "Hanuman", type: "image" },
  { id: "h3", name: "Hanuman Gada", category: "Hanuman", type: "image" },
  { id: "h4", name: "Bajrangbali", category: "Hanuman", type: "image" },
  { id: "h5", name: "Hanuman Outline", category: "Hanuman", type: "image" },

  { id: "d1", name: "Lakshmi", category: "Devi", type: "image" },
  { id: "d2", name: "Durga", category: "Devi", type: "image" },
  { id: "d3", name: "Saraswati", category: "Devi", type: "image" },
  { id: "d4", name: "Devi Minimal", category: "Devi", type: "image" },
  { id: "d5", name: "Lotus Devi", category: "Devi", type: "image" },

  { id: "t1", name: "Kalash", category: "Traditional", type: "image" },
  { id: "t2", name: "Diya", category: "Traditional", type: "image" },
  { id: "t3", name: "Shankh", category: "Traditional", type: "image" },
  { id: "t4", name: "Lotus", category: "Traditional", type: "image" },
  { id: "t5", name: "Swastik", category: "Traditional", type: "image" },
  { id: "t6", name: "Mangal Kalash", category: "Traditional", type: "image" },

  { id: "a1", name: "Mandala", category: "Decorative", type: "image" },
  { id: "a2", name: "Floral Mandala", category: "Decorative", type: "image" },
  { id: "a3", name: "Wedding Arch", category: "Decorative", type: "image" },
  { id: "a4", name: "Lotus Border", category: "Decorative", type: "image" },
  { id: "a5", name: "Peacock", category: "Decorative", type: "image" },
  { id: "a6", name: "Wedding Bells", category: "Decorative", type: "image" },
];

export default function HinduBiodataPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    birthTime: "",
    birthPlace: "",
    gender: "",
    height: "",
    maritalStatus: "",
    motherTongue: "",
    currentCity: "",
    aboutMe: "",

    // Step 2 - Education & Career
highestQualification: "",
degreeCourse: "",
collegeUniversity: "",
occupation: "",
companyBusiness: "",
designation: "",
workLocation: "",
annualIncome: "",
careerDetails: "",

// Step 3 - Family Details
fatherName: "",
fatherOccupation: "",
motherName: "",
motherOccupation: "",
brothers: "",
sisters: "",
familyType: "",
familyLocation: "",
familyDetails: "",

// Step 4 - Hindu / Traditional Details
religion: "Hindu",
community: "",
subCommunity: "",
gotra: "",
rashi: "",
nakshatra: "",
manglik: "",
horoscopeAvailable: "",
traditionalDetails: "",

// Step 5 - Contact Details
contactPerson: "",
mobileNumber: "",
alternateNumber: "",
email: "",
address: "",
contactCity: "",
contactState: "",
  });

  const [selectedSymbolId, setSelectedSymbolId] = useState("none");
  const [symbolPickerOpen, setSymbolPickerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Load saved biodata when the page opens
// Load saved biodata when the page opens
useEffect(() => {
  try {
    const savedDraft = localStorage.getItem("hinduBiodataDraft");

    if (savedDraft) {
      const draft = JSON.parse(savedDraft);

      if (draft.formData) {
        setFormData((current) => ({
          ...current,
          ...draft.formData,
        }));
      }

      if (draft.selectedSymbolId) {
        setSelectedSymbolId(draft.selectedSymbolId);
      }

      if (draft.currentStep) {
        setCurrentStep(draft.currentStep);
      }
    }
  } catch (error) {
    console.error("Could not load biodata draft:", error);
  }

  setIsLoaded(true);
}, []);

// Automatically save biodata when details change
useEffect(() => {
  if (!isLoaded) return;

  try {
    localStorage.setItem(
      "hinduBiodataDraft",
    JSON.stringify({
  formData,
  selectedSymbolId,
  currentStep,
})
    );
  } catch (error) {
    console.error("Could not save biodata draft:", error);
  }
}, [formData, selectedSymbolId, currentStep, isLoaded]);

  const selectedSymbol =
    symbols.find((item) => item.id === selectedSymbolId) || symbols[0];

  const visibleSymbols = symbols.filter(
    (item) => item.category === activeCategory
  );

  function updateField(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function chooseSymbol(item: SymbolItem) {
    if (item.type === "image" && !item.image) {
      return;
    }

    setSelectedSymbolId(item.id);
    setSymbolPickerOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
              Hindu Biodata
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              100% Free
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Create Your Hindu Marriage Biodata
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Add only the information you want to show. You can type in any
            language or mix multiple languages.
          </p>

          <div className="mt-4 inline-flex rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
            Only Full Name is required. Everything else is optional.
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5">
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex min-w-[720px] items-center">
           <ProgressStep
  number="1"
  title="Personal"
  active={currentStep === 1}
/>

<ProgressLine />

<ProgressStep
  number="2"
  title="Education"
  active={currentStep === 2}
/>

<ProgressLine />

<ProgressStep
  number="3"
  title="Family"
  active={currentStep === 3}
/>

<ProgressLine />

<ProgressStep
  number="4"
  title="Traditional"
  active={currentStep === 4}
/>

<ProgressLine />

<ProgressStep
  number="5"
  title="Contact"
  active={currentStep === 5}
/>

<ProgressLine />

<ProgressStep
  number="6"
  title="Design"
  active={currentStep === 6}
/>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="space-y-6">
            {currentStep === 1 && (
               <>
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="text-sm font-bold text-orange-600">STEP 1 OF 6</p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Personal Details
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Only your name is required. Leave any other field blank if you
                do not want it on your biodata.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  required
                />

                {/* COMPACT SYMBOL FIELD */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Biodata Symbol
                  </label>

                  <button
                    type="button"
                    onClick={() => setSymbolPickerOpen(true)}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-left transition hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-7 min-w-7 items-center justify-center text-lg font-bold text-orange-600">
                        {selectedSymbol.type === "text" &&
                        selectedSymbol.value ? (
                          selectedSymbol.value.length < 5 ? (
                            selectedSymbol.value
                          ) : (
                            "ॐ"
                          )
                        ) : selectedSymbol.id === "none" ? (
                          <span className="text-slate-300">Ø</span>
                        ) : (
                          <span>◈</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {selectedSymbol.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Optional — click to choose
                        </p>
                      </div>
                    </div>

                    <span className="ml-3 text-slate-400">⌄</span>
                  </button>
                </div>

                <Field
                  label="Date of Birth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={updateField}
                  type="date"
                />

                <Field
                  label="Time of Birth"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={updateField}
                  type="time"
                />

                <Field
                  label="Place of Birth"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={updateField}
                  placeholder="City / Village"
                />

                <SelectField
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={updateField}
                  options={["Male", "Female", "Other"]}
                />

                <Field
                  label="Height"
                  name="height"
                  value={formData.height}
                  onChange={updateField}
                  placeholder={`Example: 5' 8"`}
                />

                <SelectField
                  label="Marital Status"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={updateField}
                  options={[
                    "Never Married",
                    "Divorced",
                    "Widowed",
                    "Separated",
                  ]}
                />

                <Field
                  label="Mother Tongue"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={updateField}
                  placeholder="Example: Marathi"
                />

                <Field
                  label="Current City"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={updateField}
                  placeholder="Example: Pune, Maharashtra"
                />

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    About Me
                  </label>

                  <textarea
                    name="aboutMe"
                    value={formData.aboutMe}
                    onChange={updateField}
                    rows={4}
                    placeholder="Write something about yourself..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
                  />
                </div>
              </div>
            </section>

            {/* PHOTO */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Profile Photo
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Optional. You can create your biodata without a photo.
              </p>

              <div className="mt-5 flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-center text-xs text-slate-400">
                      No
                      <br />
                      Photo
                    </span>
                  )}
                </div>

                <div>
                  <label className="inline-flex cursor-pointer rounded-xl border border-orange-200 px-5 py-3 text-sm font-bold text-orange-600 hover:bg-orange-50">
                    Choose Photo

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhoto}
                      className="hidden"
                    />
                  </label>

                  {photo && (
                    <button
                      type="button"
                      onClick={() => setPhoto(null)}
                      className="ml-3 text-sm font-semibold text-red-500"
                    >
                      Remove
                    </button>
                    )}
                </div>
              </div>
            </section>
            

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                disabled={!formData.fullName.trim()}
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Save & Continue →
              </button>
            </div>
            </>
)}

{currentStep === 2 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 2 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Education & Career
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      All fields are optional. Add only the education and career details
      you want to show on your biodata.
    </p>

   <div className="mt-7">
   <div className="mt-7 grid gap-5 sm:grid-cols-2">
  <Field
    label="Highest Qualification"
    name="highestQualification"
    value={formData.highestQualification}
    onChange={updateField}
    placeholder="Example: B.Tech, MBA, B.Com"
  />

  <Field
    label="Degree / Course"
    name="degreeCourse"
    value={formData.degreeCourse}
    onChange={updateField}
    placeholder="Example: Computer Science"
  />

  <Field
    label="College / University"
    name="collegeUniversity"
    value={formData.collegeUniversity}
    onChange={updateField}
    placeholder="College / University name"
  />

  <Field
    label="Occupation"
    name="occupation"
    value={formData.occupation}
    onChange={updateField}
    placeholder="Example: Software Engineer"
  />

  <Field
    label="Company / Business"
    name="companyBusiness"
    value={formData.companyBusiness}
    onChange={updateField}
    placeholder="Company or business name"
  />

  <Field
    label="Designation"
    name="designation"
    value={formData.designation}
    onChange={updateField}
    placeholder="Example: Senior Developer"
  />

  <Field
    label="Work Location"
    name="workLocation"
    value={formData.workLocation}
    onChange={updateField}
    placeholder="Example: Pune, Maharashtra"
  />

  <Field
    label="Annual Income"
    name="annualIncome"
    value={formData.annualIncome}
    onChange={updateField}
    placeholder="Example: ₹8–10 LPA"
  />

  <div className="sm:col-span-2">
    <label className="mb-2 block text-sm font-semibold text-slate-800">
      Additional Education / Career Details
    </label>

    <textarea
      name="careerDetails"
      value={formData.careerDetails}
      onChange={updateField}
      rows={4}
      placeholder="Add any additional education or career information..."
      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
    />
  </div>
</div>
</div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(1)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(3)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 3 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 3 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Family Details
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      All family details are optional. Add only the information you want to
      show on your biodata.
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label="Father's Name"
        name="fatherName"
        value={formData.fatherName}
        onChange={updateField}
        placeholder="Enter father's name"
      />

      <Field
        label="Father's Occupation"
        name="fatherOccupation"
        value={formData.fatherOccupation}
        onChange={updateField}
        placeholder="Example: Business, Service"
      />

      <Field
        label="Mother's Name"
        name="motherName"
        value={formData.motherName}
        onChange={updateField}
        placeholder="Enter mother's name"
      />

      <Field
        label="Mother's Occupation"
        name="motherOccupation"
        value={formData.motherOccupation}
        onChange={updateField}
        placeholder="Example: Homemaker, Teacher"
      />

      <Field
        label="Brothers"
        name="brothers"
        value={formData.brothers}
        onChange={updateField}
        placeholder="Example: 1"
      />

      <Field
        label="Sisters"
        name="sisters"
        value={formData.sisters}
        onChange={updateField}
        placeholder="Example: 1"
      />

      <SelectField
        label="Family Type"
        name="familyType"
        value={formData.familyType}
        onChange={updateField}
        options={["Nuclear Family", "Joint Family"]}
      />

      <Field
        label="Family Location"
        name="familyLocation"
        value={formData.familyLocation}
        onChange={updateField}
        placeholder="Example: Pune, Maharashtra"
      />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Additional Family Details
        </label>

        <textarea
          name="familyDetails"
          value={formData.familyDetails}
          onChange={updateField}
          rows={4}
          placeholder="Add any other family information you want to include..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(2)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(4)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 4 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 4 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Hindu / Traditional Details
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      All traditional details are optional. Add only the information you want
      to show on your biodata.
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label="Community / Caste"
        name="community"
        value={formData.community}
        onChange={updateField}
        placeholder="Enter community or caste"
      />

      <Field
        label="Sub-Community"
        name="subCommunity"
        value={formData.subCommunity}
        onChange={updateField}
        placeholder="Enter sub-community if applicable"
      />

      <Field
        label="Gotra"
        name="gotra"
        value={formData.gotra}
        onChange={updateField}
        placeholder="Enter Gotra"
      />

      <Field
        label="Rashi"
        name="rashi"
        value={formData.rashi}
        onChange={updateField}
        placeholder="Example: Mesh / Aries"
      />

      <Field
        label="Nakshatra"
        name="nakshatra"
        value={formData.nakshatra}
        onChange={updateField}
        placeholder="Enter Nakshatra"
      />

      <SelectField
        label="Manglik"
        name="manglik"
        value={formData.manglik}
        onChange={updateField}
        options={["Yes", "No", "Anshik Manglik", "Don't Know"]}
      />

      <SelectField
        label="Horoscope Available"
        name="horoscopeAvailable"
        value={formData.horoscopeAvailable}
        onChange={updateField}
        options={["Yes", "No"]}
      />

      <div className="hidden sm:block" />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Additional Traditional Details
        </label>

        <textarea
          name="traditionalDetails"
          value={formData.traditionalDetails}
          onChange={updateField}
          rows={4}
          placeholder="Add any other traditional, horoscope or family details you want to include..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(3)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(5)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 5 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 5 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Contact Details
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      All contact details are optional. Add only the information you want to
      show on your biodata.
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label="Contact Person"
        name="contactPerson"
        value={formData.contactPerson}
        onChange={updateField}
        placeholder="Example: Father, Brother or Self"
      />

      <Field
        label="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={updateField}
        placeholder="Enter mobile number"
      />

      <Field
        label="Alternate Number"
        name="alternateNumber"
        value={formData.alternateNumber}
        onChange={updateField}
        placeholder="Enter alternate number"
      />

      <Field
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={updateField}
        placeholder="example@email.com"
      />

      <Field
        label="City"
        name="contactCity"
        value={formData.contactCity}
        onChange={updateField}
        placeholder="Example: Pune"
      />

      <Field
        label="State"
        name="contactState"
        value={formData.contactState}
        onChange={updateField}
        placeholder="Example: Maharashtra"
      />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Full Address
        </label>

        <textarea
          name="address"
          value={formData.address}
          onChange={updateField}
          rows={4}
          placeholder="Enter address you want to show on the biodata..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(4)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(6)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Choose Design →
      </button>
    </div>
  </section>
)}
{currentStep === 6 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 6 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Design Your Biodata
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      Your details are ready. Now choose a design and preview your complete
      marriage biodata.
    </p>

    <div className="mt-7 rounded-2xl border border-orange-100 bg-orange-50 p-5">
      <p className="font-bold text-slate-900">
        🎉 Your biodata details are ready!
      </p>

      <p className="mt-1 text-sm leading-6 text-slate-600">
        Choose your favourite template below. All templates and downloads are
        completely free.
      </p>
    </div>

    <div className="mt-8">
      <h3 className="text-lg font-bold text-slate-900">
        Choose a Template
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        More free designs will be added over time.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-2xl border-2 border-orange-500 bg-orange-50 p-4 text-left"
        >
          <div className="flex h-44 items-center justify-center rounded-xl border border-orange-100 bg-white">
            <div className="text-center">
              <div className="text-3xl">ॐ</div>
              <p className="mt-3 font-bold text-slate-900">
                {formData.fullName || "Your Name"}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Marriage Biodata
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">
                Classic Orange
              </p>
              <p className="text-xs text-slate-500">
                Simple & traditional
              </p>
            </div>

            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
              Selected
            </span>
          </div>
        </button>

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
          <div className="flex h-44 items-center justify-center rounded-xl bg-white">
            <div className="text-center">
              <p className="text-3xl">✨</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                More Designs
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-slate-200 pt-8">
  <h3 className="text-xl font-bold text-slate-900">
    Biodata Preview
  </h3>

  <p className="mt-1 mb-5 text-sm text-slate-500">
    This is how your marriage biodata will look.
  </p>

  <HinduBiodataPreview
    fullName={formData.fullName}
    photo={photo}
    formData={formData}
  />
</div>
    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(5)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Preview Biodata →
      </button>
    </div>
  </section>
)}

          </div>

          {/* LIVE PREVIEW */}
          {currentStep !== 6 && (
  <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-bold text-slate-900">Live Preview</h2>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Live
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg">
                <div className="bg-orange-500 px-6 py-7 text-center text-white">
                  {selectedSymbol.id !== "none" && (
                    <div className="mb-4">
                      {selectedSymbol.type === "text" ? (
                        <div className="whitespace-pre-wrap text-xl font-bold">
                          {selectedSymbol.value}
                        </div>
                      ) : selectedSymbol.image ? (
                        <img
                          src={selectedSymbol.image}
                          alt={selectedSymbol.name}
                          className="mx-auto h-20 w-20 object-contain"
                        />
                      ) : null}
                    </div>
                  )}

                  {photo && (
                    <img
                      src={photo}
                      alt="Profile preview"
                      className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white/60 object-cover"
                    />
                  )}

                  <h3 className="break-words text-2xl font-bold">
                    {formData.fullName || "Your Name"}
                  </h3>

                  <p className="mt-1 text-xs text-orange-100">
                    Marriage Biodata
                  </p>
                </div>

                <div className="space-y-3 p-6 text-sm">
                  <PreviewRow label="Date of Birth" value={formData.dateOfBirth} />
                  <PreviewRow label="Time of Birth" value={formData.birthTime} />
                  <PreviewRow label="Place of Birth" value={formData.birthPlace} />
                  <PreviewRow label="Gender" value={formData.gender} />
                  <PreviewRow label="Height" value={formData.height} />
                  <PreviewRow
                    label="Marital Status"
                    value={formData.maritalStatus}
                  />
                  <PreviewRow
                    label="Mother Tongue"
                    value={formData.motherTongue}
                  />
                  <PreviewRow
                    label="Current City"
                    value={formData.currentCity}
                  />

                  {formData.aboutMe && (
                    <div className="border-t border-slate-100 pt-4">
                      <p className="mb-2 font-bold text-orange-600">
                        About Me
                      </p>

                      <p className="whitespace-pre-wrap break-words leading-6 text-slate-600">
                        {formData.aboutMe}
                      </p>
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
  <div className="border-t border-slate-100 pt-4">
    <p className="mb-3 font-bold text-orange-600">
      Education & Career
    </p>

    <div className="space-y-3">
      {formData.highestQualification && (
        <PreviewRow
          label="Qualification"
          value={formData.highestQualification}
        />
      )}

      {formData.degreeCourse && (
        <PreviewRow
          label="Degree / Course"
          value={formData.degreeCourse}
        />
      )}

      {formData.collegeUniversity && (
        <PreviewRow
          label="College / University"
          value={formData.collegeUniversity}
        />
      )}

      {formData.occupation && (
        <PreviewRow
          label="Occupation"
          value={formData.occupation}
        />
      )}

      {formData.companyBusiness && (
        <PreviewRow
          label="Company / Business"
          value={formData.companyBusiness}
        />
      )}

      {formData.designation && (
        <PreviewRow
          label="Designation"
          value={formData.designation}
        />
      )}

      {formData.workLocation && (
        <PreviewRow
          label="Work Location"
          value={formData.workLocation}
        />
      )}

      {formData.annualIncome && (
        <PreviewRow
          label="Annual Income"
          value={formData.annualIncome}
        />
      )}

      {formData.careerDetails && (
        <div className="pt-1">
          <p className="mb-1 font-semibold text-orange-600">
            Career Details
          </p>
          <p className="break-words text-slate-700">
            {formData.careerDetails}
          </p>
        </div>
      )}
    </div>
  </div>
)}
                </div>
              </div>
            </div>
           
         </aside>
         )}
        </div>
      </div>

      {/* SYMBOL PICKER MODAL */}
      {symbolPickerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6"
          onClick={() => setSymbolPickerOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
              <div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Choose Biodata Symbol
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select any symbol or choose No Symbol.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSymbolPickerOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            {/* Categories */}
            <div className="overflow-x-auto border-b border-slate-200 px-5 sm:px-7">
              <div className="flex min-w-max gap-2 py-4">
                {symbolCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Symbols */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {visibleSymbols.map((item) => {
                  const unavailable = item.type === "image" && !item.image;
                  const selected = selectedSymbolId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={unavailable}
                      onClick={() => chooseSymbol(item)}
                      className={`relative min-h-36 rounded-2xl border p-4 transition ${
                        selected
                          ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100"
                          : unavailable
                          ? "cursor-default border-slate-200 bg-slate-50"
                          : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex h-20 items-center justify-center">
                        {item.type === "text" ? (
                          item.value ? (
                            <span className="whitespace-pre-wrap text-center text-xl font-bold text-orange-600">
                              {item.value}
                            </span>
                          ) : (
                            <span className="text-3xl text-slate-300">Ø</span>
                          )
                        ) : item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 object-contain"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-2xl text-slate-300">
                            ◈
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-700">
                        {item.name}
                      </p>

                      {unavailable && (
                        <p className="mt-1 text-[10px] font-medium text-slate-400">
                          Artwork coming next
                        </p>
                      )}

                      {selected && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-center text-xs text-slate-500">
              Image artwork will use our own optimized assets for clean PDF and
              image downloads.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type ChangeHandler = (
  event: ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => void;

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: ChangeHandler;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: ChangeHandler;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
      >
        <option value="">Select if you want</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function PreviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  if (!value) return null;

  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
      <span className="shrink-0 text-slate-400">{label}</span>

      <span className="break-words text-right font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}

function ProgressStep({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
          active
            ? "bg-orange-500 text-white"
            : "border border-slate-200 bg-white text-slate-400"
        }`}
      >
        {number}
      </div>

      <span
        className={`mt-2 text-xs font-medium ${
          active ? "text-orange-600" : "text-slate-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function ProgressLine() {
  return <div className="mx-2 mb-5 h-px flex-1 bg-slate-200" />;
}