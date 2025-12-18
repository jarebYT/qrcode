import { ArrowDown, Instagram, Github, MessageCircle } from 'lucide-react';

function LinksSection() {
  const items = [
    {
      title: 'Instagram',
      subtitle: 'là où je suis vraiment actif',
      icon: Instagram,
      href: 'https://instagram.com/alexandre.vnvl',
    },
    {
      title: 'Mes projets',
      subtitle: 'pas tous terminés',
      icon: Github,
      href: 'https://github.com/jarebYT',
    },
    {
      title: 'Discord',
      subtitle: 'promis, je suis civilisé',
      icon: MessageCircle,
      href: 'https://discord.com/users/423865869236436992',
    },
  ];

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-xl space-y-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{item.title}</span>
                <span className="text-xs text-white/60">{item.subtitle}</span>
              </div>
              <Icon className="h-5 w-5 text-white/50 transition group-hover:text-white" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="relative h-screen flex items-end">
        <img
          src="qrcode/imgs/picture.png"
          alt="Motard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-6 pb-14 max-w-xl">
          <h1 className="text-4xl font-semibold leading-tight mb-6">Alexandre</h1>

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
      <section className="px-6 py-20 flex flex-col items-center">
        <div className="max-w-xl mx-auto space-y-14">
          <p className="text-lg leading-relaxed text-white/80">
            Avoue, t'étais curieux·se non ?
            <br />
          </p>

          <LinksSection />

          <div className="grid grid-cols-2 gap-4">
            <img
              src="qrcode/imgs/selfie.jpg"
              alt="Portrait"
              className="rounded-xl object-cover aspect-[3/4]"
            />
            <img
              src="qrcode/imgs/bike.jpg"
              alt="Moto"
              className="rounded-xl object-cover aspect-[3/4]"
            />
          </div>
          <section className="px-6 pb-12 flex justify-center">
            <div className="max-w-xl mx-auto">
              <p className="text-sm text-white/50">
                C'était une bonne idée le qrcode, non ?
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
    
  );
}
