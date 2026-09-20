import Link from "next/link";

export default function ChooseBiodataType() {
  const types = [
    {
      name: "Hindu",
      symbol: "ॐ",
      description:
        "Create a biodata with optional community, gotra, rashi, nakshatra and other traditional details.",
      href: "/create/hindu",
    },
    {
      name: "Muslim",
      symbol: "☪",
      description:
        "Create a clean marriage biodata with relevant personal, family, education and other optional details.",
      href: "/create/muslim",
    },
    {
      name: "Christian",
      symbol: "✝",
      description:
        "Create a marriage biodata with optional denomination, church, family and other relevant details.",
      href: "/create/christian",
    },
    {
      name: "General / Other",
      symbol: "♡",
      description:
        "Create a simple marriage biodata without religion-specific fields.",
      href: "/create/general",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-orange-500">
            LET&apos;S GET STARTED
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose Your Biodata Type
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Select the type that suits you. Your biodata form and templates
            will be customized accordingly.
          </p>

          <p className="mt-2 text-sm font-medium text-slate-500">
            You can enter your details in any language or mix multiple
            languages.
          </p>
        </div>

        {/* Biodata Types */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {types.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-orange-600">
                {type.symbol}
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {type.name} Biodata
              </h2>

              <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">
                {type.description}
              </p>

              <div className="mt-5 flex items-center font-semibold text-orange-600">
                Select {type.name}
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Privacy */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-green-100 bg-green-50 p-5 text-center">
          <p className="font-semibold text-green-800">
            🔒 Your Privacy Matters
          </p>

          <p className="mt-1 text-sm text-green-700">
            No login required. Create your biodata freely and download it
            directly.
          </p>
        </div>
      </section>
    </main>
  );
}