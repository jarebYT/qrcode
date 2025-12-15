import { Instagram, TrendingUp, Zap, Radio, Bike, Info } from 'lucide-react';

export default function App() {
  const links = [
    {
      name: 'Instagram',
      subtitle: 'probablement la suite logique - @alexandre.vnvl',
      icon: Instagram,
      url: 'https://instagram.com/alexandre.vnvl',
      span: 'col-span-2',
      gradient: 'from-pink-500 to-orange-400',
    },
    {
      name: 'TikTok',
      subtitle: 'du contenu de qualité',
      icon: TrendingUp,
      url: 'https://tiktok.com/@alexandre.vnvl',
      span: 'col-span-1',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Discord',
      subtitle: 'promis, je suis civilisé',
      icon: Zap,
      url: 'https://discord.com/users/423865869236436992',
      span: 'col-span-1',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Projets (GitHub)',
      subtitle: 'des choses pas toujours finies',
      icon: Radio,
      url: 'https://github.com/jarebYT',
      span: 'col-span-2',
      gradient: 'from-yellow-400 to-yellow-500',
    },
    {
      name: 'Pourquoi ce site existe ?',
      subtitle: 'une expérience sociale, sûrement',
      icon: Info,
      url: 'https://instagram.com/alexandre.vnvl',
      span: 'col-span-2',
      gradient: 'from-slate-800 to-black',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-rose-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* HERO */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-rose-500 to-pink-500 shadow-xl">
            <Bike className="h-12 w-12 text-white" strokeWidth={1.5} />
          </div>

          <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Tu viens de scanner le QR code sur mon sweat.<br />
            <span className="text-gray-700">On est d'accord, c'était tentant.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
            Alexandre · motard · créateur · Lille 🏍️
          </p>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.span} group relative overflow-hidden rounded-3xl bg-gradient-to-br ${link.gradient} p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-95`}
              >
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                <div className="relative flex h-full items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-base sm:text-lg font-bold text-white">
                      {link.name}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white/80">
                      {link.subtitle}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white/20 p-3 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white/30">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Tu peux fermer l’onglet… ou cliquer sur Instagram 😉 
          </p>
        </div>
      </div>
    </div>
  );
}
