import { useState } from "react";

export default function App() {
  const [halaman, setHalaman] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">Keamanan HMC</h1>
        <div className="space-x-4">
          <button onClick={() => setHalaman("home")}>Home</button>
          <button onClick={() => setHalaman("materi")}>Materi</button>
          <button onClick={() => setHalaman("kontak")}>Kontak</button>
        </div>
      </nav>
      <div className="p-6">
        {halaman === "home" && <h2 className="text-2xl font-bold">Selamat Datang</h2>}
        {halaman === "materi" && <h2 className="text-2xl font-bold">Materi Keamanan</h2>}
        {halaman === "kontak" && <h2 className="text-2xl font-bold">Kontak Kami</h2>}
      </div>
    </div>
  );
}
