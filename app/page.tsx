export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600">
          Marriage Biodata Maker
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Create your beautiful marriage biodata for free.
        </p>

        <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white">
          Create Free Biodata
        </button>
      </div>
    </main>
  );
}