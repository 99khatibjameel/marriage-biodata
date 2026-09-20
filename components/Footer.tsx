import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-orange-600">
              Marriage Biodata
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Create beautiful marriage biodata online for free. No login,
              no payment and no complicated process.
            </p>
          </div>

          {/* Biodata */}
          <div>
            <h3 className="font-bold text-slate-900">
              Biodata Maker
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
              <Link href="/create/hindu">Hindu Biodata</Link>
              <Link href="/create/muslim">Muslim Biodata</Link>
              <Link href="/create/christian">Christian Biodata</Link>
              <Link href="/create/general">General Biodata</Link>
            </div>
          </div>

          {/* Important */}
          <div>
            <h3 className="font-bold text-slate-900">
              Important
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
              <Link href="/about">About Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Marriage Biodata Maker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}