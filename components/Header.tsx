import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        {/* Temporary Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold leading-none text-orange-600">
            Marriage Biodata
          </span>
          <span className="mt-1 text-xs text-slate-500">
            Free Biodata Maker
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-medium text-green-700 sm:block">
            ✓ 100% Free
          </span>

          <Link
            href="/create"
            className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Create Biodata
          </Link>
        </div>
      </div>
    </header>
  );
}