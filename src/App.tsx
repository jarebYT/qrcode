import { ArrowDown, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="relative h-screen flex items-end">
        <img
          src="./imgs/picture.png"
          alt="Motard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-6 pb-14 max-w-xl">
          <h1 className="text-4xl font-semibold leading-tight mb-6">
        Alexandre
          </h1>

          <p className="text-base text-white/70 max-w-sm mb-8">
        19 ans • Lille
        <br />
        Motard & Créateur de contenu
          </p>

          <a
        href="https://instagram.com/alexandre.vnvl"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
          >
        Instagram
        <Instagram className="h-4 w-4" />
          </a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center text-white/60 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* SECOND SCREEN */}
      <section className="min-h-screen px-6 py-20 flex items-center">
        <div className="max-w-xl mx-auto space-y-14">
          <p className="text-lg leading-relaxed text-white/80">
            Je fais surtout de la moto.
            <br />
            Et parfois des rencontres imprévues.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder-portrait.jpg"
              alt="Portrait"
              className="rounded-xl object-cover aspect-[3/4]"
            />
            <img
              src="/placeholder-bike.jpg"
              alt="Moto"
              className="rounded-xl object-cover aspect-[3/4]"
            />
          </div>

          <p className="text-sm text-white/50">
            C'était une bonne idée le qrcode, non ?
          </p>
        </div>
      </section>
    </div>
  );
}
